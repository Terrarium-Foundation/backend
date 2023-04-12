const express = require('express')
const router = express.Router()
const sensorInstance = require('../models/sensorInstance')

router.post("/savesensordata", async(req, res)=>{
    const sensorData = new sensorInstance({
        type: "sensor",
        humidity: req.body.humidity,
        soilmoisture: req.body.soilmoisture
    })
    try{
        const newSensorData = await sensorData.save()
        res.status(201).json(newSensorData)
    }catch (err){
        res.status(400).json({ message: err.message })
    }
})

router.post("/fetchsensordata", async(req, res)=>{
    try{
        const sensorData = await sensorInstance.findOne({type: "sensor"})
        console.log(sensorData);
        res.json(sensorData);
    } catch(e) {
        res.json(e.message);
    }
})

module.exports = router