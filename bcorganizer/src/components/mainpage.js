import React, { Component } from "react";
import { Route } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";

import Register from "./Register";
import Login from "./Login";
import ButtonAppBar from "../components/Appbar";
import Loggedin from "./Loggedin";
import Card from "./card";
import Landing from "./Landing";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = { isScanning: false };
  }

  render() {
    return (
      <div className="mainpage">
        <ButtonAppBar />
        <Route exact path="/" component={Landing} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <PrivateRoute path="/home" component={Loggedin} />
        <Route path="/collection" component={Card} />
      </div>
    );
  }
}

export default MainPage;
