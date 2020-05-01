const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    minlength: 5,
    required: true
  },
  image: {
    type: String,
    minlength: 5,
    required: true
  },
  description: {
    type: String,
    minlength: 5,
    required: true
  },
  author: {
    type: String,
    minlength: 1,
    maxlength: 20,
    required: true
  },
  category: {
    type: String,
    minlength: 5,
    maxlength: 20,
    required: true
  },
  estimatedReadTime: {
    type: String,
    minlength: 1,
    maxlength: 10,
    required: true
  },
  date: {
    type: Date,
    required: true
  }
})

module.exports = mongoose.model('Post', postSchema)
