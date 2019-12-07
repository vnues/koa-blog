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
    this.con.connect((error: mysql.MysqlError) => {
      if (error) {
        console.log('数据库连接失败')
        throw new Error(error.sqlMessage)
      }
      console.log('数据库连接成功')
    })
  }
  exec(sql: string) {
    return new Promise((resolve, reject) => {
      this.con.query(sql, (error: mysql.MysqlError, results: any) => {
        if (error) {
          reject(error.sqlMessage)
        }
        resolve(results)
      })
    })
  }
}

export default new Db()
