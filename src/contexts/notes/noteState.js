import {useState} from "react";
import NoteContext from "./noteContext"

const NoteState=(props)=>{
  const host="http://localhost:8000"
    const [alert,setAlertState]=useState([])
    const [notes,setNotes]=useState([])
    const [name,setName]=useState()


    const addNote=async(title,content)=>{
      const token=localStorage.getItem("authToken")
      const body=JSON.stringify({
        "title":title,
        "content":content
      })
      const response= await fetch(`${host}/api/create`, {
        method: "POST",
        headers: { 
        "cook":token,
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
      const token=localStorage.getItem("authToken")
      const response= await fetch(`${host}/api/delete/${noteId}`, {
        method: "DELETE",
        headers: { 
        "cook":token,
        "Content-type":"application/json"
        }
      });
      const res=await response.json()
      getNotes()
      setAlert(res)
    }
    const editNote=async(noteId,title,content)=>{
      const token=localStorage.getItem("authToken")

      const body=JSON.stringify({
        "title":title,
        "content":content
      })
      const response= await fetch(`${host}/api/update/${noteId}`, {
        method: "PUT",
        headers: { 
        "cook":token

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
      const token=localStorage.getItem("authToken")
      try{const response= await fetch(`${host}/api`, {
        method: "GET",
        headers: { 
        "cook":token,
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
      <NoteContext.Provider value={{notes,setNotes,addNote,deleteNote,editNote,findNote,getNotes,alert,setAlert,name,setName}}>
        {props.children}
      </NoteContext.Provider>
    )
}
export default NoteState
