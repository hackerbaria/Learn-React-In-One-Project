import React from "react";
import { Video } from "../../lib/types";

function MovieTrailer({ trailer }: { trailer: Video }) {
  return (
    <div className="trailer">
      <h2>Trailer</h2>
      <iframe
        width="100%"
        height="400"
        src={`https://www.youtube.com/embed/${trailer.key}`}
        title={trailer.name}
        allowFullScreen
      />
    </div>
  );
}

export default MovieTrailer;