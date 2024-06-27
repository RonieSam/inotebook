const {userModel}=require("../models/user")
const validator=require("express-validator")
const {getToken}=require("./token")
const crypto=require("crypto")

async function handleSignIn (req,res){
  
  try {
    const {email,password} =req.body
    const err=validator.validationResult(req)
    if(!err.isEmpty()){return res.status(400).json(err)}  
    const user=await userModel.findOne({email:email})
    if(!user){{err.errors.push({
      "type": "field",
      "value": email,
      "msg": "Email dosent exisit",
      "path": "email",
      "location": "body"})}
    return res.status(200).json(err)}
    const hashedPass=crypto.createHmac('sha256', user.salt).update(password).digest("hex");
    if(hashedPass!==user.password){{err.errors.push({
      "type": "field",
      "value": password,
      "msg": "Incorrect Password",
      "path": "password",
      "location": "body"})}
      return res.status(200).json(err)}
      return res.status(200).cookie("inotebookToken",getToken(user)).json({"msg":"signed in"})
    }
    catch(error){
      console.log(error)
      return res.status(500).json({"msg":"Some error occured"})
    }
  }

async function handleSignUp (req,res){
  const {name,email,password} =req.body
  const err=validator.validationResult(req)
  if(await userModel.findOne({email:email})){err.errors.push({
      "type": "field",
      "value": email,
      "msg": "Email already used",
      "path": "email",
      "location": "body"})}
  if(!err.isEmpty()){return res.status(400).json(err)}  
  try {

    const user={
      name:name,
      email:email,
      password:password
     }
    res.cookie("inotebookToken",getToken(user))
    const result=await userModel.create(user)
    return res.status(200).json(result)
  }
  catch (error) {
    console.log(error)
    return res.status(500).json({"msg":"Some error occured"})
  }
  
}

module.exports={handleSignIn,handleSignUp}