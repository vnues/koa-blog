import UsersModel from '../models/users'
import { SuccessModel } from '../models/response'
const { getUsers } = UsersModel
class UsersCtl {
  async find(ctx: any) {
    const res = await getUsers()
    ctx.body = new SuccessModel(res)
  }
}

export default new UsersCtl()
