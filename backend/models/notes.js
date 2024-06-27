const mongoose=require("mongoose")

const noteSchema= new mongoose.Schema({
  title:{
    type:String,
    required:true
  },
  content:{
    type:String,
    required:true
  },
  tag:{
    type:String,
    required:true,
    unique:true
  },
  createdBy:{
    type:mongoose.Schema.ObjectId,
    ref:user
  }
})
const noteModel=mongoose.model("note",noteSchema)

module.exports={noteModel}