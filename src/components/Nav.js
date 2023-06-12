import React from "react";
import "../App.css";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//71d6cbec
const API_URL = "http://www.omdbapi.com?apikey=71d6cbec";

const Nav = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const searchmovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
  };

  useEffect(() => {
    searchmovies("");
  }, []);
  return (
    <div className="nav">
      <div className="nav-ele">
        <a href="#">HOME</a>
      </div>
      <div className="nav-ele">
        <a href="#">LOGIN</a>
      </div>
      <div className="nav-ele">
        <a href="#">SIGNUP</a>
      </div>
      <div className="nav-ele">
        <a href="#">MORE</a>
      </div>
     
      
      
    </div>
  );
};

export default Nav;
