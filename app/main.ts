import Koa from 'koa'
import koaStatic from 'koa-static'
import error from 'koa-json-error'
import path from 'path'
import routing from './routes'
import { port } from './config/app'
import dotenv from 'dotenv'
import db from './db/mysql'
import fs from 'fs'
import morgan from 'koa-morgan'
import parameter from 'koa-parameter'
import koaBody from 'koa-body'
const app = new Koa()
const accessLogStream = fs.createWriteStream(
  path.join(__dirname, '../', 'logs', 'access.log'),
  {
    flags: 'a'
  }
)

const errorLogStream = fs.createWriteStream(
  path.join(__dirname, '../', 'logs', 'error.log'),
  {
    flags: 'a'
  }
)

// 自定义错误响应
app.use(
  error({
    postFormat: (e: any, { stack, ...rest }: any) =>
      process.env.NODE_ENV === 'production' ? rest : { stack, ...rest }
  })
)
// 解析body
app.use(koaBody({ multipart: true }))

// 错误日志
app.use(async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    app.use(morgan('combined', { stream: errorLogStream }))
    throw new Error(err)
  }
})

// 访问日志
app.use(morgan('combined', { stream: accessLogStream }))

// 参数校验
app.use(parameter(app))

// 注入环境变量
dotenv.config()

// 挂载静态资源
app.use(koaStatic(path.join(__dirname, 'public')))

// 连接数据库
db.connect()

routing(app)
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
