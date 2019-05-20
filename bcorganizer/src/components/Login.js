import React from "react";
import { connect } from 'react-redux';
import { submitLogin } from '../actions';


import '../App.css';


class Login extends React.Component {
  state = {
    userName: "",
    password: ""
  };

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.submitLogin(this.state);
    this.setState({

        userName: '',
        password: ''


    })
  };

  render() {
    return (

      <div className="">

        <h1>Login</h1>
        <form className="LoginForm" onSubmit={this.handleSubmit}>
          <input
            value={this.state.userName}
            name="userName"
            onChange={this.handleChanges}
            placeholder="Username"
          />
          <input
            value={this.state.password}
            name="password"
            onChange={this.handleChanges}
            placeholder="Password"
          />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { submitLogin }
)(Login);
