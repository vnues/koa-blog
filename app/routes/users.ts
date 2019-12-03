import Router from 'koa-router'
import UsersCtl from '../controllers/users'
const { find } = UsersCtl
const router = new Router({ prefix: '/users' })
router.get('/', find)

// 感觉混用不好 这块想办法优化
module.exports = router
