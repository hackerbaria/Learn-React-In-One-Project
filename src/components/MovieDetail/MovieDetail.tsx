import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { CastMember, Movie, SimilarMovie, Video } from "../../lib/types";
import "../../css/MovieDetail.css";
import { fetchMovieDetails } from "../../services/api";
import React from "react";
import MovieHeader from "./MovieHeader";
import MovieTrailer from "./MovieTrailer";
import MovieCast from "./MovieCast";
import SimilarMovies from "./SimilarMovies";

function MovieDetail() {
    const { id } = useParams<{ id: string }>();    
    const navigate = useNavigate();

    const [movie, setMovie] = useState<Movie | null>(null);
    const [cast, setCast] = useState<CastMember[]>([]);
    const [trailer, setTrailer] = useState<Video | null>(null);
    const [similarMovies, setSimilarMovies] = useState<SimilarMovie[]>([]);
    
    useEffect(() => {
        const load = async () => {
          try {
            const { movie, cast, trailer, similarMovies } = await fetchMovieDetails(id!);
            setMovie(movie);
            setCast(cast);
            setTrailer(trailer);
            setSimilarMovies(similarMovies);
          } catch (err) {
            console.error("Error loading movie detail:", err);
          }
        };
    
        load();
      }, [id]);

    if (!movie) return <div className="loading">Loading...</div>;

    return (
        <div className="movie-detail-container">
          <button className="back-button" onClick={() => navigate(-1)}>← Back</button>
          <MovieHeader movie={movie} />
          {trailer && <MovieTrailer trailer={trailer} />}
          {cast.length > 0 && <MovieCast cast={cast} />}
          {similarMovies.length > 0 && (
            <SimilarMovies movies={similarMovies} onClickMovie={(id) => navigate(`/movie/${id}`)} />
          )}
        </div>
      );
    }

    export default MovieDetail;