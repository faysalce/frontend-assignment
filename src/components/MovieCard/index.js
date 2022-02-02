import React, { useState } from "react";
import PropTypes from "prop-types";

// Components
import MovieDetailsModal from "../MovieDetailsModal";
import MovieDetails from "../MovieDetails";
import Spinner from "../Spinner";

// Custom Hook
import { useSingleMovieFetch } from "../../hooks/useSingleMovieFetch";

// Styled Components
import { StyledMovieCard } from "./Style";

const MovieCard = ({ image, movieId, movieName }) => {
  const [isModal, setModal] = useState(false);

  const [movie, loading, error] = useSingleMovieFetch(movieId);
  if (error) return <div>Something went wrong ...</div>;
  if (loading) return <Spinner />;
  return (
    <StyledMovieCard key={movieId}
    onClick={() => setModal(true)}
    >
      <>
        <MovieDetailsModal  isVisible={isModal} title={movieName} onClose={() => setModal(false)}>
          <MovieDetails movie={movie} />
        </MovieDetailsModal>

            <div className="card-media">
              <div className="card-image">
                <img
                  src={image}
                  alt="moviecard"
                  
                />
              </div>
              <div className="card-rating">
                <div>{movie.vote_average}</div>
              </div>
            </div>
            <div className="card-body">
              <h4 className="card-title">{movie.title} </h4>
            </div>

        
      </>
    </StyledMovieCard>
  );
};

MovieCard.propTypes = {
  image: PropTypes.string,
  movieId: PropTypes.number,
  clickable: PropTypes.bool,
};

export default MovieCard;
