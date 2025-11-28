const mongoose = require('mongoose')

const mongodbUrl = process.env.MONGO_DB_URL

exports.connectDB = () => {
  mongoose.connect(mongodbUrl)
    .then(() => {
    console.log('mongoDB connected!')
    })
    .catch((error) => {
    console.log(error)
  })
}






