const asyncHandler=(func)=>{
    return async(req,res)=>{
        try {
            await func(req,res)
        } catch (error) {
            console.error("A system error occurred-----------------",error)
            res.status(500).json({error,success:false,msg:"A System Error Occured."})
        }
    }
}

module.exports=asyncHandler