import UsersModel from '../models/users'
import Koa from 'koa'
import { SuccessModel, ErrorModel } from '../models/response'
const { getUsers, postUsers } = UsersModel
class UsersCtl {
  async find(ctx: Koa.Context) {
    ctx.verifyParams({ name: { type: 'string', required: false } })
    const name = ctx.request.query.name
    const res = await getUsers(name)
    ctx.body = new SuccessModel(res)
  }
  async create(ctx: Koa.Context) {
    ctx.verifyParams({
      name: { type: 'string', required: true },
      password: { type: 'string', required: true },
      email: { type: 'string', required: true },
      phone: { type: 'number', required: true }
    })
    const { name } = ctx.request.body
    const repeatedUser = await getUsers(name)
    if (repeatedUser && repeatedUser.length) {
      ctx.body = new ErrorModel(null, '用户名已经占用')
      return
    }
    const res = await postUsers(ctx.request.body)
    ctx.body = new SuccessModel(res)
  }
}

export default new UsersCtl()
