const express=require("express")
const { subscriptionSaveToDb, pingOnOpen } = require("../controller/subscriptions")

const router=express.Router()
router.get("/ping",pingOnOpen)
router.post("/subscribe",subscriptionSaveToDb)


module.exports=router