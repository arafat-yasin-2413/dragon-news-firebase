import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth( app );
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    
    
    const createUser=(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
        
    }


    const loginUser = (email,password)=> {
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logoutUser = ()=>{
        return signOut(auth)
        
    }


    useEffect(()=>{
        const unsubscribe = 
        onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
        });
        return ()=>{}
    },[])
    
    
    
    
    const authData = {
        user,
        setUser,
        createUser,
        loginUser,
        logoutUser,
    }



    console.log(user);



    return (
        <AuthContext value={authData}>

            { children }

        </AuthContext>
    );
};

export default AuthProvider;