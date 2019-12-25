import React from "react";

const Movie = ({ id, Title, Type, Year, Poster }) => {
  return (
    <div className="movie">
      <React.Fragment>
        <img src={Poster} alt="Poster Not Available" />
        <h3 className="movieTitle">{Title}</h3>
        <p className="movieType">Type: {Type}.</p>
        <span className="movieYear">Year of production: "{Year}".</span>
      </React.Fragment>
    </div>
  );
};

export default Movie;
