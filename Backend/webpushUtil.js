const webpush=require("web-push")
console.log(process.env.publicKey,
    process.env.privateKey)
webpush.setVapidDetails(
    'mailto:nitindbas8800@gmail.com', // Replace with your contact email
    process.env.publicKey,
    process.env.privateKey
  );

const sendPushNotification=(subscription,payload)=>{
    webpush.sendNotification(subscription,JSON.stringify(payload)).then((response)=>{
        console.log("Notification sent: ",response,payload)
    },(error)=>{
        console.log("Error in sending notification: ",error)
    })
}

module.exports={sendPushNotification}