//const Router = require('koa-router')
const model = require('./model')
//const router = new Router()
const fs = require('fs')
const bcrypt = require('bcrypt')
const base64url = require('base64url')
const authMiddleware = require('./authorization')

const Key = function () {
  return Math.random().toString(36).substr(2, 9)
}


const getNannies = async (ctx) => {
  try {
    ctx.body = await model.NannyModel.find()
    ctx.status = 200
  } catch (e) {
    console.log(e)
  }
}

const createNanny = async (ctx) => {
  try {
    await model.NannyModel.create({
      Name: ctx.request.body.Name,
      DateBirth: ctx.request.body.DateBirth,
      Nationality: ctx.request.body.Nationality,
      Languages: ctx.request.body.Languages,
      Experience: ctx.request.body.Experience,
      BackGround: ctx.request.body.BackGround,
      References: ctx.request.body.References,
      Photo: ctx.request.body.Photo,
      Ranking: {
        Punctuality: ctx.request.body.Ranking.Punctuality,
        Attendance: ctx.request.body.Ranking.Attendance,
        Affection: ctx.request.body.Ranking.Affection,
      }
    })
    ctx.body = 'Created!'
    ctx.status = 200
  } catch (e) {
    console.log(e)
  }
}

const getUser = async (ctx) => {
  try {
    ctx.body = await model.UserModel.find()
    ctx.status = 200
  } catch (e) {
    console.log(e)
  }
}

const createUser = async (ctx) => {
  const userData = ctx.request.body
  let user = await model.UserModel.findOne({Email:userData.email})
  if (user) {
    ctx.status = 400
    ctx.body = {
      errors:[
        'Username already exists.'
      ]
    }
  }
  else {
    const hash = await bcrypt.hash(userData.password, 10)
    await model.UserModel.create({
      UserName: userData.username,
      Email:userData.email,
      Password:hash,
      References: userData.references,
      Key:Key()})
    ctx.body = 'New user created '
    ctx.status = 201
  }
}

const signIn =  async (ctx, next) => {
  const headers = ctx.request.headers.authorization.split(' ')[1]
  const [useremail, password] = headers.split(':')
  const user = await model.UserModel.findOne({Email:useremail})
  const correct = await bcrypt.compare(password, user.Password)
  if (correct) {
    await model.UserModel.update({_id: user._id}, {$set:{Key: Key()}})
    ctx.status = 200
    ctx.body = await user
  }
  else {
    ctx.status = 401
    ctx.body = 'wrong credentials'
  }
}

module.exports = {
  getNannies,
  createNanny,
  getUser,
  createUser,
  signIn
}
