'use strict'
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
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
const koa_1 = __importDefault(require('koa'))
const koa_static_1 = __importDefault(require('koa-static'))
const koa_json_error_1 = __importDefault(require('koa-json-error'))
const path_1 = __importDefault(require('path'))
const routes_1 = __importDefault(require('./routes'))
const app_1 = require('./config/app')
const mysql_1 = __importDefault(require('./db/mysql'))
const app = new koa_1.default()
// 自定义错误响应
app.use(
  koa_json_error_1.default({
    // stack堆栈报错信息
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
app.use(koa_static_1.default(path_1.default.join(__dirname, 'public')))
// 连接数据库
mysql_1.default.connect()
routes_1.default(app)
app.listen(app_1.port, () => {
  console.log(`Server running on port ${app_1.port}`)
})
