const express=require("express")
const app=express()
require("dotenv").config()
const port=process.env.PORT
app.get("/",(req,res)=>{
    res.send("Welcome to backend series")
})
app.listen(port,()=>console.log("Server is runing port no :",port))