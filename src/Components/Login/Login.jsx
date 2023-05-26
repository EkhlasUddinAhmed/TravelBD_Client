import React, { useState } from "react";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuthentication from "../../Hooks/useAuthentication";
import { toast } from "react-toastify";



const Login = () => {
  const {activeUser,setActiveUser,googleLogInHandler,userError,setUserError,customLogInHandler,sendPasswordResetEmailHandler}=useAuthentication();
    
   
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const navigate=useNavigate();
    const location=useLocation();
    const REDIRECT_URL=location.state?.from?.pathname || "/";
    console.log("Rerdirect URL is:",REDIRECT_URL);
  
    const loginFormSubmitHandler=(e)=>{
        setUserError("");
       e.preventDefault();

      
      customLogInButtonHandler(userEmail,userPassword);
      setUserEmail("");
      setUserPassword("");
 }

const googleLogInButtonClickFunction=()=>{
    setUserError("");
    googleLogInHandler().then((result) => {
        
        const user = result.user;
        setActiveUser(user);
        console.log("Google Log In User is:",user);
        
        navigate(REDIRECT_URL,{replace:true});
        
      }).catch((error) => {
        
        const errorMessage = error.message;
        setUserError(errorMessage);
        console.log("Log in Error is:",userError);
      });
    console.log("GoogleLOg In Button is Active");
    
}

 const customLogInButtonHandler=(email,password)=>{
    customLogInHandler(email,password)
    .then((userCredential) => {
       
        const user = userCredential.user;
        setActiveUser(user);
        console.log("Custom Log In User is:",user);
        navigate(REDIRECT_URL,{replace:true});
      })
      .catch((error) => {
        
        const errorMessage = error.message;
        setUserError(errorMessage);
        console.log("Custom log in error is:",errorMessage);
      });
    
 }
  const passwordResetEmailClickHandler=()=>{
    if(userEmail){
      sendPasswordResetEmailHandler(userEmail)
    .then(() => {
     toast("Password Reset Email Sent!!!")
   })
   .catch((error) => {
     
     const errorMessage = error.message;
     setUserError(errorMessage);
     
   });
    }else{
      alert("Please Give Your Email ID");
    }
  } 
 
  return (
    <div className="position-relative">
      <div className="position-absolute childLogIn rounded">
        <form onSubmit={loginFormSubmitHandler}>
            
            <h1 className="text-center text-muted" >Please Login</h1>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
             readOnly={activeUser?.email}
              type="email"
              className="form-control form-control-lg fs-3 fw-semibold "
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              required
              onChange={(e)=>setUserEmail(e.target.value)}
              value={userEmail}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
             readOnly={activeUser?.email}
              type="password"
              className="form-control form-control-lg fs-3 fw-semibold"
              id="exampleInputPassword1"
              required
              onChange={(e)=>setUserPassword(e.target.value)}
              value={userPassword}
            />
          </div>

          <button 
           disabled={activeUser?.email}
          type="submit" className="btn btn-secondary mt-3 mb-6 btn-lg w-100">
            Submit Login
          </button>
           <span className="text-center text-danger d-block mt-2">{userError}</span>
          <div className="mt-3">
            <p>New In TravelBD? <Link to="/register" className="text-decoration-none">Please Register</Link></p>
          </div>
          <div className="mt-3">
            <p>Forget Password? <Link 
            onClick={passwordResetEmailClickHandler}
            className="text-decoration-none">Reset Password</Link></p>
          </div>
          
        </form>
        <div className="mt-5 p-5 border border-2 shadow-lg">
           <button 
           disabled={activeUser?.email}
           onClick={googleLogInButtonClickFunction}
           className="btn btn-danger btn-lg w-100">Login With Google</button>
        </div>
      </div>
      
    </div>
  );
};

export default Login;
