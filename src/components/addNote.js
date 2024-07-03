import React, { useContext, useState } from 'react'
import NoteContext from '../contexts/notes/noteContext'
export default function AddNote() {
    const Context=useContext(NoteContext)
    const {addNote}=Context
    const onClick=(e)=>{
      e.preventDefault()
      addNote(note.title?note.title:"",note.content?note.content:"")
    }
    const [note,setNote]=useState({title:"",content:""})
    const onChange=(e)=>{
      setNote({...note,[e.target.name]:e.target.value})
    }
  
  return (
    <div className="mx-5" style={{ marginTop: "100px" }}>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" className="form-control" id="title" name='title' onChange={onChange}/>
        </div>
        <label htmlFor="content" className="form-label">Content</label>
        <textarea className="form-control" id="content" name="content" style={{ height: "100px" }} onChange={onChange}></textarea>
        <button className="btn btn-primary my-3" onClick={onClick}>Submit</button>
      </form>
    </div>
  )
}
