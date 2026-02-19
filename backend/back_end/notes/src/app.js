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

module.exports = app;
