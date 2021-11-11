import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import initializeFirebase from '../Pages/Login/Firebase/firebase.init';

// initialize firebase app

initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const auth = getAuth();

    // creat User

    const registerUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                const user = userCredential.user;

            })
            .catch((error) => {
                console.log(error.message);

            });

    }

    // LoginUer

    const loginUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                const user = userCredential.user;

            })
            .catch((error) => {
                console.log(error.message);
            });
    }

    // logOut User

    const logOut = () => {
        signOut(auth)
            .then(() => {

            }).catch((error) => {

            });
    }

    return {
        user,
        registerUser,
        loginUser,
        logOut

    }
};

export default useFirebase;