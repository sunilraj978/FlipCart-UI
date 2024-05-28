const User = require('../model/user')

exports.userById = (req,res,next,id)=>{
    User.findById(id).exec((err,response)=>{
        if(err){
            return res.json({
                error:"User Not Found"
            })
        }
        req.profile = response
        next();
    })
}