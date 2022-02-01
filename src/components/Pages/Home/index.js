import React, { useState } from "react";

import {
  POPULAR_BASE_URL,
  SEARCH_BASE_URL,
  POSTER_SIZE,
  BACKDROP_SIZE,
  IMAGE_BASE_URL,
} from "../constant";

// Components
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";
import MovieCard from "./MovieCard";
import Spinner from "./elements/Spinner";

// Custom Hook
import { useHomeFetch } from "../hooks/useMovieList";

// Images
import logo from "../images/logo.svg";

// Styled Components

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [
    {
      state: { movies, currentPage, totalPages, heroImage },
      loading,
      error,
    },
    fetchMovies,
  ] = useHomeFetch(searchTerm);

  const searchMovies = (search) => {
    const endpoint = search ? SEARCH_BASE_URL + search : POPULAR_BASE_URL;

    setSearchTerm(search);
    fetchMovies(endpoint);
  };

  if (error) return <div>Something went wrong ...</div>;
  if (!movies[0]) return <Spinner />;
  return (
    <>
     

      <SearchBar callback={searchMovies} />

      <MovieList header={searchTerm ? "Search Result" : "Recent Movies"}>
        {movies.map((movie) => (
          <>
            <MovieCard
              key={movie.id}
              clickable
              image={
                movie.poster_path
                  ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                  : NoImage
              }
              movieId={movie.id}
              movieName={movie.original_title}
            />
          </>
        ))}
      </MovieList>

      {loading && <Spinner />}
     

    </>
  );
};

export default Home;
