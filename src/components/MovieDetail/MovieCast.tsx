import React from "react";
import { CastMember } from "../../lib/types";
import { useNavigate } from "react-router-dom";

function MovieCast({ cast }: { cast: CastMember[] }) {

  const navigate = useNavigate();

  function handleClick(actorId: number) {
    navigate(`/person/${actorId}`);
  }
  return (
    <div className="cast">
      <h2>Cast</h2>
      <div className="cast-grid">
        {cast.map((actor) => (
          <div
            className="cast-card"
            key={actor.id}
            onClick={() => handleClick(actor.id)}
            style={{ cursor: "pointer" }}
          >
            {actor.profile_path && (
              <img
                src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                alt={actor.name}
              />
            )}
            <p><strong>{actor.name}</strong></p>
            <p>as {actor.character}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieCast;
