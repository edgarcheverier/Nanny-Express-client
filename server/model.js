
const mongoose = require('mongoose')
const Schema = mongoose.Schema


const Nanny = new Schema({
    Name: String,
    DateBirth: Date,
    Nationality: String,
    Languages: [{name: String}],
    Experience: Number,
    BackGround: String,
    References: [{name: String}],
    Photo: Number,

  })

const NannyModel = mongoose.model('Nanny', Nanny)


module.exports = NannyModel
