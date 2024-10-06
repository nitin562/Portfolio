const { validationResult } = require("express-validator");
const {createTransport}=require("nodemailer")
const asyncHandler = require("./asyncHandler");
const { sendPushNotification } = require("../webpushUtil");
const subscribe = require("../models/subscriptions");
const transporter = createTransport({
    service: 'gmail',
    auth: {
      user: process.env.mail,
      pass: process.env.pswd
    }
  });
const mail=asyncHandler(async(req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({success:false,msg:"ClientSide",error:errors.mapped()})
    }
    const {from,body,name,subject}=req.body;
    const mailOptions = {
        from:`${from} <${process.env.mail}>`,
        to: "nitindbas8800@gmail.com",
        subject,
        text: body,
        replyTo:from
      };
      
      transporter.sendMail(mailOptions,async function(error, info){
        if (error) {
          console.log(error);
          return res.status(500).json({success:false,msg:"Server issue occured",error})
        } else {
          console.log('Email sent: ' + info.response);
          const subscribers=await subscribe.find({})
          const payload={
            title:"New Email From Portfolio by "+name,
            body: `Subject: ${subject}`,
            email:true
          }
          subscribers.forEach((obj)=>{
            sendPushNotification(obj.subscribe,payload)
          })
          return res.status(200).json({success:true,msg:"Email is sent."})
        }
      });
})

module.exports={mail}