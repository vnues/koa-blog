import * as Koa from 'koa'
import * as koaStatic from 'koa-static'
import * as error from 'koa-json-error'
import * as path from 'path'
import routing from './routes'
import APP_CONF from './config/app'
const app = new Koa()

const { port } = APP_CONF
console.log(port)
// 自定义错误响应
// stack堆栈报错信息
app.use(
  error({
    postFormat: (e, { stack, ...rest }) =>
      process.env.NODE_ENV === 'production' ? rest : { stack, ...rest }
  })
)
// 挂载静态资源
app.use(koaStatic(path.join(__dirname, 'public')))
// routing(app)
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
