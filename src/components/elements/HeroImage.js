import React from "react";
import PropTypes from "prop-types";

import { StyledHeroImage } from "../styles/StyledHeroImage";

const HeroImage = ({ title, text, image }) => (
  <StyledHeroImage image={image}>
    <div className="heroimage-content">
      <div className="heroimage-text">
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </div>
  </StyledHeroImage>
);

HeroImage.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
};

export default HeroImage;
