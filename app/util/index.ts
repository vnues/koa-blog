import db from '../db/mysql'

// 为什么promise有类型
// Promise有catch,可以捕获错误
// async await可以通过try catch
// 想想await a().catch()的写法有点怪怪的，所以支持try catch写法
// 但是我推荐用to的写法
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
  console.log('我是err', err)
  if (err) {
    throw new Error(err)
  }
  return res
}

export const getFormatTime = (time: number | number) => {
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
