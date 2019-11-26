import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchMovie, searchQuery } from "../redux/actions/searchMovie";

const Search = ({ text }) => {
  const search = useSelector(state => state.movieReducer);
  const dispatch = useDispatch();

  const handleSearchInput = e => {
    const text = e.target.value;

    dispatch(searchMovie(text));
  };

  const handleUserClick = e => {
    e.preventDefault();
    dispatch(searchQuery(text));
    console.log(text);
  };
  return (
    <div className="search">
      <h3>Search Bar</h3>
      <form>
        <input
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
