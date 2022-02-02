import React from 'react';

const API_URL = process.env.REACT_APP_API_DOMAIN;

const API_KEY = process.env.REACT_APP_MOVIE_DB_API_KEY;

const SEARCH_BASE_URL = `${API_URL}/search/movie?api_key=${API_KEY}&query=`;

const POPULAR_BASE_URL = `${API_URL}/movie/popular?api_key=${API_KEY}`;


const IMAGE_BASE_URL = process.env.REACT_APP_API_BASE_IMAGE_URL;


const POSTER_SIZE = "w500";

export {
  SEARCH_BASE_URL,
  POPULAR_BASE_URL,
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  POSTER_SIZE,
};
