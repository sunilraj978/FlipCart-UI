const mongoose = require('mongoose')

const {ObjectId} =  mongoose.Schema.Types 


const productSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
       required:true
    },
    price:{
        type:Number,
        required:true,
        
    },
    category:{
        type:ObjectId,
        ref:'Category',

    },
    quantity:{
        type:Number
    },
    sold:{
        type:Number,
        default:0
    },
    photo:{
        data:Buffer,
        contentType:String
        
    },
    shipping:{
        type:Boolean,
        required:true
    }
},{timestamps:true})

const Product = mongoose.model("Product",productSchema)

module.exports = Product