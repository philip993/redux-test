import React from "react";
import "./main.scss";
import Search from "../../components/search/search";
import Movies from "../../components/movies/movies";

const Main = () => {
  return (
    <div className="main">
      <Search />
      <Movies />
    </div>
  );
};

export default Main;
