const Router = require('koa-router')
const router = new Router()
const controller = require('./controller.js')

router
  .get('/signin', controller.signIn)
  .get('/nannies', controller.getNannies)
  .post('/nannies', controller.createNanny)
  .get('/user', controller.getUser)
  .post('/user', controller.createUser)

module.exports = router
