import React from "react";
import PropTypes from "prop-types";


// Images

// Environment Variables
import { MOVIE_IMAGE_BASE_URL } from "../../constant";

// Styled Components
import { StyledMovieDetails } from "./Style";

const MovieDetails = ({ movie }) => (
  
  <StyledMovieDetails backdrop={movie.backdrop_path}>
    <div className="moviedetails-content">
      <div className="moviedetails-thumb">
       <img src={movie.poster_path
              ? `${MOVIE_IMAGE_BASE_URL}/${movie.poster_path}`
              : ""} alt={movie.title} />
      </div>
      <div className="moviedetails-text">
        <h3 className="release-date">Release date: <span>{new Date(movie.release_date).toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric"})}</span></h3>
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
