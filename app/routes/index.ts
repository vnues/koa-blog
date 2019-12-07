import fs from 'fs'
import Koa from 'koa'
import Router from 'koa-router'
export default (app: Koa) => {
  fs.readdirSync(__dirname).forEach(async (file: string) => {
    if (file === 'index.ts' || file === 'index.js') {
      return
    }
    const fileArr = file.split('.')
    let router: Router
    if (fileArr[1] === 'js') {
      // 注意import()是异步加载 import（）会先执行加载进来的文件 与require相似
      const module = await import(`./${fileArr[0]}.js`)
      router = module.default
    } else {
      const module = await import(`./${fileArr[0]}.ts`)
      router = module.default
    }
    app.use(router.routes()).use(router.allowedMethods())
  })
}
