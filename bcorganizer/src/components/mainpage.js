import React, { Component } from "react";

import Login from "./Login";
import ButtonAppBar from '../components/Appbar';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="userCard">
        <ButtonAppBar />
        <Login />
      </div>
    );
  }
}

export default MainPage;