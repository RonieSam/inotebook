const jwt=require("jsonwebtoken")

const Sign="RoNiE1@3$5"
function getToken(user){
  return jwt.sign({name:user.name,email:user.email},Sign)

}

module.exports={getToken}