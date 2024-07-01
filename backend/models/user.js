const mongoose=require("mongoose")
const crypto=require("crypto")
const userSchema= new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true,
    unique:true
  },
  salt:{
    type:String,
  }
},{timestamps:true})

userSchema.pre('save', function(next) {
  const user = this;
  if (!user.isModified("password")) return next();
  const salt = crypto.randomBytes(16).toString('hex');
  const hashedPassword = crypto.createHmac('sha256', salt).update(user.password).digest("hex");
  this.salt = salt;
  this.password = hashedPassword;
  next();
});
const userModel=mongoose.model("user",userSchema)

module.exports={userModel}