import Koa from 'koa'
import koaStatic from 'koa-static'
import error from 'koa-json-error'
import path from 'path'
import routing from './routes'
import { port } from './config/app'
import dotenv from 'dotenv'
import db from './db/mysql'
const app = new Koa()

// 注入环境变量
dotenv.config()

// 自定义错误响应
app.use(
  error({
    // stack堆栈报错信息
    postFormat: (e: any, { stack, ...rest }: any) =>
      process.env.NODE_ENV === 'production' ? rest : { stack, ...rest }
  })
)
// 挂载静态资源
app.use(koaStatic(path.join(__dirname, 'public')))

// 连接数据库
db.connect()

routing(app)
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
