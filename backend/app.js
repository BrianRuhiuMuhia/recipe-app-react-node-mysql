const express=require("express")
const app=express()
app.get("/",(req,res)=>{
return res.send("<h1>Hello World</h1>")
})
app.listen(5000,()=>{
    console.log("server running on port 5000")
})