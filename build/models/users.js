'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
const mysql_1 = __importDefault(require('../db/mysql'))
class UsersModel {
  async getUsers() {
    const sql = `select * from users;`
    const res = await mysql_1.default.exec(sql)
    return res
  }
}
exports.default = new UsersModel()
