require('dotenv').config()
const express = require('express')
const { connectDB } = require('./database/dbConfig')
const cors = require('cors')
const router = require('./routes')

// database connections
connectDB()

// express and middlewares
const app = express()
app.use(express.json())
app.use(cors())
app.use(router)

const port = process.env.PORT
app.listen(port || 8000, () => {
  console.log('server is running on ', port)
})








