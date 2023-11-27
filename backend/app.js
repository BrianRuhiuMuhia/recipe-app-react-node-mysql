const express=require("express")
const app=express()
const dotenv=require("dotenv")
const {router}=require("./routes/routes.js")
const cors = require('cors');
dotenv.config()
app.use(cors)
app.use("/recipie",router)
app.listen(process.env.PORT,()=>{
    console.log("server running on port 5000")
})