import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../redux/actions/getData";
import Movie from "../movie/movie";

const Movies = props => {
  const movies = useSelector(state => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <div>
      {movies}
      {console.log(movies)}
    </div>
  );
};

export default Movies;
