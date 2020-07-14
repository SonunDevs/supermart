import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import classes from "./App.module.css";
import Home from "./pages/Home/Home";

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <BrowserRouter>
          <Route path="/" component={Home} exact />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
