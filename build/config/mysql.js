class MYSQL_CONF {
  constructor() {
    this.host = 'localhost'
    this.user = 'root'
    this.password = 'vnues_123_LXS'
    this.port = 3306
    this.database = 'blog'
    this.connection_limit = 100
  }
}
module.exports = new MYSQL_CONF()
