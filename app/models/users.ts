import { exec, getFormatTime } from '../util'
class UsersModel {
  async getUsers(name: string) {
    const sql = `SELECT * FROM USERS WHERE name='${name}';`
    // 注意这个res是结果的意思可能是result也可能是error，所以很难分清楚
    // 显然不好，所以遇到异步操作就应该封装好返回对应的result和error 这一点go强类型做的很好
    // await to是等到to这个异步Promise函数执行完再执行下一步，通常
    return exec(sql)
  }
  async postUsers(user: any) {
    const { name, password, email, phone } = user
    const registration_time = getFormatTime(new Date().getTime())
    console.log(name, password, email, phone)
    const sql = `INSERT INTO USERS (name,password,email,phone,registration_time) VALUES ('${name}','${password}','${email}','${phone}','${registration_time}');`
    return exec(sql)
    // 注意我们自己有自定义错误响应 凡是错误❌就会报5xx
  }
}

export default new UsersModel()
