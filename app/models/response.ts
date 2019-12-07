class BaseModel<T> {
  errcode: number
  errmsg: string
  data: T // 泛型约束
  constructor(data: T) {
    if (data) {
      this.data = data
    }
  }
}

export class SuccessModel<T> extends BaseModel<T> {
  constructor(data: T) {
    super(data)
    this.errcode = 0
    this.errmsg = 'success'
  }
}

// 针对于请求成功但是操作失败的响应格式
export class FailModel<T> extends BaseModel<T> {
  constructor(data: T, errmsg: string) {
    super(data)
    this.errcode = -1
    this.errmsg = errmsg
  }
}
