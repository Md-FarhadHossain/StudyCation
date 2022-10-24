import React, { createContext } from 'react'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import app from '../config/firebase'

export const UserContext = createContext()


const AuthContext = ({children}) => {

const auth = getAuth(app)


const signupWithEmailPassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
}





const authValue = {signupWithEmailPassword}

  return (
    <div>
        <UserContext.Provider value={authValue}>
            {children}
        </UserContext.Provider>
    </div>
  )
}

export default AuthContext