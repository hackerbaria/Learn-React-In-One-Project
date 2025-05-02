import React, { useEffect, useState } from "react";
import { fetchGenres } from "../services/api";
import { Genre } from "../lib/types";
import { useNavigate } from "react-router-dom";
import "../css/GenresPage.css";

function GenresPage() {
    const [genres, setGenres] = useState<Genre[]>([]);
    const navigate = useNavigate();
  
    useEffect(() => {
      const loadGenres = async () => {
        const data = await fetchGenres();
        setGenres(data);
      };
      loadGenres();
    }, []);
  
    return (
      <div className="genres-page">
        <h1>Browse by Genre</h1>
        <div className="genres-grid">
          {genres.map((genre) => (
            <div
              key={genre.id}
              className="genre-card"
              onClick={() => navigate(`/genre/${genre.id}`)}
            >
              {genre.name}
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default GenresPage;