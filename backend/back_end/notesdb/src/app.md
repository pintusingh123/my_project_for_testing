const express = require("express")
const noteModel = require("./models/note.model")

const app = express();

app.use(express.json())

 app.post("/notes", async (req, res) =>{
  const data = req.body;
    await noteModel.create({
    title: data.title,
    description: data.description
  })
  res.status(201).json({
    message: "note created"

  })
 })
 app.get("/notes", async (req, res) =>{

  //find() all notes from db and send to client but if we need only one note then we will use findOne() method and pass the id in query or title 

  // find() -> get all documents from the collection in array of object formate 

  const notes = await noteModel.find()
 
/* if we get only one note data form notesdb then we use findOne() methos */
// => 
  // const notes = await noteModel.findOne(
  // {title: "testing 2"})  

  // // ye obj return krega and  dhyan rhe title adn note1 hamare notes db mai kisi ek single db ke data se match hona chahiye warna ye null return krega 
  console.log(notes);

  res.status(200).json({
    message: "notes retrieved",
    data: notes
  })

 })
/*
post /notes -> create a note
get /notes -> get all notes
get /notes/:id -> get a single note by id
patch /notes/:id -> update a note by id
delete /notes/:id -> delete a note by id
*/ 

module.exports = app;