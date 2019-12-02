'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const fs = require('fs')
exports.default = app => {
  fs.readdirSync(__dirname).forEach(file => {
    if (file === 'index.js') {
      return
    }
    const route = require(`./${file}`)
    app.use(route.routes()).use(route.allowedMethods())
  })
}
