import { Link } from "react-router-dom";
import "../css/Navbar.css"
import React, { useEffect, useState } from "react";
import { fetchGenres } from "../services/api";
import GenreDropdown from "./GenreDropdown";

function NavBar() {

    const [genres, setGenres] = useState<{ id: number; name: string }[]>([]);

    useEffect(() => {
        fetchGenres().then(setGenres).catch(console.error);
    }, []);

    return <nav className="navbar">
        <div className="navbar-brand">
            <Link to="/">🎬 MovieExplorer</Link>
        </div>
        <div className="navbar-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/favorites" className="nav-link">Favorites</Link>
            <GenreDropdown />
            <Link to="/trending" className="nav-link">Trending</Link>
            <Link to="/top-rated" className="nav-link">Top Rated</Link>
            <Link to="/actors" className="nav-link">Actors</Link>
        </div>
    </nav>
}

export default NavBar