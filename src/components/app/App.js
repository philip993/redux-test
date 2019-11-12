import React from "react";
import "./App.css";
import Movies from "../movies/movies";
import Search from "../search/search";
const App = props => {
  return (
    <div className="app">
      <h1>Movie list</h1>
      {<Search />}
      {<Movies />}
    </div>
  );
};

export default App;
