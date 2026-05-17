import React, { createContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { Navigate } from 'react-router'


export let AuthContext = createContext()

const ContextApi = ({children}) => {
   
    let[user , setuser] = useState()
    
    useEffect(()=>{
        let data = localStorage.getItem("users")
        if(data){
            setuser(JSON.parse(data))
        }
    },[])
    console.log(user);
    
    let logout =()=>{
        localStorage.removeItem("users")
        setuser(null)
        toast.success("succesfully logout")
        // window.location.href="/login";
        
    }
     
  return (
    
        <AuthContext.Provider value = {{user , setuser , logout}}>
            {children}
        </AuthContext.Provider>

  )
}
export default ContextApi
