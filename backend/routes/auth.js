const express=require("express")
const validator=require("express-validator")

const {handleSignUp}=require("../controllers/signUp")
authRoute=express()

authRoute.post("/",[
  validator.body("name","Name should be more than 4 characters").isLength({min:4}),
  validator.body("email","Invalid Email").isEmail(),
  validator.body("password","Password should be greater than 6 characters").isLength({min:6})
],handleSignUp)

module.exports=authRoute