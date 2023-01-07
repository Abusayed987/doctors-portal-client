import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/Firebase.config';


export const AuthContext = createContext()

const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const logout = () => {
        setLoading(true)
        return signOut(auth)
    }

    const updateUser = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, createUser => {
            console.log('Spy!!!>>');
            setUser(createUser);
            setLoading(false)
        })
        return () => unsubscribe()
    }, [])

    const authInfo = {
        createUser,
        login,
        googleLogin,
        updateUser,
        logout,
        user,
        setLoading,
        loading
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;