const jwt = require('jsonwebtoken')
const {JWT} = require('../const/key')

const Category = require('../model/category')
const User = require('../model/user')

exports.middle = (req,res,next)=>{
    const { authorization } = req.headers
    if(!authorization){
        return res.status(401).json({msg:"Need to Login"})
    }

    const tokens =  authorization.replace("abcd ","")
    jwt.verify(tokens,JWT,(err,payload)=>{
        if(err){
            return res.status(401).json({msg:"Something went Wrong"})
        }
        const {_id} = payload

        User.findById(_id).then((userdata)=>{
            req.user = userdata
            next()
        })
    })
    
}



exports.categoryMiddleWare = (req,res,next)=>{
    Category.findOne({_id:req.params.catId}).exec((err,result)=>{
        if(err){
            return res.json({msg:"Category Not Found"})
        }
        else{
            req.categories = result
            res.status(200).json({data:req.categories}) 
        }
    })
    next();
}


exports.isAdmin = (req,res,next)=>{
    if(req.user.role === 0){
       return res.status(404).json({"msg":"Only Admin Allowed"})
     }
    next();
}