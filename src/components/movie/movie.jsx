import React from "react";

const Movie = ({ id, Title, Type, Year }) => {
  return (
    <div className="movie">
      <React.Fragment>
        <h3>{Title}</h3>
        <p>{Type}</p>
        <span>{Year}</span>
      </React.Fragment>
    </div>
  );
};

export default Movie;
