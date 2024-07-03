const express=require('express')
const cookieParser=require("cookie-parser")
const cors = require('cors')


const {ConnectDB}=require("./connection")
const authRoute=require("./routes/auth")
const notesRoute=require("./routes/notes")
const {checkAuth}=require("./middlewares/index")

const PORT=8000
const app=express()
const corsOptions = {
  origin: 'http://localhost:3000'
};

app
.use(cors(corsOptions))
.use(express.urlencoded({extended:false}))
.use(cookieParser())
.use(express.json())
.use("/api/auth",authRoute)
.use("/api",checkAuth,notesRoute)
ConnectDB("mongodb://localhost:27017/inotebook")
app.listen(PORT,()=>{console.log(`Port Connected to ${PORT}`)})