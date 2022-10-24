import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app  from '../config/firebase'

export const UserContext = createContext()


const AuthContext = ({children}) => {

const auth = getAuth(app)
const [user, setUser] = useState({})
const provider = new GoogleAuthProvider()

const signupWithEmailPassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
}
const signinWithEmailPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
}
const signinWithGoogle = () => {
    return signInWithPopup(auth,provider)
}
const signout = () =>{
    return signOut(auth)
}

useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) =>{
        console.log(unsubscribe)
        
        setUser(user)
    })
    return () => unsubscribe()

    

},[])



const authValue = {signinWithEmailPassword,signupWithEmailPassword,signinWithGoogle,signout, user}

  return (
    <div>
        <UserContext.Provider value={authValue}>
            {children}
        </UserContext.Provider>
    </div>
  )
}

export default AuthContext