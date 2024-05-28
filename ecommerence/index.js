const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const userRouter = require('./src/routes/user')
const categoryRouter = require('./src/routes/category')
const productRouter = require('./src/routes/product')
//mongooe connection
mongoose.connect("mongodb+srv://Subikshan:subikshan@cluster0.t8l5f.mongodb.net/Flipcart?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(()=>{
    console.log("mongoose connected")
})

app.use(express.json())

//middlewarea

app.use(productRouter)
app.use(categoryRouter)
app.use(userRouter)
app.use(cookieParser())




app.listen('5000',()=>{
    console.log("Connected")
})