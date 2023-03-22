const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())

const sensorDataRoute = require('./routes/sensorDataRoute')
app.use('/sensor', sensorDataRoute)

app.listen(4000, () => console.log('Server Started'))