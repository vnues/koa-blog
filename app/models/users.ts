import db from '../db/mysql'
class UsersModel {
  async getUsers() {
    const sql = `select * from users;`
    const res = await db.exec(sql)
    return res
  }
}

export default new UsersModel()
