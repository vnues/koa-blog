'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
const fs_1 = __importDefault(require('fs'))
exports.default = app => {
  fs_1.default.readdirSync(__dirname).forEach(file => {
    console.log(file)
    if (file === 'index.ts' || file === 'index.js') {
      return
    }
    const fileArr = file.split('.')
    const router =
      fileArr[1] === 'js'
        ? require(`./${fileArr[0]}.js`)
        : require(`./${fileArr[0]}.ts`)
    console.log('router', router)
    app.use(router.routes()).use(router.allowedMethods())
  })
}
