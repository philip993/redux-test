import React from "react";
import "./movie.scss";

const Movie = ({ id, Title, Type, Year, Poster }) => {
  return (
    <div className="movie">
      <React.Fragment>
        <h3 className="movieTitle">{Title}</h3>
        <img className="moviePoster" src={Poster} alt="Poster Not Available" />
        <p className="movieType">Type: {Type}.</p>
        <span className="movieYear">Year of production: "{Year}".</span>
      </React.Fragment>
    </div>
  );
};

export default Movie;
