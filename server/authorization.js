
const model = require('./model')

const authorize = async (ctx, next) => {
  const sessionId = await ctx.request.headers.authorization.split(' ')[1]
  if (!sessionId) return await next()

  ctx.user = await model.UserModel.findOne({Key:sessionId})

  if (!ctx.user) {
    ctx.status = 401
    return
  }

  await next()
}

module.exports = authorize
