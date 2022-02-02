import React, { useState } from "react";

import {
  POPULAR_BASE_URL,
  SEARCH_BASE_URL,
  POSTER_SIZE,
  IMAGE_BASE_URL,
} from "../../../constant";

// Components
import SearchBar from "../../SearchBar";
import MovieList from "../../MovieList";
import MovieCard from "../../MovieCard";
import Spinner from "../../Spinner";

// Custom Hook
import { useMovieList } from "../../../hooks/useMovieList";

// Images

// Styled Components

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [
    {
      state: { movies },
      loading,
      error,
    },
    fetchMovies,
  ] = useMovieList(searchTerm);

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

      <MovieList header={searchTerm ? "Search Result" : "Most Recent Movies"}>
        {movies.map((movie) => (
          <>
            <MovieCard
              key={movie.id}

              image={
                movie.poster_path
                  ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                  : ""
              }
              movieId={movie.id}
              movieName={movie.title}
            />
          </>
        ))}
      </MovieList>

      {loading && <Spinner />}


    </>
  );
};

export default Home;
