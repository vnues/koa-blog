'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const mysql_1 = require('../db/mysql')
class UsersModel {
  async find_sql(query) {
    const sql = `select * from users`
    const res = await mysql_1.default(sql)
    return res
  }
}
exports.default = new UsersModel()
