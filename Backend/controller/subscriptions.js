const subscribe = require("../models/subscriptions");
const { sendPushNotification } = require("../webpushUtil");
const asyncHandler = require("./asyncHandler");

const subscriptionSaveToDb = asyncHandler(async (req, res) => {
  const { subscription } = req.body;
  console.log(req.body, typeof subscription);
  if (!subscription || typeof subscription != "object") {
    return res
      .status(400)
      .json({ success: false, msg: "No subscription is provided" });
  }
  await subscribe.create({ subscribe: subscription });
  sendPushNotification(subscription, {
    title: "Test notification",
    body: "test notification for web push",
  });
  return res.status(200).json({ success: true, msg: "You are subscribed" });
});
const pingOnOpen = asyncHandler(async (req, res) => {
  const subscribers = await subscribe.find({});

  const time = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
  
  const payload = {
    title: "New User opened your Portfolio",
    body: `A user is viewing your portfolio at ${time.toLocaleString()}`,
    email:false
  };
  subscribers.forEach((obj) => {
    sendPushNotification(obj.subscribe, payload);
  });
  return res.status(200).json({success:true,msg:"Server has acknowledged."})
});
module.exports = { subscriptionSaveToDb,pingOnOpen };
