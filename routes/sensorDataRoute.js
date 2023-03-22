const express = require('express')
const router = express.Router()
const sensorInstance = require('../models/sensorInstance')

router.post("/savesensordata", async(req, res)=>{
    const sensorData = new sensorInstance({
        type: req.body.type,
        data: req.body.data
    })
    try{
        const newSensorData = await sensorData.save()
        res.status(201).json(newSensorData)
    }catch (err){
        res.status(400).json({ message: err.message })
    }
})

module.exports = router