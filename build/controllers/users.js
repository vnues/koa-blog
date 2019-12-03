const { find } = require('../models/users')
class UsersCtl {
  async find(ctx) {
    // const res = find()
    console.log('1233')
  }
}
module.exports = new UsersCtl()
