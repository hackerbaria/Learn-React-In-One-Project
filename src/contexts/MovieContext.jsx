import {createContext, useState, useContext, useEffect} from "react";

const MovieContext = createContext();

export function MovieProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const isFavorite = (id) => favorites.some((movie) => movie.id === id);

  const addToFavorites = (movie) => {
    setFavorites((prev) => [...prev, movie]);
  };

  const removeFromFavorites = (id) => {
    setFavorites((prev) => prev.filter((movie) => movie.id !== id));
  };

  const value = {
    favorites,
    isFavorite,
    addToFavorites,
    removeFromFavorites,
  };

  return (
    <MovieContext.Provider value={value}>
      {children}
    </MovieContext.Provider>
  );
}


export function useMovieContext() {
  const context = useContext(MovieContext);
  if (!context) throw new Error("useMovieContext must be used within a MovieProvider");
  return context;
}