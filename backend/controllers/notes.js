const validator=require("express-validator")

const {noteModel}=require("../models/notes")

async function handleGetNotes(req,res){
  const user=req.user
  const notes=await noteModel.find({createdBy:user.id})
  return res.json(notes)
}
async function handleCreateNotes(req,res){
  const err=validator.validationResult(req)
  if(!err.isEmpty()){  
    err.errors[0].type="danger"
    return res.status(400).json(err.errors[0])}
  try{const user=req.user
  const body=req.body
  const note={
    title:body.title,
    content:body.content,
    createdBy:user.id,
  }
  const result=await noteModel.create(note)
  return res.status(200).json({type:"success",msg:"Note has been created",note:result})
}

  catch(error){
    console.log(error)
    return res.status(500).json({type:"danger",msg:"some error occured"})
  }
}



async function handleUpdateNote(req,res){
  try{const noteId=req.params.id
  const userId=req.user.id
  const {title,content}=req.body
  const note=await noteModel.findOne({createdBy:userId,_id:noteId})
  if(note) await noteModel.findByIdAndUpdate(noteId,{title:title,content:content})
  else return res.status(400).json({type:"danger",msg:"No note by this ID and user found to update"})
  return res.status(200).json({type:"success",msg:"The note has been updated",note:note})}
  catch(error){
    console.log(error)
    return res.status(500).json({type:"danger",msg:"some error occured"})
  }
}

async function handleDeleteNote(req,res){
  try{const noteId=req.params.id
    const userId=req.user.id
    const note=await noteModel.findOne({createdBy:userId,_id:noteId})
    if(note) await noteModel.findByIdAndDelete(noteId)
    else return res.status(400).json({type:"danger",msg:"No note by this ID and user found to deleted"})
    return res.status(200).json({type:"success",msg:"The note has been deleted",note:note})}
    catch(error){
      console.log(error)
      return res.status(500).json({type:"danger",msg:"some error occured"})
    }
  }

module.exports={handleGetNotes,handleCreateNotes,handleUpdateNote,handleDeleteNote}