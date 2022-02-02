import React from "react";
import PropTypes from "prop-types";

// Styled Components
import {
  StyledMovieList,
  StyledMovieListContent,
} from "./Style";

const MovieList = ({ header, children }) => (
  <StyledMovieList>
    <h1>{header}</h1>
    <StyledMovieListContent>{children}</StyledMovieListContent>
  </StyledMovieList>
);

MovieList.propTypes = {
  header: PropTypes.string,
};

export default MovieList;
