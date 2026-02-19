//server creation using app.js
const express = require("express");

const app = express();
app.use(express.json()) //middleware to parse json data

let notes = []
/**
   title , description,
 */

   app.post('/notes',(req, res) =>{
      notes.push(req.body)

      res.status(201).json({message: "Note created successfully"})

	// console.log(req.body)

   })

   //api to get all notes 
   app.get('/notes',(req, res) =>{
      res.status(200).json({
         massages : "Notes fetched successfully",
         notes : notes
      })
   })
 //delete note by id 
 app.delete('/notes/:index', (req, res) =>{
    const index = parseInt(req.params.index)
    if(index >= 0 && index < notes.length){
       notes.splice(index, 1)
       res.status(200).json({message: "Note deleted successfully"})
    }else{
       res.status(404).json({message: "Note not found"})
    }
 })

 app.patch('/notes/:index', (req, res) =>{

      const index = parseInt(req.params.index);
      const des = req.body.description;
      const title = req.body.title;

      if(index >= 0 && index < notes.length){
         notes[index].description = des
         notes[index].title = title
         res.status(200).json({message: "Note updated successfully"})
      }else{
         res.status(404).json({message: "Note not found"})
      }

 })

module.exports = app;
