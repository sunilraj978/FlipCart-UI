const mongoose = require('mongoose')

const {ObjectId} = mongoose.Schema.Types


const hookSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    about:{
        type:String,
        
    },
    quantity:{
        type:Number,
        
    },
    shipping:{
        type:String,
        
    },
    photo:{
        type:String,
    },
    price:{
        type:String,
        required:true
    },
    sold:{
        type:Number,
        default:0
    },
    category:{
        type:ObjectId,
        ref:'Category',

    },
   
})

const Hook  = mongoose.model("Hook",hookSchema)

module.exports = Hook