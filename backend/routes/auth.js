const express=require("express")
const validator=require("express-validator")

const {handleSignUp, handleSignIn}=require("../controllers/user")

authRoute=express()

authRoute.post("/signup",[
  validator.body("name","Name should be more than 4 characters").isLength({min:4}),
  validator.body("email","Invalid Email").isEmail(),
  validator.body("password","Password should be greater than 6 characters").isLength({min:6})
],handleSignUp)

authRoute.post("/signin",[
  validator.body("email","Email is invalid").isEmail(),
  validator.body("password","Password is required").exists()
],handleSignIn)

module.exports=authRoute