const express = require('express')
const app = express()
const path = require('path');
const dotenv = require('dotenv')
dotenv.config()

app.get("/" ,(req , res)=>{
    console.log("server is running")
})

app.listen(process.env.PORT ,()=>{
    console.log('port 3000 is live')
})