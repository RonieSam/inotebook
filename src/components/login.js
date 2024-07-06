import React, { useContext, useState,useEffect } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import NoteContext from '../contexts/notes/noteContext'


export default function Login() {
  const navigate=useNavigate()
  const context=useContext(NoteContext)
  const {setAlert,setName}=context
  const host="http://localhost:8000/api/auth"
  const [loginUser,setLoginUser]=useState({email:"",password:""})

  const onSubmit=async (e)=>{
    e.preventDefault()
    const body=JSON.stringify({email:loginUser.email,password:loginUser.password})
    const response=await fetch(`${host}/signin`, {
      method: "POST",
      headers: {    
      "Content-type":"application/json"
      },
      body:body
    });
    const res=await response.json()
    if (res.type==="success")
      { localStorage.setItem("authToken",res.auth)
        setName(res.user.name)
        setAlert(res)
        navigate("/")}
        else{
         setAlert(res)
        }
     
  }
  const onChange=(e)=>{
    setLoginUser({...loginUser,[e.target.name]:e.target.value})
  }
  useEffect(()=>{
    localStorage.removeItem("authToken")
  })
  return (
    <div className='container-sm' style={{width:"500px", marginTop:"50px"}}>
      <button className='rounded-top border border-secondary ' >Login</button>
      <Link to="/signup"><button className=' border border-0 rounded-top' >Sign Up</button></Link>
<div className='border border-secondary rounded-bottom ' style={{padding:"10px",marginTop:"-0.1px"}}> 
      <form >
  <div className="mb-3">  
    <label htmlFor="exampleInputEmail1" className="form-label" >Email address</label>
    <input type="email" className="form-control" name="email" id="email" onChange={onChange} />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" name='password' onChange={onChange}/>
  </div>

  
</form>
<button  className="btn btn-primary" onClick={onSubmit}>Submit</button>
</div>
    </div>
  )
}
