import { FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase.init'

const { useState, useEffect } = require("react")


const useFirebase = () => {
    const [user, setUser] = useState([]);
    const auth = getAuth(app);

    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const githubProvider = new GithubAuthProvider();



    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                setUser(user);
                console.log(user);
            }).catch((error) => {

                const errorMessage = error.message;
                console.log(errorMessage);

            })
    }
    const signInWithFacebook = () => {
        signInWithPopup(auth, facebookProvider)
            .then(result => {
                const user = result.user;
                setUser(user);
                console.log(user);
            }).catch((error) => {

                const errorMessage = error.message;
                console.log(errorMessage);

            })
    }
    const signInWithGithub = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                const user = result.user;
                setUser(user);
                console.log(user);
            }).catch((error) => {

                const errorMessage = error.message;
                console.log(errorMessage);

            })
    }

    const handleSignOut = () => {
        signOut(auth)
            .then(() => { })
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user);
        })

    }, [])

    return {
        user,
        signInWithGoogle,
        signInWithFacebook,
        signInWithGithub,
        handleSignOut
    }


}


export default useFirebase;