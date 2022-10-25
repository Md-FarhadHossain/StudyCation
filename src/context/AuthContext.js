import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../config/firebase";

export const UserContext = createContext();

const AuthContext = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider()

  const signupWithEmailPassword = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signinWithEmailPassword = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signinWithGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider);
  };
  const siginWithGithub = () => {
    setLoading(true)
    return signInWithPopup(auth, githubProvider)
  }
  const signout = () => {
    setLoading(true)
    return signOut(auth);
  };

  

  const setImageAndName = (profileInfo) => {
    setLoading(true)
    return updateProfile(auth.user, profileInfo);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log(unsubscribe);
      setLoading(false)
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const authValue = {
    signinWithEmailPassword,
    signupWithEmailPassword,
    signinWithGoogle,
    signout,
    user,
    setImageAndName,
    loading,
    siginWithGithub,
  };

  return (
    <div>
      <UserContext.Provider value={authValue}>{children}</UserContext.Provider>
    </div>
  );
};

export default AuthContext;
