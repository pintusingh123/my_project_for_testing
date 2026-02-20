const mongoose = require("mongoose");

 async function connectDB(){
  let uri =process.env.MONGO_URI
  await mongoose.connect(uri)
  console.log("mongoose are connectd with db");
  

}
module.exports = connectDB;