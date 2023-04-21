const express = require('express')
const router = express.Router()
const stateManager = require("../models/stateManager")
const axios = require('axios')

router.post("/updatestate", async(req, res)=>{

    const find = {}
    const update = {}
    const updateESP = {}
    find[req.body.toggle] = req.body.prev
    update[req.body.toggle] = req.body.action
    updateESP["action"] = req.body.action
    updateESP["type"] = req.body.toggle

    // const states = await stateManager.find({})
    // console.log(states)

    await stateManager.updateOne(find, {$set:update})
    .then((onres)=>{
        console.log(req.body);
        axios.post(process.env.ESP32_IP+"/updatestate", updateESP).then(()=>{res.json({toggle: "doit"})})
    })
})

router.get("/getstate", async(req, res)=>{
    const states = await stateManager.findOne({})
    res.json(states)
})

module.exports = router
