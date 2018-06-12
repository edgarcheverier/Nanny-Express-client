
const mongoose = require('mongoose')
const Schema = mongoose.Schema


const Nanny = new Schema({
  Name: String,
  DateBirth: Date,
  Nationality: String,
  Languages: [String],
  Experience: Number,
  BackGround: String,
  References: [String],
  Photo: Number,
  Ranking: {
    Punctuality: Number,
    Attendance: Number,
    Affection: Number
  }
})

const User = new Schema({
  Email: String,
  Password: String,
  Key: String,
  References: [String],
})

const NannyModel = mongoose.model('Nanny', Nanny)
const UserModel = mongoose.model('User', User)


module.exports = {
  NannyModel,
  UserModel
}
