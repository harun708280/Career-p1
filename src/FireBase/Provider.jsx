import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from './firbase.Init';
export const AuthUserContext=createContext(null)
import { GoogleAuthProvider } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();
const Provider = ({children}) => {
    const [isLoading,setIsLoading]=useState(true)
    const [user,setUser]=useState(null)
    const register=(email,password)=>{
        setIsLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)

    }
    const update=(name,photo)=>{
        setIsLoading(true)
        return updateProfile(auth.currentUser,{displayName:name,photoURL:photo})

    }
    
    const logout=()=>{
        
        return signOut(auth)
    }
    const googleLogin=()=>{
        setIsLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    const login=(email,password)=>{
        setIsLoading(true)
        return signInWithEmailAndPassword(auth,email,password)

    }
    const resetPassword=(email)=>{
        setIsLoading(true)
        return sendPasswordResetEmail(auth,email)
        

    }

    useEffect(()=>{
        const CorrectInfo=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            setIsLoading(false)
        })
        return ()=>{
            CorrectInfo()
        }
    },[]) 

    const authInfo={
        register,
        user,
        update,
        logout,
        googleLogin,
        login,
        resetPassword,
        isLoading,
        setIsLoading,
    }
    return (
        <div>
            <AuthUserContext.Provider value={authInfo}>
            {children}
            </AuthUserContext.Provider>
            
        </div>
    );
};

export default Provider;