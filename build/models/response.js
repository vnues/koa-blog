'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
class BaseModel {
  constructor(data) {
    if (data) {
      this.data = data
    }
  }
}
class SuccessModel extends BaseModel {
  constructor(data) {
    super(data)
    this.errcode = 0
    this.errmsg = 'success'
  }
}
exports.SuccessModel = SuccessModel
class ErrorModel extends BaseModel {
  constructor(data, errmsg) {
    super(data)
    this.errcode = -1
    this.errmsg = errmsg
  }
}
exports.ErrorModel = ErrorModel
