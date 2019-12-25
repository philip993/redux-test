import React from "react";
import "./App.css";
import Movies from "../movies/movies";
import Search from "../search/search";
const App = props => {
  return (
    <div className="app">
      <h1 className="appTitle">Movie list</h1>
      <span className="appDescription">Search for your favourite movies.</span>
      {<Search />}
      {<Movies />}
    </div>
  );
};

export default App;
