import Router from 'koa-router'
import UsersCtl from '../controllers/users'
const { find } = UsersCtl
console.log('find', find)
const router = new Router({ prefix: '/users' })
router.get('/', find)

module.exports = router
