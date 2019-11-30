import * as Koa from 'koa'
import * as Router from 'koa-router'

const app = new Koa()

const router = new Router()

router.get('/*', async ctx => {
  ctx.body = 'Hello World!12313'
})

app.use(router.routes())

app.listen(9000)

console.log('Server running on port 3000')

// 想想确实也是 现在浏览器是不支持ts或者node也是，需要编译过的，所以运行dist编译过的文件也是
// 前端也是经过webpack打包ts编译过后dist文件，实际就是运行这个文件
