/* eslint-disable react/prop-types */
import {
  FacebookAuthProvider,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
  } from "firebase/auth";
  import auth from "../../firebase/firebase.config";
  import { createContext, useEffect, useState } from "react";
  
  export const AuthProvider = createContext();
  
  const AuthContext = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
  
    const signup = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
    };
  
    const login = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
    };

    const googleProvider = new GoogleAuthProvider()

    const googleAuth = () => {
      setLoading(true)
      return signInWithPopup(auth, googleProvider)
    }

    const facebookProvider = new FacebookAuthProvider()

    const facebookAuth = () => {
      setLoading(true)
      return signInWithPopup(auth, facebookProvider)
    }
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setLoading(false);
      });
      return () => unsubscribe();
    }, []);
  
    const logout = () => {
      return signOut(auth);
    };
  
    const info = { user, loading, signup, login, googleAuth, facebookAuth, logout };
  
    return <AuthProvider.Provider value={info}>{children}</AuthProvider.Provider>;
  };
  
  export default AuthContext;
  