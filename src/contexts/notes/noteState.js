import {useState} from "react";
import NoteContext from "./noteContext"

const NoteState=(props)=>{
  const host="http://localhost:8000"
    const [alert,setAlertState]=useState([])
    const [notes,setNotes]=useState([])

    const addNote=async(title,content)=>{
      const body=JSON.stringify({
        "title":title,
        "content":content
      })
      const response= await fetch(`${host}/api/create`, {
        method: "POST",
        headers: { 
        "cook":" eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoicm9uaWUiLCJlbWFpbCI6IndlcnR5dWZkZEBnbWFpbC5jb20iLCJpYXQiOjE3MTk4MjkwOTl9.TbRTiRh7ppTba8V2fuYQjyfzCcH8V-IVJxqIuVcsu4I",
        "Content-type":"application/json"
        },
        body:body
      }
    );
      const res=await response.json()
      getNotes()
      setAlert(res)
    }
    const deleteNote=async(noteId)=>{
      const response= await fetch(`${host}/api/delete/${noteId}`, {
        method: "DELETE",
        headers: { 
        "cook":" eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoicm9uaWUiLCJlbWFpbCI6IndlcnR5dWZkZEBnbWFpbC5jb20iLCJpYXQiOjE3MTk4MjkwOTl9.TbRTiRh7ppTba8V2fuYQjyfzCcH8V-IVJxqIuVcsu4I",
        "Content-type":"application/json"
        }
      });
      const res=await response.json()
      getNotes()
      setAlert(res)
    }
    const editNote=async(noteId,title,content)=>{
      const body=JSON.stringify({
        "title":title,
        "content":content
      })
      const response= await fetch(`${host}/api/update/${noteId}`, {
        method: "PUT",
        headers: { 
        "cook":" eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoicm9uaWUiLCJlbWFpbCI6IndlcnR5dWZkZEBnbWFpbC5jb20iLCJpYXQiOjE3MTk4MjkwOTl9.TbRTiRh7ppTba8V2fuYQjyfzCcH8V-IVJxqIuVcsu4I",
        "Content-type":"application/json"

        },
        body:body
      });
      const res=await response.json()
      getNotes()
      setAlert(res)
    }
    const findNote=(noteId)=>{
      const note=notes.filter((ele)=>{
        return ele._id===noteId
      })
      return note[0]
    }
    const getNotes=async()=>{
      try{const response= await fetch(`${host}/api`, {
        method: "GET",
        headers: { 
        "cook":" eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoicm9uaWUiLCJlbWFpbCI6IndlcnR5dWZkZEBnbWFpbC5jb20iLCJpYXQiOjE3MTk4MjkwOTl9.TbRTiRh7ppTba8V2fuYQjyfzCcH8V-IVJxqIuVcsu4I",
        "Content-type":"application/json"
        }
      });
      const res=await response.json()
      setNotes(res)
   }
      catch(err){
        console.log(err)
      }
    }
    const setAlert=(res)=>{
      setAlertState(res)
      setTimeout(()=>{
        setAlertState()
      },2000)

    }
    
    return(
      <NoteContext.Provider value={{notes,setNotes,addNote,deleteNote,editNote,findNote,getNotes,alert}}>
        {props.children}
      </NoteContext.Provider>
    )
}
export default NoteState
