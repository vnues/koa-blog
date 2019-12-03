'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
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
exports.default = new MYSQL_CONF()
