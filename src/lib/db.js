const mongoose = require('mongoose')

const DB_USER = 'oariza'
const DB_PASSWORD = 'kodemia123'
const DB_HOST = 'kodemia-gijai.mongodb.net'
const DB_NAME = 'medium'
const url = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`

function connect () {
  return mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
}

module.exports = {
  connect
}
