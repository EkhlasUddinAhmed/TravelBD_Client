import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import useAuthentication from "../../Hooks/useAuthentication";
const Register = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const navigate=useNavigate();

  const {activeUser,setActiveUser,customRegistrationHandler,userError,setUserError,updateProfileHandler}=useAuthentication();


  const registrationFormSubmitHandler=(e)=>{
    setUserError("");
     e.preventDefault();
     customRegistrationButtonHandler(userEmail,userPassword);
     
     setUserName("");
     setUserEmail("");
     setUserPassword("");
  }

const customRegistrationButtonHandler=(email,password)=>{
    customRegistrationHandler(email,password)
    .then((userCredential) => {
        
        const user = userCredential.user;
        setActiveUser(user);
        console.log("New Registered user is:",user);
        updateProfileButtonHandler({displayName:userName})
        navigate("/",{replace:true});
      })
      .catch((error) => {
        
        const errorMessage = error.message;
        setUserError(errorMessage);
        console.log("Error in Registration:",userError);
        
      });
    
}

const updateProfileButtonHandler=(userObject)=>{
    updateProfileHandler(userObject)
    .then(() => {
        console.log("Profiile Updated Successfulyy");
      }).catch((error) => {
        console.log("Profiile Updated Failed",error);
      });
}


  return (
    <div className="position-relative shadow-lg">
      <div className="position-absolute childReg rounded">
        <form onSubmit={registrationFormSubmitHandler}>
          <h1 className="text-center text-muted">Please Register</h1>
          <div className="mb-3">
            <label htmlFor="exampleInputName" className="form-label">
              Name
            </label>
            <input
            readOnly={activeUser?.email}
              type="text"
              className="form-control form-control-lg fs-3 fw-semibold"
              id="exampleInputName"
              required
              onChange={(e)=>setUserName(e.target.value)}
              value={userName}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
             readOnly={activeUser?.email}
              type="email"
              className="form-control form-control-lg fs-3 fw-semibold"
              id="exampleInputEmail1"
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
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              <span>
                Accept <Link to="/terms">Terms&Conditions</Link>
              </span>
            </label>
          </div>

          <button
            disabled={activeUser?.email}
            type="submit"
            className="btn btn-secondary mt-3 mb-6 btn-lg w-100"
          >
            Submit Registration
          </button>
          <span className="text-center text-danger d-block mt-2">{userError}</span>
          <div className="mt-3">
            <p>
              Already Registered? <Link to="/login">Please Login</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
