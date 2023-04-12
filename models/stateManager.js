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
    lightOnFor: {
        type: Number,
        required: true
    },
    lightOffFor: {
        type: Number,
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
    waterOnFor: {
        type: Number,
        required: true
    },
    waterOffFor: {
        type: Number,
        required: true
    },
})

module.exports = mongoose.model('stateManager', stateManagerSchema)