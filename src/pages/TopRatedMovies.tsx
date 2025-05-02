import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Movie } from "../lib/types";
import { fetchTopRatedMovies } from "../services/api";
import "../css/MovieGrid.css";
import React from "react";
import Pagination from "../components/Pagination";

function TopRatedMovies() {
    const [movies, setMovies] = useState<Movie[]>([]);
    const navigate = useNavigate();

    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
  
    useEffect(() => {
        fetchTopRatedMovies(page)
          .then((data) => {
            setMovies(data.results);
            setTotalPages(data.total_pages);
          })
          .catch((err) => console.error("Failed to load top-rated movies", err));
      }, [page]);

      return (
        <div className="movie-grid-container">
          <h1>⭐ Top Rated Movies</h1>
    
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
                <p>⭐ {movie.vote_average.toFixed(1)}</p>
              </div>
            ))}
          </div>
    
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={setPage}
          />
        </div>
      );
    }
    
    export default TopRatedMovies;