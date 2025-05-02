import React, { useState, ChangeEvent, FormEvent } from "react";
import "../css/SearchBar.css";

interface SearchBarProps {
  onSearch: (query: string) => void;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, searchQuery, setSearchQuery }) => {
    const [inputFocus, setInputFocus] = useState(false);
  
    const handleSubmit = (e: FormEvent) => {
      e.preventDefault();
      onSearch(searchQuery);
      console.log("Search submitted:", searchQuery); // Debugging line
    };
  
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(e.target.value);
    };
  
    return (
      <div className="search-bar">
        <form onSubmit={handleSubmit} className="search-form">
          <input
            type="text"
            placeholder="Search for movies..."
            className={`search-input ${inputFocus ? "focused" : ""}`}
            value={searchQuery}
            onChange={handleChange}
            onFocus={() => setInputFocus(true)}
            onBlur={() => setInputFocus(false)}
          />
          <button type="submit" className="search-button">
            <i className="fa fa-search"></i> {/* Optional: Search Icon */}
          </button>
        </form>
      </div>
    );
  };
  
  export default SearchBar;