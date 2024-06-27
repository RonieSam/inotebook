const {userModel}=require("../models/user")
const validator=require("express-validator")
const {getToken}=require("./token")

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
module.exports={handleSignUp}