import React from "react";
import { connect } from 'react-redux';
import { submitLogin } from '../actions';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import '../App.css';

class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.submitLogin(this.state)
      .then(() => {
        this.props.history.push('./home');
      })

    // this.setState({
    //   username: '',
    //   password: ''
    // })
  };

  render() {
    return (
      <div className="login-form">
        <h1>Welcome</h1>

        <form className='MUI-form' onSubmit={this.handleSubmit} noValidate autoComplete="off">

          <TextField
            required
            id="outlined-required"
            label="Username"
            margin="normal"
            variant="outlined"
            value={this.state.username}
            name="username"
            onChange={this.handleChanges}
          />
          {/* className={classes.textField} */}

          <TextField
            required
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            margin="normal"
            variant="outlined"
            value={this.state.password}
            name="password"
            onChange={this.handleChanges}
          />

          <Button type="submit" variant="contained" color="primary" >
            Sign In
          </Button>
        </form>

      </div>
    );
  }
}

export default connect(
  null,
  { submitLogin }
)(Login);
