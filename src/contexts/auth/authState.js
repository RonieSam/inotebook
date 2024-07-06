import {useState} from "react";
import AuthContext from "./authContext"

const AuthState=(props)=>{
  
  const handleLogin=async (email,password)=>{
    const body=JSON.stringify({email:email,password:password})
    const response=await fetch(`${host}/api`, {
      method: "GET",
      headers: { 
      "cook":" eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoicm9uaWUiLCJlbWFpbCI6IndlcnR5dWZkZEBnbWFpbC5jb20iLCJpYXQiOjE3MTk4MjkwOTl9.TbRTiRh7ppTba8V2fuYQjyfzCcH8V-IVJxqIuVcsu4I",
      "Content-type":"application/json"
      },
      body:body
    });
    const res=await response.json()
    console.log(res)
  }
    
    
    return(
      <AuthContext.Provider value={{handleLogin}}>
        {props.children}
      </AuthContext.Provider>
    )
}
export default AuthState
