const express = require('express')

const users = require('../usecases/users')

const router = express.Router()

router.post('/signup', async (req, res) => {
  try {
    const newUser = await users.signup(req.body)
    res.json({
      success: true,
      message: 'User registered',
      data: newUser
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
