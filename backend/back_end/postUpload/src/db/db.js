const mongoose = require("mongoose");

async function connectDB() {
//  const uri = "mongodb+srv://admin:pintu%40123@clusterbackend.iqdruwk.mongodb.net/mydb"
let uri = "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.7.0"

  try {
    await mongoose.connect(uri);
    console.log("✅ MongoDB connected successfully");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  }
}

module.exports = connectDB;