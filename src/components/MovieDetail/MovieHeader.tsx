import React from "react";
import { Movie } from "../../lib/types";

function MovieHeader({ movie }: { movie: Movie }) {
  return (
    <div className="movie-header">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="poster"
      />
      <div className="info">
        <h1>{movie.title}</h1>
        <p><strong>Release:</strong> {movie.release_date}</p>
        <p><strong>Rating:</strong> {movie.vote_average}</p>
        <p><strong>Runtime:</strong> {movie.runtime} min</p>
        <p><strong>Genres:</strong> {movie.genres.map((g) => g.name).join(", ")}</p>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
}

export default MovieHeader;