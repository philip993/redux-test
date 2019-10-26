import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../redux/actions/getData";
import Movie from "../movie/movie";

const Movies = props => {
  const movies = useSelector(state => state.movieReducer); //.movies
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <div>
      {movies.data.map(({ id, title }) => (
        <Movie key={id} title={title} />
      ))}
      {console.log(movies)}
    </div>
  );
};

export default Movies;
