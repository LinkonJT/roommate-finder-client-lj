import React, { useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { AuthContext } from './AuthContext';

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();
/********Create user */
const createUser = (email, password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
}

/*******SignIN user */
const signinUser = (email, password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
}


/*****SignIn with Google */

const signinWithGoogle = ()=>{
    setLoading(true);
    return signInWithPopup(auth, googleProvider); 

}

/*********LogOut user*** */
const logOut = ()=>{
    return signOut(auth)
}

/****** useEffect ***** */

useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser);
         setLoading(false);
    })
    return ()=>unsubscribe();
},[])

const userInfo = {
    
    createUser,
    signinUser,
    user,
    signinWithGoogle,
    logOut,
}

    return (
        <AuthContext value={userInfo}> {children}</AuthContext>
    );
};

export default AuthProvider;










