
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

const NannyModel = mongoose.model('Nanny', Nanny)


module.exports = NannyModel
