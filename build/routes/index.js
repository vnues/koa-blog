const fs = require('fs')
module.exports = app => {
  fs.readdirSync(__dirname).forEach(file => {
    console.log(file)
    if (file === 'index.ts' || 'index.js') {
      return
    }
    const router = require(`./${file.split('.')[0]}.js`)
    console.log(router)
    app.use(router.routes()).use(router.allowedMethods())
  })
}
