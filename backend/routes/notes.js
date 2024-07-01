const express=require("express")
const validator=require("express-validator")

const {noteModel}=require("../models/notes")
const {handleGetNotes, handleCreateNotes,handleViewNote,handleUpdateNote, handleDeleteNote } = require("../controllers/notes")

notesRoute=express()

notesRoute
.get("/",handleGetNotes)
.post("/create",[
  validator.body("title","Specify a title").exists(),
  validator.body("content","Specify the content").exists()
],handleCreateNotes)
.get("/view/:id",handleViewNote)
.put("/update/:id",handleUpdateNote)
.delete("/delete/:id",handleDeleteNote)
module.exports=notesRoute