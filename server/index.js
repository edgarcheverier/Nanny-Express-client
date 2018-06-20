const Koa = require('koa')
const serve = require('koa-static')
const db = require('./db')
const bodyParser = require('koa-body-parser')
const cors = require('koa-cors')
const router = require ('./router')

const app = new Koa()

app.use(bodyParser())
app.use(cors())
app.use(serve(__dirname + '/images'))
app.use(router.routes())
app.use(cors())
  
app.listen(3000, () => {
  console.log('koa app listening on port 3000')
})
