import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchGenres } from "../services/api";
import "../css/GenreDropdown.css"; // Import your CSS file for styling


interface Genre {
    id: number;
    name: string;
  }


  function GenreDropdown() {
    const [genres, setGenres] = useState<Genre[]>([]);
  
    useEffect(() => {
      fetchGenres().then(setGenres).catch(console.error);
    }, []);
  
    return (
      <div className="nav-link dropdown">
        Genres ▾
        <div className="dropdown-content">
          {genres.map((genre) => (
            <Link
              key={genre.id}
              to={`/genre/${genre.id}`}
              className="dropdown-item"
            >
              {genre.name}
            </Link>
          ))}
        </div>
      </div>
    );
  }
  
  export default GenreDropdown;