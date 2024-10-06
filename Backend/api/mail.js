const express=require("express")
const { mail } = require("../controller/mail")
const { check } = require("express-validator")

const router=express.Router()

router.post("/mail",[check("from","Email Id must be valid").isEmail(),check("body","Body of the mail must be present").isLength({min:1}),check("name","Name must be present").isLength({min:3}),check("subject","Subject must be present").isLength({min:1})],mail)



module.exports=router