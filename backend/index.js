const express=require('express')

const {ConnectDB}=require("./connection")
const authRoute=require("./routes/auth")

const PORT=8000
const app=express()

app
.use(express.urlencoded({extended:false}))
.use(express.json())
.use("/auth",authRoute)

ConnectDB("mongodb://localhost:27017/inotebook")
app.listen(PORT,()=>{console.log(`Port Connected to ${PORT}`)})