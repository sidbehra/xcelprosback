require("dotenv").config();
const mongoose = require('mongoose')
const express = require('express');
const bodyParser = require("body-parser");
var cookieParser = require('cookie-parser')
const app = express();
var cors = require('cors');
const authRoutes = require('./routes/auth')


mongoose.connect(process.env.DATABASE, {useNewUrlParser: true,useUnifiedTopology: true, useCreateIndex:true })
    .then(()=>{
        console.log("DB CONNECTED")
    })

const Port = 8000
app.use(bodyParser.json())
app.use(cookieParser());
app.use(cors())

app.use("/api",authRoutes)

app.listen(Port, ()=>{
    console.log(`App is running at ${Port}`)
})

