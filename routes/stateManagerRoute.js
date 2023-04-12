const express = require('express')
const router = express.Router()
const stateManager = require("../models/stateManager")

router.post("/updatestate", async(req, res)=>{

    const find = {}
    const update = {}
    find[req.body.toggle] = req.body.prev
    update[req.body.toggle] = req.body.action

    // const states = await stateManager.find({})
    // console.log(states)

    await stateManager.updateOne(find, {$set:update})
    .then((onres)=>{
        res.json({toggle: "doit"})
    })
})

router.get("/getstate", async(req, res)=>{
    const states = await stateManager.findOne({})
    res.json(states)
})

module.exports = router
