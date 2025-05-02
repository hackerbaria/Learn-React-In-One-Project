import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchGenres, fetchMoviesByGenre } from "../services/api";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";
import { Movie } from "../lib/types";
import "../css/GenreDetailPage.css";

function GenreDetailPage() {
  const { id } = useParams();
  const genreId = parseInt(id!);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [genreName, setGenreName] = useState<string>("");

  useEffect(() => {
    const loadMovies = async () => {
      const data = await fetchMoviesByGenre(genreId, currentPage);
      setMovies(data.results);
      setTotalPages(data.total_pages);
    };
    const loadGenreName = async () => {
        const genres = await fetchGenres();
        const selected = genres.find((g: { id: number }) => g.id === genreId);
        setGenreName(selected?.name || "Genre");
      };
    loadMovies();
    loadGenreName();
  }, [genreId, currentPage]);

  return (
    <div className="genre-detail">
      <h2 className="genre-heading">
  Top Movies in <span className="genre-name">{genreName}</span>
        </h2>
      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}

export default GenreDetailPage;