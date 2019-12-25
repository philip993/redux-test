import React from "react";
import { Switch, Route } from "react-router-dom";

import "./app.scss";

import Header from "../header/header";
import About from "../../pages/about/about";
import Main from "../../pages/main/main";
import Contact from "../../pages/contact/contact";

const App = props => {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
      </Switch>
    </div>
  );
};

export default App;
