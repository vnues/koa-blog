import { exec, getFormatTime } from '../util'
class UsersModel {
  async getUsers(name: string) {
    const sql = `SELECT * FROM USERS WHERE name='${name}';`
    return exec(sql)
  }
  async postUsers(user: IRequestUser) {
    const { name, password, email, phone } = user
    const res = await this.getUsers(name)
    const registration_time = getFormatTime(new Date().getTime())
    const sql = `INSERT INTO USERS (name,password,email,phone,registration_time) VALUES ('${name}','${password}','${email}','${phone}','${registration_time}');`
    return exec(sql)
  }
}

export default new UsersModel()
