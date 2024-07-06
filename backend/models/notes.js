const mongoose=require("mongoose")
const crypto=require("crypto")
const noteSchema= new mongoose.Schema({
  title:{
    type:String,
    required:true
  },
  content:{
    type:String,
    required:true
  },
  createdBy:{
    type:mongoose.Schema.ObjectId,
    ref:"user"
  }
})

const noteModel=mongoose.model("note",noteSchema)

module.exports={noteModel}