import { ApiResponse, Genre } from "../lib/types";

const API_KEY = "dd17d1b83ca404038b27016b187bee7f";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async (page = 1) => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}`);
  const data = await response.json();
  return {
    results: data.results,
    totalPages: data.total_pages,
    currentPage: data.page,
  };
};

export const searchMovies = async (query: string, page : number = 1) : Promise<ApiResponse> => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`
  );
  const data = await response.json();
  return {
    results: data.results,
    totalPages: data.total_pages,
    currentPage: data.page,
  };
};

export async function fetchMovieDetails(id: string) {
  const [movieRes, creditsRes, videosRes, similarRes] = await Promise.all([
    fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`),
    fetch(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`),
    fetch(`${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}`),
    fetch(`${BASE_URL}/movie/${id}/similar?api_key=${API_KEY}`),
  ]);

  const movieData = await movieRes.json();
  const creditsData = await creditsRes.json();
  const videosData = await videosRes.json();
  const similarData = await similarRes.json();

  const ytTrailer = videosData.results.find(
    (v: any) => v.site === "YouTube" && v.type === "Trailer"
  );

  return {
    movie: movieData,
    cast: creditsData.cast?.slice(0, 5),
    trailer: ytTrailer || null,
    similarMovies: similarData.results.slice(0, 6),
  };
}

export async function fetchPersonDetails(personId: string) {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/person/${personId}?api_key=${API_KEY}`
    );
    if (!res.ok) throw new Error("Failed to fetch person details");
    return await res.json();
  } catch (error) {
    console.error("Error fetching person details:", error);
    throw error;
  }
}

export async function fetchTrendingMovies() {
  const res = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`);
  if (!res.ok) throw new Error("Failed to fetch trending movies");
  const data = await res.json();
  return data.results;
}

export async function fetchTopRatedMovies(page = 1) {
  const res = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&page=${page}`);
  if (!res.ok) throw new Error("Failed to fetch top-rated movies");
  return res.json(); // includes results, total_pages, etc.
}

export const fetchPopularActors = async (page = 1) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/person/popular?api_key=${API_KEY}&page=${page}`
  );
  if (!res.ok) throw new Error("Failed to fetch popular actors");
  return await res.json();
};

export const fetchGenres = async (): Promise<Genre[]> => {
  const res = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`);
  const data = await res.json();
  return data.genres;
};

export const fetchMoviesByGenre = async (genreId: number, page = 1) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genreId}&page=${page}`
  );
  const data = await res.json();
  return data;
};