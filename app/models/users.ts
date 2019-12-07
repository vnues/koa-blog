import { exec, getFormatTime } from '../util'
class UsersModel {
  async getUsers(name: string) {
    const sql = `SELECT name,email,avatar,level,rights FROM USERS WHERE name='${name}';`
    return exec(sql)
  }
  async postUsers(user: IRequestUser) {
    const { name, password, email, phone } = user
    const registration_time = getFormatTime(new Date().getTime())
    const sql = `INSERT INTO USERS (name,password,email,phone,registration_time) VALUES ('${name}','${password}','${email}','${phone}','${registration_time}');`
    return exec(sql)
  }
}

export default new UsersModel()
