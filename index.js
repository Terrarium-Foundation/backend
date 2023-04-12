const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()
const cors = require('cors');

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())
app.use(cors({
    origin: '*'
}));

const sensorDataRoute = require('./routes/sensorDataRoute')
app.use('/sensor', sensorDataRoute)
const stateManager = require("./routes/stateManagerRoute")
app.use('/state', stateManager)

app.listen(4000, () => console.log('Server Started'))