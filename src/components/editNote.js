import React, { useContext, useEffect, useState } from 'react'
import NoteContext from '../contexts/notes/noteContext'
import { useParams } from 'react-router-dom'

export default function EditNote() {
    const Context = useContext(NoteContext)
    const { editNote, findNote} = Context
    const { id } = useParams()

    const [note, setNote] = useState({ title: '', content: '' })  // Initialize with empty strings

    useEffect(() => {
      const foundNote = findNote(id)
      if (foundNote) {
        setNote(foundNote)
      } else {
        setNote({ title: '', content: '' })
      }
    }, [id, findNote])  

    const onClick = (e) => {
      e.preventDefault()
      editNote(id,note.title, note.content)
    }

    const onChange = (e) => {
      setNote({...note, [e.target.name]: e.target.value})
    }
  
    return (
      <div className="mx-5" style={{ marginTop: "100px" }}>
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input type="text" className="form-control" id="title" name='title' onChange={onChange} value={note.title}/>
          </div>
          <label htmlFor="content" className="form-label" >Content</label>
          <textarea className="form-control" id="content" name="content" style={{ height: "100px" }} onChange={onChange} value={note.content}></textarea>
          <button className="btn btn-primary my-3" onClick={onClick}>Submit</button>
        </form>
      </div>
    )
}