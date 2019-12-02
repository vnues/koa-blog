const { find_sql } = require('../models/users')
class UsersCtl {
  async find(ctx: any) {
    const res = find_sql(ctx.query)
    console.log(res)
  }
}

export default new UsersCtl()
