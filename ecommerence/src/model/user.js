const mongoose = require('mongoose')

const details = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    Password:{
        type:String,
        trim:true
    },
    about:{
        type:String,
        trim:true
    },
    role:{
        type:Number,
        default: 0
    },
    history:{
        type:Array,
        default:[]
    }

},{timestamps:true})

const User = mongoose.model("user",details)


module.exports = User;