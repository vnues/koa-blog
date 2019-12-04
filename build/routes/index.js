'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
var __importStar =
  (this && this.__importStar) ||
  function(mod) {
    if (mod && mod.__esModule) return mod
    var result = {}
    if (mod != null)
      for (var k in mod)
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k]
    result['default'] = mod
    return result
  }
Object.defineProperty(exports, '__esModule', { value: true })
const fs_1 = __importDefault(require('fs'))
exports.default = app => {
  fs_1.default.readdirSync(__dirname).forEach(async file => {
    if (file === 'index.ts' || file === 'index.js') {
      return
    }
    const fileArr = file.split('.')
    let router
    if (fileArr[1] === 'js') {
      // 注意import()是异步加载
      const module = await Promise.resolve().then(() =>
        __importStar(require(`./${fileArr[0]}.js`))
      )
      router = module.default
    } else {
      const module = await Promise.resolve().then(() =>
        __importStar(require(`./${fileArr[0]}.ts`))
      )
      router = module.default
    }
    app.use(router.routes()).use(router.allowedMethods())
  })
}
