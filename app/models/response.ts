class BaseModel {
  errcode: number
  errmsg: string
  data: any
  constructor(data: any) {
    if (data) {
      this.data = data
    }
  }
}

export class SuccessModel extends BaseModel {
  constructor(data: any) {
    super(data)
    this.errcode = 0
    this.errmsg = 'success'
  }
}

export class ErrorModel extends BaseModel {
  constructor(data: any, errmsg: string) {
    super(data)
    this.errcode = -1
    this.errmsg = errmsg
  }
}
