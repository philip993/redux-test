import React, { useState } from "react";
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

  const handleUserClick = () => {
    dispatch(searchQuery(text));
    console.log(text);
  };
  return (
    <div className="search">
      <h3 className="searchTitle">Search Bar</h3>
      <form className="searchForm">
        <input
          className="searchInput"
          type="text"
          onChange={handleSearchInput}
          value={text}
          placeholder="search for a movie..."
        />
        <input type="button" value="SEARCH" onClick={handleUserClick} />
      </form>
    </div>
  );
};
export default Search;
