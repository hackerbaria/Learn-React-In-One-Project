export interface ApiResponse {
    results: Movie[];
    totalPages: number;
    currentPage: number;
}

export interface Movie {
    id: number;
  title: string;
  overview: string;
  poster_path?: string;
  release_date?: string;
  [key: string]: any;
}

export interface CastMember {
    id: number; 
    name: string;
    character: string;
    profile_path: string;
}

export interface Video {
    key: string;
    type: string;
    site: string;
    name: string;
}
  
export interface SimilarMovie {
    id: number;
    title: string;
    poster_path: string;
  }

export interface Person {
    id: number;
    name: string;
    biography: string;
    profile_path: string | null;
    birthday: string;
    place_of_birth: string;
    known_for_department: string;
}

export interface Actor {
    id: number;
    name: string;
    profile_path: string | null;
    popularity: number;
    known_for_department: string;
    known_for: {
      id: number;
      title?: string;
      name?: string;
      media_type: "movie" | "tv";
      poster_path: string | null;
    }[];
  }

  export interface Genre {
    id: number;
    name: string;
  }