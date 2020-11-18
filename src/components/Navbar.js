import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "img/logo.png";

const Navbar = () => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="nav">
          <Link to="/">
            <img className="logo" src={logo} alt="LOGO" title="LOGO" />
          </Link>
          <ul className="navbar">
            <li>Concept</li>
            <Link to="/progress">Progress</Link>
            <li>Stack</li>
            <li>Operation</li>
            <Link to="/member">Member</Link>
          
          </ul>
          <Link className="loginBt" to="/login">
            <ul className="navbar">
              <li>login</li>
            </ul>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
