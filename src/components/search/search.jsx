import React, { useState } from "react";
import "./search.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  searchMovie,
  searchQuery,
  searchedTerm
} from "../redux/actions/searchMovie";

const Search = () => {
  const [text, setText] = useState("");
  const search = useSelector(state => state.movieReducer);
  const dispatch = useDispatch();

  const handleSearchInput = e => {
    setText(e.target.value);
    dispatch(searchMovie(text));
  };

<<<<<<< HEAD
  const handleUserSearch = e => {
    e.preventDefault();
    dispatch(searchQuery(text));
    handleResetInput();
  };

  const handleResetInput = () => {
    setText("");
=======
  const handleUserClick = () => {
    dispatch(searchedTerm(text));
    console.log(text);
>>>>>>> 34e9cb0e12544613cb1edb7b1ffabd77b4d4448c
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
        <input className="searchFormButton" disabled={!text} type="submit" />
      </form>
    </div>
  );
};
export default Search;
