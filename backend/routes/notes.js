const express=require("express")
const validator=require("express-validator")

const {noteModel}=require("../models/notes")
const {handleGetNotes, handleCreateNotes,handleViewNote,handleUpdateNote, handleDeleteNote } = require("../controllers/notes")

notesRoute=express()

notesRoute
.get("/",handleGetNotes)
.post("/create",[
  validator.body("title","Specify a title").isLength({min:1}),
  validator.body("content","Specify the content").isLength({min:1}),
],handleCreateNotes)
.put("/update/:id",handleUpdateNote)
.delete("/delete/:id",handleDeleteNote)
module.exports=notesRoute