import React from "react";
import { SimilarMovie } from "../../lib/types";

function SimilarMovies({
  movies,
  onClickMovie,
}: {
  movies: SimilarMovie[];
  onClickMovie: (id: number) => void;
}) {
  return (
    <div className="similar">
      <h2>Similar Movies</h2>
      <div className="similar-grid">
        {movies.map((sm) => (
          <div key={sm.id} className="similar-card" onClick={() => onClickMovie(sm.id)}>
            <img
              src={`https://image.tmdb.org/t/p/w200${sm.poster_path}`}
              alt={sm.title}
            />
            <p>{sm.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SimilarMovies;
