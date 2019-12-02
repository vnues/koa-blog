import * as fs from 'fs'
export default (app: any) => {
  fs.readdirSync(__dirname).forEach((file: string) => {
    if (file === 'index.js') {
      return
    }
    const route = require(`./${file}`)
    app.use(route.routes()).use(route.allowedMethods())
  })
}
