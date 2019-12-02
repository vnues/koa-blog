import * as Router from 'koa-router'
const { find } = require('../controllers/users')
const router = new Router({ prefix: '/users' })

router.get('/', find)

export default router
