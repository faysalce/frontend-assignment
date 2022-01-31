const API_URL = "https://api.themoviedb.org/3/";

const API_KEY = process.env.THE_MOVIE_DB_API_KEY;

const SEARCH_BASE_URL = `${API_URL}search/movie?api_key=${API_KEY}&query=`;

const POPULAR_BASE_URL = `${API_URL}movie/popular?api_key=${API_KEY}`;

const FILTER_BASE_URL = `${API_URL}movie/popular?api_key=${API_KEY}&page=5`;

const IMAGE_BASE_URL = "http://image.tmdb.org/t/p/";

const BACKDROP_SIZE = "w1280";

const POSTER_SIZE = "w500";

export {
  SEARCH_BASE_URL,
  POPULAR_BASE_URL,
  FILTER_BASE_URL,
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
};
