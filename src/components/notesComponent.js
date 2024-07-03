import React, { useContext, useEffect } from 'react'
import NoteContext from '../contexts/notes/noteContext'
import NotesCard from './notesCard'
export default function NotesComponent() {
  const context=useContext(NoteContext)
  const {notes,setNotes,getNotes}=context
useEffect(()=>{
  getNotes()
},[])
  return (
    <div className="row row-cols-6" style={{marginTop:"30px"}}>
      {notes.map(element => {
        return (<NotesCard note={element} key={element._id}/>)
      })}
    </div>
  )
}
