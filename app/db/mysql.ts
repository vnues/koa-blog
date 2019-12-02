import * as mysql from 'mysql'
import MYSQL_CONF from '../config/mysql'
const con = mysql.createConnection(MYSQL_CONF)
con.connect((error: mysql.MysqlError) => {
  if (error) {
    console.error('数据库连接失败')
    return
  }
  console.log('数据库连接成功')
})

const exec = (sql: string) => {
  return new Promise((resolve, reject) => {
    con.query(sql, (error: mysql.MysqlError, results: any) => {
      if (error) {
        reject(error)
        return
      }
      resolve(results)
    })
  })
}

export default exec
