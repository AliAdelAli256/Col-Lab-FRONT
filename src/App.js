import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./newComponents/Main";
import Default from "./newComponents/Default";
import DefaultNavBar from "./newComponents/DefaultNavBar";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <DefaultNavBar />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/default" component={Default} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
