const express = require('express')
const formidable = require('formidable')
const router = express.Router()
const {middle,isAdmin} = require('../middleware/details')
const Product = require('../model/product')
const fs = require('fs')
const Hook  = require('../model/Hook')
const { request } = require('http')





router.post("/addProduct/:userId",middle,(req,res)=>{
    const {name,about,quantity,shipping,category,photo,price} = req.body
   
    const Date = new Hook({
        name,quantity,about,shipping,category,photo,price
    })

    Date.save().then((result)=>{
        if(result){
            res.status(200).json(result)
        }
    })
})


//display product as per query(order,limit,sort)
router.get("/product",(req,res)=>{
    let order = req.query.order ? req.query.order : 'asc';
    let sortBy = req.query.sortBy ? req.query.sortBy : '_id';
    let limit = req.query.limit ? parseInt(req.query.limit) : 6;
    Hook.find()
    .populate("category")
    .sort([[sortBy,order]])
    .limit(limit)
    .exec((err,products)=>{
        if(err){
            return res.json({msg:"Product Not Found"})
        }
        else{
            res.send(products)
        }
    })
})

//display releated product
router.get("/product/:proId",(req,res)=>{
    let limit = req.query.limit? parseInt(req.query.limit) : 6
    Product.find({_id:{$ne:req.product},category:req.product.category})
    .limit(limit)
    .populate("category",'_id name')
    .exec((err,products)=>{
        if(err){
            return res.json({
                msg:"No Similar Product"
            })

        }
        else{
            res.json({
                msg:products
            })
        }
    })
})


router.get("/product/category",(req,res)=>{
    Product.distinct("category",{},(err,cat)=>{
        if(err){
            return res.json({
                msg:"No Similar Product"
            })

        }
        else{
            res.json({
                msg:cat
            })
        }
    })
})


module.exports = router