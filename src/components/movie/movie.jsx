import React from "react";

const Movie = ({ id, title }) => {
  return (
    <div className="movie">
      <h2>{title}</h2>
    </div>
  );
};

export default Movie;
