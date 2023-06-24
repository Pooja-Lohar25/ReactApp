import React from "react";
import "../App.css";
import { NavLink } from "react-router-dom";


const Nav = () => {


  return (
    <div className="nav">
      <div className="nav-ele">
        <NavLink to="/">HOME</NavLink>
      </div>
      <div className="nav-ele">
        <NavLink to="/login">LOGIN</NavLink>
      </div>
      <div className="nav-ele">
        <NavLink to="/signup">SIGNUP</NavLink>
      </div>
      <div className="nav-ele">
        <NavLink to="/more">MORE</NavLink>
      </div>
    </div>
  );
};

export default Nav;
