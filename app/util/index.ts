import db from '../db/mysql'
import crypto from 'crypto'
import jsonwebtoken from 'jsonwebtoken'
export const to = (promise: any) => {
  if (!promise) {
    return new Promise((resolve, reject) => {
      reject(new Error('requires promises as the param'))
    }).catch((err: Error) => {
      return [err, null]
    })
  }
  return promise
    .then(function() {
      const arr = Array.from(arguments)
      return [null, ...arr]
    })
    .catch((err: Error) => {
      return [err, null]
    })
}

export const exec = async (sql: string) => {
  const [err, res] = await to(db.exec(sql))
  if (err) {
    throw new Error(err)
  }
  return res
}

export const getFormatTime = (time: number) => {
  const date = new Date(time)
  const year = date.getFullYear() + '-'
  const month =
    (date.getMonth() + 1 < 10
      ? '0' + (date.getMonth() + 1)
      : date.getMonth() + 1) + '-'
  const dates = date.getDate() + ' '
  const hour = date.getHours() + ':'
  const min = date.getMinutes() + ':'
  const second = date.getSeconds()
  return year + month + dates + hour + min + second
}

// md5 加密
export const md5 = (content: string) => {
  let md5 = crypto.createHash('md5')
  return md5.update(content).digest('hex') // 把输出编程16进制的格式
}

// 加密函数
export const genPassword = (password: string) => {
  const str = `password=${password}&key=${process.env.SECRET_KEY}` // 拼接方式是自定的，只要包含密匙即可
  return md5(str)
}

// 生成token
export const createToken = (
  id: number | string,
  name: string,
  avatar: string
) => {
  return jsonwebtoken.sign({ id, name, avatar }, `${process.env.JWT_SECRET}`, {
    expiresIn: '1d'
  })
}
