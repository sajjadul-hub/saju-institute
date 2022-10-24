import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../../firedase/Firebase.confug';
export const AuthContext = createContext();
const auth=getAuth(app);

const AuthProvider = ({ children }) => {
const [user,setUser] =useState(null) ;
const [loading,setLoading]=useState(true);

const providerLogin=(provider)=>{
    setLoading(true);
return signInWithPopup(auth,provider);

}

const updateUserProfile=(pofile)=>{
    return updateProfile(auth.currentUser,pofile);
}

const logOut=()=>{
    setLoading(true);
    return signOut(auth);
}

const createUser=(email,password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password)
}
const signIn=(email,password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password)
}

useEffect(()=>{
  const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
    console.log('user inside auth state change',currentUser);    
    setUser(currentUser)
    setLoading(false);
    // if(){}
    })
return()=>{
    unsubscribe();
}
},[])

const authInfo = { user,
    loading,
    providerLogin,
    logOut,createUser ,
    signIn,
    updateUserProfile};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;