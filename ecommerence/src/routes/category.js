const express = require('express')
const Category = require('../model/category')
const {middle,isAdmin,categoryMiddleWare} = require('../middleware/details')
const { response } = require('express')
const router = express.Router()

//create Category
router.post('/category/:userId',middle,(req,res)=>{
    const {name} = req.body;
    if(!name){
        return res.status(404).json({
            error:"Fill the Field"
        })
    }
    const category = new Category({
        name
    })
    category.save().then((resp)=>{
        res.status(200).json({
            message:"Added"
        })
    })
})


//Display Particular Category
router.get("/details/:catId",middle,isAdmin,(req,res)=>{
    Category.findOne({_id:req.params.catId}).exec((err,result)=>{
        if(err){
            return res.json({msg:"Category Not Found"})
        }
        else{
            req.categories = result
            res.status(200).json({data:req.categories}) 
        }
    })
})


//Update the Category
router.put("/update/:userId/:categoryId",middle,isAdmin,(req,res)=>{
    Category.findById({_id:req.params.categoryId}).exec((err,data)=>{
        if(err){
            return res.json({msg:"Category Not Found"})
        }
        else{
            const category = data
            category.name = req.body.name
            category.save((err,data)=>{
                if(err){
                    return res.json({msg:"Network Error"})
                }
                else{
                    res.json({msg:data})
                }
            })

        }
    })
})


//Delete Category
router.delete("/delete/:userId/:categoryId",middle,isAdmin,(req,res)=>{
    Category.findById({_id:req.params.categoryId}).exec((err,data)=>{
        if(err){
            return res.json({msg:"Category Not Found"})
        }
        else{
            const category = data
            category.remove((err,data)=>{
                if(err){
                    return res.json({msg:"Network Error"})
                }
                else{
                    res.json({msg:data})
                }
            })

        }
    })
})



//get all Category
router.get("/allCategory",(req,res)=>{
    Category.find().exec((err,data)=>{
        if(err){
            return res.json({error:"No Category"})
        }
        else{
            res.json({message:data})
        }
    })
})





module.exports = router