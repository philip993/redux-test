import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./movies.scss";
import Movie from "../movie/movie";
import { getMovies } from "../redux/actions/getMovies";

const Movies = props => {
  const movies = useSelector(state => state.movieReducer); //.movies
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies());
  }, []);

  return (
    <div className="movies">
      {movies.data.map(({ imdbID, ...otherProps }) => (
        <Movie key={imdbID} {...otherProps} />
      ))}
      {console.log(movies)}
    </div>
  );
};

export default Movies;
