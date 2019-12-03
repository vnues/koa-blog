import mysql from 'mysql'
import config from '../config/mysql'
class Db {
  con = mysql.createConnection(config)
  connect() {
    this.con.connect((error: any) => {
      if (error) {
        console.log('数据库连接失败')
        throw new error(error)
      }
      console.log('数据库连接成功')
    })
  }
  exec(sql: string) {
    return new Promise((resolve, reject) => {
      this.con.query(sql, (error: any, results: any) => {
        if (error) {
          reject(error)
          return
        }
        resolve(results)
      })
    })
  }
}

export default new Db()
