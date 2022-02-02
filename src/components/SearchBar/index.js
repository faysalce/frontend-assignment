import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import logo from "../../images/logo.svg"
import {
  StyledSearchBar,
  StyledSearchBarContent,
} from "./Style";

const SearchBar = ({ callback }) => {
  const [state, setState] = useState("");
  const timeOut = useRef(null);

  const doSearch = (event) => {
    const { value } = event.target;
    clearTimeout(timeOut.current);
    setState(value);

    timeOut.current = setTimeout(() => {
      callback(value);
    }, 1000);
  };

  return (
    <>
      <StyledSearchBar>
        <StyledSearchBarContent>
          <div className="header">
            <div className="logo">
              <img src={logo} alt="Timescale Logo" />
            </div>
            <div className="search-box">

              <input
                type="text"
                placeholder="Search for a movie"
                onChange={doSearch}
                value={state}

              />
            </div>
          </div>
        </StyledSearchBarContent>
      </StyledSearchBar>
    </>
  );
};

SearchBar.propTypes = {
  callback: PropTypes.func,
};

export default SearchBar;
