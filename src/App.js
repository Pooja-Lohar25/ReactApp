import React from "react";
import { useState, useEffect } from "react";
import SearchIcon from "./search.svg";
import "./App.css";
import MovieCard from "./components/MovieCard";
import Nav from "./components/Nav";
//71d6cbec
const API_URL = "http://www.omdbapi.com?apikey=71d6cbec";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [episodes, setEpisodes] = useState([]);

  const [searchTerm,setSearchTerm] = useState("");
  
  const searchall = async (title) => {
    const responsemov = await fetch(`${API_URL}&s=${title}&type=movie`);
    const data = await responsemov.json();
    setMovies(data.Search);

    const responseser = await fetch(`${API_URL}&s=${title}&type=series`);
    const data1 = await responseser.json();
    setSeries(data1.Search);

    const responseep = await fetch(`${API_URL}&s=${title}&type=episode`);
    const data2 = await responseep.json();
    setEpisodes(data2.Search);
  };

  useEffect(() => {
    setMovies([]);
    setSeries([]);
    setEpisodes([]);
  }, []);

  return (
    <div className="app">
      <Nav/>
      <h1 className="h1 welcome"> Welcome to the Movie Land </h1>
      <div className="search">
        <input placeholder="Search" 
        value={searchTerm} 
        onChange={(e) => {
          setSearchTerm(e.target.value)
          searchall(e.target.value)
          }} />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchall(searchTerm)}
        />
      </div>

      {
        movies?.length > 0 || series?.length > 0 || episodes?.length > 0 ?
        (<div className="container">
          {
            movies?.map((movie) => {
              return <MovieCard movie={movie}/>
            })
          }
          {
            series?.map((movie) => {
              return <MovieCard movie={movie}/>
            })
          } 
          {
            episodes?.map((movie) => {
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
