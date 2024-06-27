const mongoose=require("mongoose")

function ConnectDB(DBUrl){
  mongoose.connect(DBUrl)
  .then(()=>{console.log("DataBase Connected")})
  .catch((err)=>{console.log(err)})
}
module.exports={ConnectDB}