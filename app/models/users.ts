class UsersModel {
  async find() {
    console.log('mysql')
    return {
      name: 'vnues'
    }
  }
}

module.exports = new UsersModel()
