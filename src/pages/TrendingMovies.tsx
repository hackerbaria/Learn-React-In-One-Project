import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Movie } from "../lib/types";
import { fetchTrendingMovies } from "../services/api";
import "../css/MovieGrid.css";
import React from "react";

function TrendingMovies() {
    const [movies, setMovies] = useState<Movie[]>([]);
    const navigate = useNavigate();
  
    useEffect(() => {
      fetchTrendingMovies()
        .then(setMovies)
        .catch((err) => console.error("Failed to load trending movies", err));
    }, []);
  
    return (
      <div className="movie-grid-container">
        <h1>🔥 Trending This Week</h1>
        <div className="movie-grid">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="movie-card"
              onClick={() => navigate(`/movie/${movie.id}`)}
              style={{ cursor: "pointer" }}
            >
              <img
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.title}
              />
              <h3>{movie.title}</h3>
              <p>{movie.release_date?.split("-")[0]}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default TrendingMovies;