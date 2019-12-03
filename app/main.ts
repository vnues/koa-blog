const Koa = require('koa')
const koaStatic = require('koa-static')
const error = require('koa-json-error')
const path = require('path')
const routing = require('./routes')
const AppConfig = require('./config/app')
const app = new Koa()
const { port } = AppConfig
console.log(port)
// 自定义错误响应
// stack堆栈报错信息
app.use(
  error({
    postFormat: (e: any, { stack, ...rest }: any) =>
      process.env.NODE_ENV === 'production' ? rest : { stack, ...rest }
  })
)
// 挂载静态资源
app.use(koaStatic(path.join(__dirname, 'public')))
console.log(routing)
routing(app)
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
