import fs from 'fs'
export default (app: any) => {
  fs.readdirSync(__dirname).forEach((file: string) => {
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
