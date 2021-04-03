const mongoose = require('mongoose')

const article = new mongoose.Schema({
    title: String,
    country: String,
    image: String,
    text: String,
    date: String,
    localImage: String
})

article.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })

const Article = mongoose.model('Article', article)

const user = new mongoose.Schema({
    username: String,
    password: String
})

user.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })

const User = mongoose.model('User', user)

const message = new mongoose.Schema({
  name: String,
  email: String,
  timestamp: String,
  message: String
})

message.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const Message = mongoose.model('Message', message)

const phone = new mongoose.Schema({
  number: String,
  timestamp: String
})

phone.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const Phone = mongoose.model('Phone', phone)

module.exports = {Article, User, Message, Phone}