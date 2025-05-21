import React, { useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { AuthContext } from './AuthContext';

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
/********Create user */
const createUser = (email, password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
}

/*******SignIN user */
const signinUser = (email, password)=>{
    return signInWithEmailAndPassword(auth, email, password)
}

/*********LogOut user*** */
const logOut = ()=>{
    return signOut(auth)
}

/****** useEffect ***** */

useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser)
    })
    return ()=>unsubscribe();
},[])

const userInfo = {
    
    createUser,
    signinUser,
    user,
    logOut,
}

    return (
        <AuthContext value={userInfo}> {children}</AuthContext>
    );
};

export default AuthProvider;










