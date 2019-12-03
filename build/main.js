var __rest =
  (this && this.__rest) ||
  function(s, e) {
    var t = {}
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p]
    if (s != null && typeof Object.getOwnPropertySymbols === 'function')
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (
          e.indexOf(p[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(s, p[i])
        )
          t[p[i]] = s[p[i]]
      }
    return t
  }
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
    postFormat: (e, _a) => {
      var { stack } = _a,
        rest = __rest(_a, ['stack'])
      return process.env.NODE_ENV === 'production'
        ? rest
        : Object.assign({ stack }, rest)
    }
  })
)
// 挂载静态资源
app.use(koaStatic(path.join(__dirname, 'public')))
console.log(routing)
routing(app)
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
