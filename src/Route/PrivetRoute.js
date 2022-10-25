import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { UserContext } from '../context/AuthContext'

const PrivetRoute = ({children}) => {

    const {user, loading} = useContext(UserContext)
    const location = useLocation()


   if(loading){
    return (
        <>
            <h1>Loading...</h1>
        </>
    )
   }

    if(user) {
        return children
    }


  return <Navigate to='/login' state={{from: location}} replace />
}

export default PrivetRoute