'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
const mysql_1 = __importDefault(require('mysql'))
const mysql_2 = __importDefault(require('../config/mysql'))
class Db {
  constructor() {
    this.con = mysql_1.default.createConnection(mysql_2.default)
  }
  connect() {
    this.con.connect(error => {
      if (error) {
        console.log('数据库连接失败')
        throw new error(error)
      }
      console.log('数据库连接成功')
    })
  }
  exec(sql) {
    return new Promise((resolve, reject) => {
      this.con.query(sql, (error, results) => {
        if (error) {
          reject(error)
          return
        }
        resolve(results)
      })
    })
  }
}
exports.default = new Db()
