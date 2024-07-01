const {getUser} =require("../controllers/token")
const { userModel } = require("../models/user")

async function checkAuth(req,res,next){
  try{
  const tokenUser=getUser(req.headers.cook)
  req.user=tokenUser?await userModel.findOne({email:tokenUser.email,name:tokenUser.name}):null
  if(!req.user){return res.redirect("/auth/signin")}
  next()}
  catch(error){
    console.log(error)
    return res.status(500).json({"msg":"Some error occured"})
  }
  
}

module.exports={checkAuth}