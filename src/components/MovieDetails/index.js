import React from "react";
import PropTypes from "prop-types";

// Components
import MovieCard from "../MovieCard";

// Images

// Environment Variables
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../constant";

// Styled Components
import { StyledMovieDetails } from "./Style";

const MovieDetails = ({ movie }) => (
  
  <StyledMovieDetails backdrop={movie.backdrop_path}>
    <div className="moviedetails-content">
      <div className="moviedetails-thumb">
       <img src={movie.poster_path
              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
              : ""} />
      </div>
      <div className="moviedetails-text">
        <h3 className="release-date">Release date: <span>{movie.release_date.toString('dddd MMMM ,yyyy')}</span></h3>
        <p className="movie-description">{movie.overview}</p>

        <div className="movie-vote">
            <div className="">{movie.vote_average} <span className="thin-fonts">/ 10 ( {movie.vote_count } total votes)</span></div>
        </div>
      </div>
    </div>
  </StyledMovieDetails>
);

MovieDetails.propTypes = {
  movie: PropTypes.object,
};

export default MovieDetails;
