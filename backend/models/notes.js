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
  tag:{
    type:String,
    unique:true
  },
  createdBy:{
    type:mongoose.Schema.ObjectId,
    ref:"user"
  }
})
noteSchema.pre('save', function(next) {
  const note = this;
  if (note.tag) {
    return next()};
  this.tag = crypto.randomBytes(16).toString('hex');


  next();
});
const noteModel=mongoose.model("note",noteSchema)

module.exports={noteModel}