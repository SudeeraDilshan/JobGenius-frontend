import React from "react";
import "./Navbar.css";
import { Link,useLocation } from "react-router-dom";
import { MdOutlineSearch } from "react-icons/md";


export const Navbar = (props) => {
  const role  = props.role;
  const location = useLocation(); 
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img
          src="logo.jpg"
          alt="Logo"
          className="navbar-logo"
        />
        <span className="navbar-brand">JobGenius</span>
      </div>

      {role == "jobseeker" ? (
        <ul className="navbar-center">
          <li><Link to="/home" className="navbar-link"  >Jobs</Link></li>
          {/* <li><Link to="/hire" className="navbar-link">Hire</Link></li> */}
          <li>  <Link to="/opportunities" className="navbar-link">Opportunities</Link></li>
        </ul>) : 
        (
          // Conditionally render search bar based on current URL
          location.pathname === "/home" ? (
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search by position..."
                className="search-input"
              />
              <MdOutlineSearch className="icon" size={40} />
            </div>
          ) : null
        )
      }

      <div className="navbar-right">
        <Link to="/profile">
          <img
            src="profile.jpg"
            alt="Profile"
            className="navbar-profile-pic"
          />
        </Link>
      </div>
    </nav>
  );
};

