import UsersModel from '../models/users'
import Koa from 'koa'
import { SuccessModel } from '../models/response'
const { getUsers, postUsers } = UsersModel
class UsersCtl {
  async find(ctx: Koa.Context) {
    ctx.verifyParams({ name: { type: 'string', required: false } })
    const name = ctx.request.query.name
    // getUsers已经做了错误处理，这一层不做
    const res = await getUsers(name)
    ctx.body = new SuccessModel(res)
  }
  async create(ctx: Koa.Context) {
    console.log('走这步')
    console.log(ctx.request.body)
    ctx.verifyParams({
      name: { type: 'string', required: true },
      password: { type: 'string', required: true },
      email: { type: 'string', required: true },
      phone: { type: 'number', required: true }
    })
    const res = await postUsers(ctx.request.body)
    ctx.body = new SuccessModel(res)
  }
}

export default new UsersCtl()
