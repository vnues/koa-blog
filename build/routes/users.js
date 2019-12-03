const Router = require('koa-router')
const { find } = require('../controllers/users')
console.log('find', find)
console.log(require('../controllers/users'))
const router = new Router({ prefix: '/users' })
router.get('/', find)
// 因为是require出去的 所以不得不用module.exports
module.exports = router
