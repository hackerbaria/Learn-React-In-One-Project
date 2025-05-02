import "./css/App.css";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import { Routes, Route } from "react-router-dom";
import { MovieProvider } from "./contexts/MovieContext";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import PersonDetail from "./components/PersonDetail";
import TrendingMovies from "./pages/TrendingMovies";
import TopRatedMovies from "./pages/TopRatedMovies";
import ActorsPage from "./pages/ActorsPage";
import GenresPage from "./pages/GenresPage";
import GenreDetailPage from "./pages/GenreDetailPage";
import "font-awesome/css/font-awesome.min.css";

function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/person/:id" element={<PersonDetail />} />
          <Route path="/trending" element={<TrendingMovies />} />
          <Route path="/top-rated" element={<TopRatedMovies />} />
          <Route path="/actors" element={<ActorsPage />} />
          <Route path="/genres" element={<GenresPage />} />
          <Route path="/genre/:id" element={<GenreDetailPage />} />
        </Routes>
      </main>
      <Footer />
    </MovieProvider>
  );
}

export default App;
