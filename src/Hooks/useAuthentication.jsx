import React, { useEffect, useState } from 'react';
import { GoogleAuthProvider,signInWithPopup,signOut,onAuthStateChanged,createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile,sendPasswordResetEmail  } from "firebase/auth";

import auth from '../Firebase/firebase.config.init';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const provider = new GoogleAuthProvider();

const useAuthentication = () => {
      const [activeUser, setActiveUser]=useState({});
      const [isLoading, setIsLoading]=useState(true);
      const [userError,setUserError]=useState("");
      const navigate=useNavigate();

const googleLogInHandler=()=>{
    return signInWithPopup(auth, provider);
}

const customLogInHandler=(email, password)=>{
  return signInWithEmailAndPassword(auth, email, password);
}

const customRegistrationHandler=(email, password)=>{

    return createUserWithEmailAndPassword(auth, email, password)

}

const activeUserLogOutHandler=()=>{
   return signOut(auth);
}

const updateProfileHandler=(userObject)=>{
    return updateProfile(auth.currentUser, userObject)
}

const sendPasswordResetEmailHandler=(email)=>{
    return sendPasswordResetEmail(auth, email);
}

 if(activeUser?.email&&!activeUser?.emailVerified){
    signOut(auth).then(() => {
        // Sign-out successful.
        navigate("/",{replace:true});
        alert("Please Verify Your Email First before proceed");
      }).catch((error) => {
        // An error happened.
      });
      
      
 }

useEffect(()=>{
    const unsubscribed=onAuthStateChanged(auth, (user) => {
        if (user) {
            setIsLoading(false);
          setActiveUser(user);
          console.log("From Authentication: Active User is:",activeUser);
        } else {
            setIsLoading(false);
            setActiveUser({});
            console.log("From Authentication: Active User is:",activeUser);
        }
      });

      return ()=>{
        unsubscribed();
      }
},[]);


    return {
        activeUser, 
        setActiveUser,
        isLoading, 
        setIsLoading,
        googleLogInHandler,
        customLogInHandler,
        customRegistrationHandler,
        activeUserLogOutHandler,
        userError,
        setUserError,
        updateProfileHandler,
        sendPasswordResetEmailHandler
    };
};

export default useAuthentication;