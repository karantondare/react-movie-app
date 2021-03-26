import React from "react";
import { StyledFooter } from "../styles/StyledFooter";

const Footer = () => {
  return (
    <StyledFooter>
      <h3>
        Created by <a href="https://github.com/karantondare">Karan Tondare</a>{" "}
        using <a href="https://reactjs.org">React</a>,{" "}
        <a href="https://styled-components.com">styled-components</a> and{" "}
        <a href="https://developers.themoviedb.org/3">TMDb Api</a>
      </h3>
    </StyledFooter>
  );
};

export default Footer;
