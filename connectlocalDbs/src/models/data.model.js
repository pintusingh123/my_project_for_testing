//main file
const  mongoose = require("mongoose");
const dataSchema = new mongoose.Schema({
    Image : String,
    caption: String
})

const dataModel = mongoose.model("item", dataSchema)

module.exports = dataModel;