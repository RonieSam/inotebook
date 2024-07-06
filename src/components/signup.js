import React, { useContext, useEffect, useState } from 'react'
import { Link , useNavigate} from 'react-router-dom'
import NoteContext from '../contexts/notes/noteContext'
export default function SignUp() {
  const host = "http://localhost:8000/api/auth"
  const context=useContext(NoteContext)
  const {setAlert,setName}=context
  const [loginUser, setLoginUser] = useState({ name: "", email: "", password: "" })
  const navigate=useNavigate()
  const onSubmit = async (e) => {
    e.preventDefault()
    const body = JSON.stringify({ name: loginUser.name, email: loginUser.email, password: loginUser.password })
    const response = await fetch(`${host}/signup`, {
      method: "POST",
      headers: {
        "cook": " eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoicm9uaWUiLCJlbWFpbCI6IndlcnR5dWZkZEBnbWFpbC5jb20iLCJpYXQiOjE3MTk4MjkwOTl9.TbRTiRh7ppTba8V2fuYQjyfzCcH8V-IVJxqIuVcsu4I",
        "Content-type": "application/json"
      },
      body: body
    });
    const res = await response.json()
    if (res.type==="success")
   { localStorage.setItem("authToken",res.auth)
    setName(res.user.name)


    setAlert(res)
    navigate("/")}
    else{
      setAlert(res)
    }
  }
  const onChange = (e) => {
    setLoginUser({ ...loginUser, [e.target.name]: e.target.value })
  }
  useEffect(()=>{
    localStorage.removeItem("authToken")
  })
  return (
    <div className='container-sm' style={{ width: "500px", marginTop: "50px" }}>
      <Link to="/login"><button className=' border border-0 rounded-top   ' >Login</button></Link>

      <button className='rounded-top border border-secondary' >Sign Up</button>
      <div className='border border-secondary rounded-bottom ' style={{ padding: "10px" }}>
        <form>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input type="text" className="form-control" name='name' onChange={onChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" onChange={onChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" name="password" onChange={onChange} />
          </div>
        </form>
        <button type="submit" onClick={onSubmit} className="btn btn-primary">Submit</button>
      </div>
    </div>
  )
}
