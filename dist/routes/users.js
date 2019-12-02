'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const Router = require('koa-router')
const { find } = require('../controllers/users')
const router = new Router({ prefix: '/users' })
router.get('/', find)
exports.default = router
