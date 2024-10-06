const express=require("express")
require("dotenv").config()
const app=express()
const port=process.env.PORT||8000
const cors=require("cors")
const connectDb = require("./ConnectDb")
app.use(express.json())
app.use(cors())
app.use("/api",require("./api/mail"))
app.use("/api",require("./api/subscriptions"))


app.listen(port,()=>{
    console.log("Server is started at ",port)
    connectDb()
})