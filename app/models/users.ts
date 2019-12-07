import { exec, getFormatTime } from '../util'
class UsersModel {
  async getUsers(name: string) {
    const sql = `SELECT name,email,avatar,level,rights FROM USERS WHERE name='${name}';`
    return exec(sql)
  }
  async getUsersById(id: string) {
    const sql = `SELECT name,email,avatar,level,rights FROM USERS WHERE id='${id}';`
    return exec(sql)
  }
  async postUsers(user: IRequestUser) {
    const { name, password, email, phone } = user
    const registration_time = getFormatTime(new Date().getTime())
    const sql = `INSERT INTO USERS (name,password,email,phone,registration_time) VALUES ('${name}','${password}','${email}','${phone}','${registration_time}');`
    return exec(sql)
  }
  async getLoginUsers(name: string, password: string) {
    const sql = `SELECT id,name,avatar FROM USERS WHERE name='${name}' and password='${password}';`
    return exec(sql)
  }
}

export default new UsersModel()
