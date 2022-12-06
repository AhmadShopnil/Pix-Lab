import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import App from '../../App';
import app from '../../firebase/firebase.config';


export const AuthContext = createContext()
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export const Authprovider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // create user with email and password

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }


    //sign in with email and password
    const userSignIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    // sign in with google
    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    // logOut
    const logOut = () => {
        signOut(auth)
            .then(result => {

            })


    }


    // update Porfile
    const updateUser = (profile) => {
        return updateProfile(auth.currentUser, profile)
        // return updateProfile(auth.currentUser, profile)
    }


    // get loggedin user

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)

        })
        return () => {
            unsubscribe()
        }


    }, [])


    const authInfo = { user, loading, setUser, createUser, signInWithGoogle, logOut, userSignIn, updateUser }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;