const Router = require('koa-router')
const NannyModel = require('./model')
const router = new Router()
const fs = require('fs');
//const path = _dirname



router.get('/nanny', async (ctx) => {
    ctx.body = await NannyModel.find()
    ctx.status = 200
  })
router.post('/nanny', async (ctx) => {
  console.log(ctx.request.body)

  try {
  await NannyModel.create({
    Name: ctx.request.body.Name,
    DateBirth: ctx.request.body.DateBirth,
    Nationality: ctx.request.body.Nationality,
    Languages: ctx.request.body.Languages,
    Experience: ctx.request.body.Experience,
    BackGround: ctx.request.body.BackGround,
    References: ctx.request.body.References,
    Photo: ctx.request.body.Photo,

  });
  ctx.body = "Created!"
  ctx.status = 200
  } catch (e) {
   console.log(e);
  }
})


module.exports = router
