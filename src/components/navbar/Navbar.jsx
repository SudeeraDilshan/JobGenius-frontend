import React from "react";
import "./Navbar.css"; 
import { Link } from "react-router-dom";

export const Navbar = () => {
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
      
        <ul className="navbar-center">
          <li><Link to="/" className="navbar-link"  >Jobs</Link></li>
          <li><Link to="/hire" className="navbar-link">Hire</Link></li>
          <li>  <Link to="/opportunities" className="navbar-link">Opportunities</Link></li>
        </ul>
  
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

