const express = require('express')
const User = require('../model/user')
const router = express.Router()
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")
const {JWT} = require('../const/key')
const {middle,isAdmin} = require('../middleware/details')
//signUp
router.post('/signUp',(req,res)=>{
    const{
        name,email,Password
    } = req.body

    if(!name || !email || !Password){
       return res.status(422).json({
            error:"Please fill all fields"
        })
    }

    User.findOne({email:email}).then((data)=>{
       if(data){
        return res.status(422).json({
            error:"User Already Exists"
        })  
       }

      bcrypt.hash(Password,12).then(passwords=>{
        const user = new User({
            email,name,Password:passwords
        })
 
        user.save().then((response)=>{
            if(response){
                res.json({message:"Saved Successfully"})
            }
        })
      })

    })

    })


//login
router.post('/Login',(req,res)=>{
    const {
        email,Password
    } = req.body;

    if(!email || !Password){
        return res.status(404).json({
            "error":"Enter All Fields"
        })
    }

    else{
        User.findOne({email:email}).then((data)=>{
            if(!data){
                return res.json({
                    "error":"Sign Up First"
                })
            }
            bcrypt.compare(Password,data.Password).then((correct)=>{
                if(!correct){
                    return res.json({
                        "error":"Password Incorrect"
                    })
                }
                else{
                    const token = jwt.sign({_id:data._id},JWT)
                    res.cookie('t',token,{expire:new Date() + 9999})
                    const {_id,email,name,role} = data;
                    return res.json({
                        message:"Signed In",
                        token,user:{name,role,email,_id}
                    })
                }
            })
        })
    }
})


//get user Details
router.get("/user/:userId",middle,isAdmin,(req,res)=>{
    User.findOne({ _id:req.params.userId})
    .exec(()=>{
        res.json({
           user:req.user
        })
    })
})





//signOut
router.get('/signOut',(req,res)=>{
    res.clearCookie('t')
    res.json({message:"Signout Successfully"})
})





module.exports = router


