const express = require('express')
const cors = require('cors')

const posts = require('../usecases/posts')

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const allPosts = await posts.getAll()
    res.json({
      message: 'All posts',
      data: {
        posts: allPosts
      }
    })
  } catch (error) {
    res.status(400)
    res.json({
      success: false,
      error: error.message
    })
  }
})

router.post('/', async (req, res) => {
  try {
    const NewPost = await posts.create(req.body)
    res.json({
      success: true,
      message: 'New Post',
      data: {
        post: NewPost
      }
    })
  } catch (error) {
    res.status(400)
    res.json({
      success: false,
      error: error.message
    })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const postDeleted = await posts.deleteById(id)
    res.json({
      success: true,
      message: `post with id ${id} has been deleted`,
      data: {
        post: postDeleted
      }
    })
  } catch (error) {
    res.status(400)
    res.json({
      success: false,
      error: error.message
    })
  }
})

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const postUpdated = await posts.updateById(id, req.body)
    res.json({
      success: true,
      message: `Post with id ${id}, has been updated`,
      data: {
        postUpdated
      }
    })
  } catch (error) {
    res.status(400)
    res.json({
      success: false,
      error: error.message
    })
  }
})

module.exports = router
