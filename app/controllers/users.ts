import UsersModel from '../models/users'
import Koa from 'koa'
import { SuccessModel, FailModel } from '../models/response'
const { getUsers, postUsers, getLoginUsers, getUsersById } = UsersModel
import { createToken } from '../util'
class UsersCtl {
  async find(ctx: Koa.Context) {
    ctx.verifyParams({ name: { type: 'string', required: false } })
    const name = ctx.request.query.name
    const res = await getUsers(name)
    ctx.body = new SuccessModel(res)
  }
  async findById(ctx: Koa.Context) {
    const res = await getUsers(ctx.params.id)
    ctx.body = new SuccessModel(res)
  }
  async create(ctx: Koa.Context) {
    ctx.verifyParams({
      name: { type: 'string', required: true },
      password: { type: 'string', required: true },
      email: { type: 'string', required: true },
      phone: { type: 'number', required: true }
    })
    const { name, avatar } = ctx.request.body
    const repeatedUser = await getUsers(name)
    if (repeatedUser && repeatedUser.length) {
      ctx.body = new FailModel(null, '用户名已经占用')
      return
    }

    const res = await postUsers(ctx.request.body)
    const id = res.insertId
    const token = createToken(id, name, avatar)
    ctx.body = new SuccessModel({ token })
  }
  async login(ctx: Koa.Context) {
    ctx.verifyParams({
      name: { type: 'string', required: true },
      password: { type: 'string', required: true }
    })
    const { name, password } = ctx.request.body
    const loginUser = await getLoginUsers(name, password)
    if (!loginUser.length) {
      ctx.body = new FailModel(null, '用户名或者密码不正确')
      return
    }
    const { id, avatar } = loginUser[0]
    const token = createToken(id, name, avatar)
    ctx.body = new SuccessModel({ token })
  }
}

export default new UsersCtl()
