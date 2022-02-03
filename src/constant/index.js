
const API_URL = process.env.REACT_APP_API_DOMAIN;

const API_KEY = process.env.REACT_APP_MOVIE_DB_API_KEY;

const MOVIE_SEARCH_BASE_URL = `${API_URL}/search/movie?api_key=${API_KEY}&query=`;

const LATEST_MOVIE_BASE_URL = `${API_URL}/movie/popular?api_key=${API_KEY}`;


const MOVIE_IMAGE_BASE_URL = process.env.REACT_APP_API_BASE_IMAGE_URL;


export {
  MOVIE_SEARCH_BASE_URL,
  LATEST_MOVIE_BASE_URL,
  API_URL,
  API_KEY,
  MOVIE_IMAGE_BASE_URL,
};
