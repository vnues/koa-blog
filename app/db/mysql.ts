import mysql from 'mysql'
class Db {
  con: mysql.Connection
  connect() {
    this.con = mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      port: Number(process.env.DB_PORT)
    })
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
