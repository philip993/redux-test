import React from "react";
import "./App.css";
import Movies from "../movies/movies";
const App = props => {
  return (
    <div className="app">
      <h1>Movie list</h1>
      {<Movies />}
    </div>
  );
};

export default App;
