const db=require("mongoose")
const schema=new db.Schema({
    subscribe:{
        type:Object,
        required:true
    }
})
const subscribe=db.model("subscription",schema)
module.exports=subscribe