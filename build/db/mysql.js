const mysql = require('mysql')
const MysqlConf = require('../config/mysql')
const con = mysql.createConnection(MysqlConf)
con.connect(error => {
  if (error) {
    console.error('数据库连接失败')
    console.log(error)
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
module.exports = exec
