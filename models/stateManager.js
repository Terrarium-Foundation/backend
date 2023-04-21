const mongoose = require('mongoose');

const stateManagerSchema = new mongoose.Schema({

    autopilot: {
        type: String,
        required: true
    },
    light: {
        type: String,
        required: true
    },
    lightInterval: {
        type: String,
        required: true
    },
    water: {
        type: String,
        required: true
    },
    waterInterval: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('stateManager', stateManagerSchema)