'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const mysql = require('mysql')
const mysql_1 = require('../config/mysql')
const con = mysql.createConnection(mysql_1.default)
con.connect(error => {
  if (error) {
    console.error('数据库连接失败')
    return
  }
  console.log('数据库连接成功')
})
const exec = sql => {
  return new Promise((resolve, reject) => {
    con.query(sql, (error, results) => {
      if (error) {
        reject(error)
        return
      }
      resolve(results)
    })
  })
}
exports.default = exec
