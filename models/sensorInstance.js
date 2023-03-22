const mongoose = require('mongoose');

const sensorInstanceSchema = new mongoose.schema({
    type: {
        type: String,
        required: true
    },
    data: {
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