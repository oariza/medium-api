const Post = require('../models/posts')

function getAll () {
  return Post.find()
}

function create (postData) {
  return Post.create(postData)
}

function deleteById (id) {
  return Post.findByIdAndDelete(id)
}

function updateById (id, newPostData) {
  return Post.findByIdAndUpdate(id, newPostData)
}

module.exports = {
  getAll,
  create,
  deleteById,
  updateById
}
