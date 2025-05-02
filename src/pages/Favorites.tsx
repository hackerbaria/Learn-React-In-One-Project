import "../css/Favorites.css";
import "../css/Pagination.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination"; // Make sure it's typed
import { useState } from "react";
import { Movie } from "../lib/types"; // You should define this type
import React from "react";

function Favorites() {
  const { favorites } = useMovieContext();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 12;

  if (!favorites || favorites.length === 0) {
    return (
      <div className="favorites-empty">
        <h2>No Favorite Movies Yet</h2>
        <p>Start adding movies to your favorites and they will appear here!</p>
      </div>
    );
  }

  const totalPages = Math.ceil(favorites.length / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const currentFavorites = favorites.slice(startIdx, startIdx + itemsPerPage);

  return (
    <div className="favorites">
      <h2>Your Favorites</h2>
      <div className="movies-grid">
        {currentFavorites.map((movie: Movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page: number) => setCurrentPage(page)}
      />
    </div>
  );
}

export default Favorites;