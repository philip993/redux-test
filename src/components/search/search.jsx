import React, { useState } from "react";
import "./search.scss";
import { useDispatch, useSelector } from "react-redux";
import { searchMovie, searchQuery } from "../redux/actions/searchMovie";

const Search = () => {
  const [text, setText] = useState("");
  const search = useSelector(state => state.movieReducer);
  const dispatch = useDispatch();

  const handleSearchInput = e => {
    setText(e.target.value);
    dispatch(searchMovie(text));
  };

  const handleUserSearch = e => {
    e.preventDefault();
    dispatch(searchQuery(text));
    handleResetInput();
  };

  const handleResetInput = () => {
    setText("");
  };

  return (
    <div className="search">
      <h3 className="searchTitle">Search Bar</h3>
      <form className="searchForm" onSubmit={handleUserSearch}>
        <input
          className="searchFormInput"
          type="text"
          onChange={handleSearchInput}
          value={text}
          placeholder="search for a movie..."
        />
        <br />
        <input className="searchFormButton" type="submit" />
      </form>
    </div>
  );
};
export default Search;
