const jwt=require("jsonwebtoken")

const Sign="RoNiE1@3$5"
function getToken(user){
  return jwt.sign({name:user.name,email:user.email},Sign)

}
function getUser(token){
  try{
  return jwt.verify(token,Sign)
  }
  catch{
    return null
  }
}

module.exports={getToken,getUser}