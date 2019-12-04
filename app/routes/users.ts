import Router from 'koa-router'
import UsersCtl from '../controllers/users'
const { find } = UsersCtl
const router = new Router({ prefix: '/users' })
router.get('/', find)

export default router
