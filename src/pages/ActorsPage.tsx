import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchPopularActors } from "../services/api";
import Pagination from "../components/Pagination";
import "../css/ActorGrid.css";
import React from "react";
import { Actor } from "../lib/types";

function ActorsPage() {
    const [actors, setActors] = useState<Actor[]>([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const navigate = useNavigate();
  
    useEffect(() => {
      fetchPopularActors(page)
        .then((data) => {
          setActors(data.results);
          setTotalPages(data.total_pages);
        })
        .catch((err) => console.error("Failed to load actors", err));
    }, [page]);
  
    return (
      <div className="actor-grid-container">
        <h1>🎭 Popular Actors</h1>
  
        <div className="actor-grid">
          {actors.map((actor: Actor) => (
            <div
              key={actor.id}
              className="actor-card"
              onClick={() => navigate(`/person/${actor.id}`)}
              style={{ cursor: "pointer" }}
            >
              {actor.profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                  alt={actor.name}
                />
              ) : (
                <div className="no-photo">No Image</div>
              )}
              <p>{actor.name}</p>
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
  
  export default ActorsPage;