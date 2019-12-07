import Router from 'koa-router'
import UsersCtl from '../controllers/users'
import jwt from 'koa-jwt'
const { find, create, login, findById } = UsersCtl
const router = new Router({ prefix: '/users' })
const auth = jwt({ secret: `${process.env.JWT_SECRET}` })
console.log(auth)
router.get('/', auth, find)
router.get('/:id', auth, findById)
router.post('/', create)
router.post('/login', login)
export default router
