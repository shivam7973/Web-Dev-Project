import React, { children, useContext } from 'react'
import { AuthContext } from '../ContextApi/ContextApi'
import toast from 'react-hot-toast'
import { Navigate } from 'react-router'

const PrivateRoute = ({children}) => {
    let {user} = useContext(AuthContext)

    if(!user){
        return <Navigate to ="/login"/>
    }
    return children
  
}
export default PrivateRoute
