import React from "react";
import { useState, useEffect } from "react";
import SearchIcon from "./search.svg";
import "./App.css";
import MovieCard from "./components/MovieCard";
//71d6cbec
const API_URL = "http://www.omdbapi.com?apikey=71d6cbec";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm,setSearchTerm] = useState("");

  const searchmovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
  
    console.log(data.Search);
    setMovies(data.Search);
  };

  useEffect(() => {
    setMovies([])
    searchmovies("spiderman");
  }, []);

  return (
    <div className="app">
      <h1>Movie Land</h1>
      <div className="search">
        <input placeholder="Search" 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchmovies(searchTerm)}
        />
      </div>

      {
        movies?.length > 0 ?
        (<div className="container">
          {
            movies.map((movie) => {
              return <MovieCard movie={movie}/>
            })
          } 
      </div>)
        :
        (<div className="empty"><h3>No movies</h3>
        </div>)
      }

      
    </div>
  );
};

export default App;
