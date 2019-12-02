'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const { find_sql } = require('../models/users')
class UsersCtl {
  async find(ctx) {
    const res = find_sql(ctx.query)
    console.log(res)
  }
}
exports.default = new UsersCtl()
