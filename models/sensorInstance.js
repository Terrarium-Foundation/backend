const mongoose = require('mongoose');

const sensorInstanceSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    humidity: {
        type: String,
        required: true
    },
    soilmoisture: {
        type: String,
        required: true
    },
    time: {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('sensorInstance', sensorInstanceSchema)