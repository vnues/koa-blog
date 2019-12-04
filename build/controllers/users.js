'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
const users_1 = __importDefault(require('../models/users'))
const response_1 = require('../models/response')
const { getUsers } = users_1.default
class UsersCtl {
  async find(ctx) {
    const res = await getUsers()
    ctx.body = new response_1.SuccessModel(res)
  }
}
exports.default = new UsersCtl()
