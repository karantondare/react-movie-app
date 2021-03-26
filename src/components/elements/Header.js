import React from "react";
import { Link } from "@reach/router";

import TMDBLogo from "../images/tmdb_logo.svg";
import popcorn from "../images/popcorn.svg";
import {
  StyledHeader,
  StyledRMDBLogo,
  StyledTMDBLogo,
} from "../styles/StyledHeader";

const Header = () => (
  <StyledHeader>
    <div className="header-content">
      <Link to="/">
        <StyledRMDBLogo src={popcorn} alt="react movie app" />
      </Link>
      <StyledTMDBLogo src={TMDBLogo} alt="tmdb-logo" />
    </div>
  </StyledHeader>
);

export default Header;
