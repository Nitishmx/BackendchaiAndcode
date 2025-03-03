const express=require("express")
const app=express()
require("dotenv").config()
const port=process.env.PORT
app.get("/",(req,res)=>{
    res.send(`<h1>"Welcome to backend series"</h1>`)
})
app.listen(port,()=>console.log("Server is runing port no :",port))