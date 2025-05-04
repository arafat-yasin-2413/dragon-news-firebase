import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth( app );
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    
    
    // console.log(loading, user);

    const createUser=(email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const loginUser = (email,password)=> {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logoutUser = ()=>{
        return signOut(auth)
        
    }


    const updateUser = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData)
    }


    useEffect(()=>{
        const unsubscribe = 
        onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        });
        return ()=>{}
    },[])
    
    
    
    
    const authData = {
        user,
        setUser,
        createUser,
        loginUser,
        logoutUser,
        loading,
        setLoading,
        updateUser,
    }



    // console.log(user);



    return (
        <AuthContext value={authData}>

            { children }

        </AuthContext>
    );
};

export default AuthProvider;