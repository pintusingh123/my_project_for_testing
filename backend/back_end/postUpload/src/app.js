const express = require("express");
const multer = require("multer");
const uploadFile = require("./services/storage.service");
const postModel = require("./models/post.model");

const app = express();
app.use(express.json()); //used for parsing redable data to json formate 
const upload = multer({ storage: multer.memoryStorage() }) //used for parsing multipart/form-data, which is primarily used for uploading files.


//yaha mene upload.single("image") use kiya hai kyuki mene image upload karna hai, aur ye middleware multer ke memoryStorage ko use karta hai, jisme uploaded file ko memory me store kiya jata hai. And dhyan rhe jo key ham form-data me use karenge wo yaha bhi wahi hona chahiye, yaha mene "image" key use kiya hai, to form-data me bhi "image" key use karna hoga.

app.post("/create-post", upload.single("image"), async (req, res) => {
  console.log(req.body ,req.file);

  const result = await uploadFile(req.file.buffer);

    const post = await postModel.create({

      image: result.url,
      caption: req.body.caption,
    })

    // await post.save();
 
    
  res.status(201).json({
    message: "post created now",
    post
  });
});

app.get('/posts', async (req, res) =>{
  const posts = await postModel.find()
  res.status(200).json({
    message: "all posts fetched",
    posts
  })
})

module.exports = app;
