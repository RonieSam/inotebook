import React, { useContext, useEffect } from 'react'
import NoteContext from '../contexts/notes/noteContext'
import NotesCard from './notesCard'
import { useNavigate } from 'react-router-dom'
export default function NotesComponent() {
  const navigate=useNavigate() 
  const context=useContext(NoteContext)
  const {notes,getNotes,setAlert}=context
useEffect(()=>{
  const token=localStorage.getItem("authToken")
  if(!token) {
    setAlert({type:"danger",msg:"Unauthorized Login Please"})
    navigate("/login")}
  else getNotes()
},[getNotes,navigate,setAlert])
  return (
    <div className="row row-cols-6" style={{marginTop:"30px"}}>
      {notes.map(element => {
        return (<NotesCard note={element} key={element._id}/>)
      })}
    </div>
  )
}
