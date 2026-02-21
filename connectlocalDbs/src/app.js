let express = require("express");
const dataModel = require("./models/data.model");
const multer = require("multer")
const uploadfiles= require("./services/storage.service")

let app = express();
app.use(express.json());
const upload = multer ({storage: multer.memoryStorage()})

app.post("/create-items", upload.single("Image"), async (req, res) =>{
   
    try{
         console.log(req.body, req.file);
         const result = await uploadfiles(req.file.buffer)

         const data = await dataModel.create({
            Image: result.url,
            caption: req.body.caption,
         })
         await data.save();

         res.status(201).json({message: "files uploaded", data})
    } catch(e){
        res.status(500).json({message: e.message})
    }
} )

module.exports = app