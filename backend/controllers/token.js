const jwt=require("jsonwebtoken")

const Sign="RoNiE1@3$5"
function getToken(user){
  return jwt.sign({name:user.name,email:user.email},Sign)

}
function getUser(token){
  return jwt.verify(token,Sign)
}

module.exports={getToken,getUser}