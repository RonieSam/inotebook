import React, { useContext } from 'react'
import NoteContext from '../contexts/notes/noteContext'
import {Link} from "react-router-dom"
export default function NotesCard(props) {
  const context = useContext(NoteContext)
  const { deleteNote} = context
  const onClickDelete = () => {
    deleteNote(props.note._id)
  }
  
 
  return (
    <div>
      <div className="card col mx-3 my-3" style={{ width: "200px",height:"120px" }} >
        <div className="card-body">
          <div><strong className="card-title">{props.note.title}</strong></div>
          
          <p className="card-text">{props.note.content.length < 20 ? props.note.content : props.note.content.slice(0, 20) + "...."}</p>
          <button className='btn btn-light btn-sm mx-2' onClick={onClickDelete} ><i className="fa-solid fa-trash " ></i></button>
          <Link to={`/editnote/${props.note._id}`}><button className='btn btn-light btn-sm mx-2'><i className="fa-solid fa-pen-to-square"></i></button></Link>
        </div>
      </div>
    </div>
  )
}
