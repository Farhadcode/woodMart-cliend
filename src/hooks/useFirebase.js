// import React, { useState } from 'react';
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
// import initializeFirebase from '../Pages/Login/Firebase/firebase.init';

// // initialize firebase app

// initializeFirebase();

// const useFirebase = () => {
//     const [user, setUser] = useState({});
//     const auth = getAuth();

//     // creat User

//     const registerUser = (email, password) => {
//         createUserWithEmailAndPassword(auth, email, password)
//             .then((userCredential) => {

//                 const user = userCredential.user;

//             })
//             .catch((error) => {
//                 console.log(error.message);

//             });

//     }

//     // LoginUer

//     const loginUser = (email, password) => {
//         signInWithEmailAndPassword(auth, email, password)
//             .then((userCredential) => {

//                 const user = userCredential.user;

//             })
//             .catch((error) => {
//                 console.log(error.message);
//             });
//     }

//     // logOut User

//     const logOut = () => {
//         signOut(auth)
//             .then(() => {

//             }).catch((error) => {

//             });
//     }

//     return {
//         user,
//         registerUser,
//         loginUser,
//         logOut

//     }
// };

// export default useFirebase;


import { useEffect, useState } from "react";
import initializeFirebase from '../Pages/Login/Firebase/firebase.init';


import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";


// initialize firebase app
initializeFirebase();

// const useFirebase = () => {
//     const [user, setUser] = useState({});
//     const [isLoading, setIsLoading] = useState(true);
//     const [authError, setAuthError] = useState('');

//     const auth = getAuth();

//     const registerUser = (email, password) => {
//         setIsLoading(true);
//         createUserWithEmailAndPassword(auth, email, password)
//             .then((userCredential) => {
//                 setAuthError('');
//             })
//             .catch((error) => {
//                 setAuthError(error.message);
//                 console.log(error);
//             })
//             .finally(() => setIsLoading(false));
//     }

//     const loginUser = (email, password, location, history) => {
//         setIsLoading(true);
//         signInWithEmailAndPassword(auth, email, password)
//             .then((userCredential) => {
//                 const destination = location?.state?.from || '/';
//                 history.replace(destination);
//                 setAuthError('');
//             })
//             .catch((error) => {
//                 setAuthError(error.message);
//             })
//             .finally(() => setIsLoading(false));
//     }

//     // observer user state
//     useEffect(() => {
//         const unsubscribed = onAuthStateChanged(auth, (user) => {
//             if (user) {
//                 setUser(user);
//             } else {
//                 setUser({})
//             }
//             setIsLoading(false);
//         });
//         return () => unsubscribed;
//     }, [])

//     const logout = () => {
//         setIsLoading(true);
//         signOut(auth).then(() => {
//             // Sign-out successful.
//         }).catch((error) => {
//             // An error happened.
//         })
//             .finally(() => setIsLoading(false));
//     }

//     return {
//         user,
//         isLoading,
//         authError,
//         registerUser,
//         loginUser,
//         logout,
//     }
// }

// export default useFirebase;

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setAuthError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                // save uers to the database
                seveUser(email, name, 'POST');
                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name,
                })
                    .then(() => {
                    })
                    .catch((error) => {
                    });

                history.replace('/')
            })
            .catch((error) => {
                const errorMessage = error.message;
                setAuthError(errorMessage);
            })
            .finally(() => setIsLoading(false));
    }

    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const userDestination = location?.state?.from || '/';
                history.replace(userDestination);
                // const user = result.user;
                // console.log(user);
                setAuthError('');
            })
            .catch((error) => {
                const erroerMessage = error.message;
                setAuthError(erroerMessage);

            })
            .finally(() => setIsLoading(false));

    }

    const signInwithGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                seveUser(user.email, user.displayName, "PUT");
                const userDestination = location?.state?.from || '/';
                history.replace(userDestination);

                // console.log(user);

                setAuthError('')
            })
            .catch((error) => {
                setAuthError(error.message)

            })
            .finally(() => setIsLoading(false));

    }


    //manage user  or observe user state

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribe;

    }, [])

    useEffect(() => {
        fetch(`http://localhost:5000/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))

    }, [user.email])

    // logOut
    const logout = () => {
        signOut(auth)
            .then(() => {
            })
            .catch((error) => {
            })
            .finally(() => setIsLoading(false))

    }
    const seveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('http://localhost:5000/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()

    }



    return {
        user,
        admin,
        isLoading,
        authError,
        registerUser,
        logout,
        loginUser,
        signInwithGoogle
    }

};

export default useFirebase;