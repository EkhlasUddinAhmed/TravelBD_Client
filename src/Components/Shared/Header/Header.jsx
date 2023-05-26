import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import "./Header.css";
import useAuthentication from "../../../Hooks/useAuthentication";
const Header = () => {
  const {activeUser,setActiveUser,activeUserLogOutHandler}=useAuthentication();

  const activeUserLogOutButtonHandler=()=>{
    activeUserLogOutHandler()
    .then(() => {
      setActiveUser({});
    }).catch((error) => {
      setActiveUser(activeUser);
    });
    
  }
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <Link className="navbar-brand" href="/">
            <img
              style={{ height: "80px" }}
              className="logoColor"
              src={logo}
              alt=""
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active text-light fs-3"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active text-light fs-3"
                  aria-current="page"
                  to="/destination"
                >
                  Destination
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active text-light fs-3"
                  aria-current="page"
                  to="/blog"
                >
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active text-light fs-3"
                  aria-current="page"
                  to="/news"
                >
                  News
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active text-primary fs-3"
                  aria-current="page"
                  to="/blog"
                >
                  {activeUser.displayName}
                </Link>
              </li>
              
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              { !activeUser?.email?<>
              <Link
                to="/login"
                className="btn btn-warning px-5 mx-2 text-light fs-6 fw-semibold"
                type="submit"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="btn btn-primary px-5 mx-2 text-light fs-6 fw-semibold"
                type="submit"
              >
                Register
              </Link></>
              :
              <Link
              onClick={activeUserLogOutButtonHandler}
                className="btn btn-danger px-5 text-light fs-6 fw-semibold"
                type="submit"
              >
                LogOut
              </Link>}
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
