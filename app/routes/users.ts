import Router from 'koa-router'
import UsersCtl from '../controllers/users'
const { find, create } = UsersCtl
const router = new Router({ prefix: '/users' })
router.get('/', find)
router.post('/', create)

export default router
