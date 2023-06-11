import React from "react";
import "../App.css";
import { useState, useEffect } from "react";

//71d6cbec
const API_URL = "http://www.omdbapi.com?apikey=71d6cbec";

const Nav = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchmovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
    setMovies(data.Search);
  };

  useEffect(() => {
    setMovies([]);
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
      <div>
        <input
          className="nav-search"
          placeholder="Search Movies and more..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        ></input>
      </div>
    </div>
  );
};

export default Nav;
