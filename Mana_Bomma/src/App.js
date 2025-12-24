import './App.css';
import searchIcon from './search.svg';
import React, { useEffect } from 'react';
import MovieCard from './MovieCard';
import { useState } from 'react';

const API_URL = "http://www.omdbapi.com?apikey=8186e430";


function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm,setSearchTerm]=useState('');
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  }


  useEffect(() => {
    searchMovies('batman');
  }, [])
  return (
    <div className="app">
      <h1>Mana Bomma</h1>

      <div className="search">
        <input
          placeholder='search movie'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        
          <img src={searchIcon}
          alt="search"
          onClick={() => { searchMovies(searchTerm)}}
        />
      </div>
src/App.jssrc/App.js
      {
        movies?.length > 0 ?
          (
            <div className="container">
              {movies.map((movie) => (
                <MovieCard movie={movie} />
              ))}
            </div>
          ) : (
            <div className="empty">
              <h2>No Movies Found</h2>

            </div>
          )
      }

    </div>
  );
}

export default App;
