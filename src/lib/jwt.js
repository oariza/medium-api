const jwt = require('jsonwebtoken')

const secret = 'backendpractice'

function sign (payload = {}) {
  return jwt.sign(payload, secret)
}

function verify (token = '') {
  return jwt.verify(token, secret)
}

module.exports = {
  ...jwt,
  sign,
  verify
}
