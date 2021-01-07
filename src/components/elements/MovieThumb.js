import React from "react";
import { Link } from "@reach/router";
import PropTypes from "prop-types";

import { StyledMovieThumb } from "../styles/StyledMovieThumb";

const MovieThumb = ({ image, clickable, movieId, movieName }) => (
  <StyledMovieThumb>
    {clickable ? (
      <Link to={`/${movieId}`}>
        <img className="clickable" src={image} alt={movieName} />
      </Link>
    ) : (
      <img src={image} alt={movieName} />
    )}
  </StyledMovieThumb>
);

MovieThumb.propTypes = {
  image: PropTypes.string,
  clickable: PropTypes.bool,
  movieId: PropTypes.number,
  movieName: PropTypes.string,
};

export default MovieThumb;
