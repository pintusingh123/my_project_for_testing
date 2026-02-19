const mongoose = require("mongoose");


async function connectDB(){
  let uri = "mongodb+srv://yt:pintu%40123@yt-backend-series-clust.ecx6xn4.mongodb.net/notesdb"
  await mongoose.connect(uri)
  console.log("db connected");
  
}
 module.exports = connectDB;