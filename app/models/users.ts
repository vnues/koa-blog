import db from '../db/mysql'
class UsersModel {
  async getUsers(ctx: any) {
    ctx.verifyParams({ name: { type: 'string', required: false } })
    const sql = `select * from users where name='${ctx.query.name}';`
    const res = await db.exec(sql)
    return res
  }
}

export default new UsersModel()
