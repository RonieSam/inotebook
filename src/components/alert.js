import React, { useContext } from 'react'
import NoteContext from '../contexts/notes/noteContext'

export default function Alert() {
  const context=useContext(NoteContext)
  const {alert}=context
  if (alert)
  {return (
    
    <div className={`alert alert-${alert.type}` }role="alert" style={{marginTop:"50px",height:"55px"}}>
    {alert.msg}
     </div>
  )}
  else{
    return (
      <div  role="alert" style={{marginTop:"50px",height:"55px"}}>
    
     </div>
    )
  }
}
