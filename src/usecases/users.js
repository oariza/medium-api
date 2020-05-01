const bcrypt = require('bcrypt')
const jwt = require('../lib/jwt')

const User = require('../models/users')

function create (userData) {
  return User.create(userData)
}

async function signup (newUserData) {
  const { email, password } = newUserData
  if (!email) throw new Error('Email is required')
  if (!password) throw new Error('Password is required')

  const userAlreadyExist = await User.findOne({ email })

  if (userAlreadyExist) throw new Error('Email is already register')
  if (password.length < 6) throw new Error('´Password must be 6 characters minimum')

  const hash = await bcrypt.hash(password, 10)

  return User.create({ ...newUserData, password: hash })
}

async function login (email, password) {
  const user = await User.findOne({ email })
  if (!user) throw new Error('Invalid data')

  const isPasswordCorrect = await bcrypt.compare(password, user.password)
  if (!isPasswordCorrect) throw new Error('Invalid data')

  return jwt.sign({ id: user._id })
}

module.exports = {
  create,
  signup,
  login
}
