import React, { Component } from "react";
import { Route } from 'react-router-dom';

import Register from './Register';
import Login from "./Login";
import ButtonAppBar from '../components/Appbar';
import Loggedin from './Loggedin';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="userCard">
        <Route path='/' component={ButtonAppBar} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/home' component={Loggedin} />
      </div>
    );
  }
}

export default MainPage;