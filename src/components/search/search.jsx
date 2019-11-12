import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchMovie } from "../redux/actions/searchMovie";

const Search = ({ text }) => {
  const search = useSelector(state => state.movieReducer);
  const dispatch = useDispatch();

  const handleSearchInput = e => {
    const text = e.target.value;
  };

  const handleSubmit = e => {
    e.preventDefault();
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
        <input
          type="button"
          value="SEARCH"
          onClick={() => dispatch(searchMovie())}
        />
      </form>
    </div>
  );
};
export default Search;
