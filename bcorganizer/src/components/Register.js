import React from "react";
import { connect } from "react-redux";
import { submitRegister } from "../actions";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import "../App.css";

class Register extends React.Component {
  state = {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
  };

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.submitRegister(this.state).then(() => {
      this.props.history.push("./home");
    });
  };

  render() {
    return (
      <div className="login-form">
        <h1>Register</h1>

        <form
          className="MUI-form"
          onSubmit={this.handleSubmit}
          noValidate
          autoComplete="off"
        >
          <TextField
            required
            id="outlined-firstname-input"
            label="First Name"
            margin="normal"
            variant="outlined"
            value={this.state.firstName}
            name="firstName"
            onChange={this.handleChanges}
          />

          <TextField
            required
            id="outlined-lastname-input"
            label="Last Name"
            margin="normal"
            variant="outlined"
            value={this.state.lastName}
            name="lastName"
            onChange={this.handleChanges}
          />

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

          {/* <TextField
            required
            id="outlined-email-input"
            label="Email"
            margin="normal"
            variant="outlined"
            value={this.state.email}
            name="email"
            onChange={this.handleChanges}
          />

          <TextField
            required
            id="outlined-org-input"
            label="Organization"
            margin="normal"
            variant="outlined"
            value={this.state.org}
            name="org"
            onChange={this.handleChanges}
          />

          <TextField
            required
            id="outlined-phone-input"
            label="Phone Number"
            margin="normal"
            variant="outlined"
            value={this.state.phone}
            name="phone"
            onChange={this.handleChanges}
          />

          <TextField
            required
            id="outlined-job-input"
            label="job"
            margin="normal"
            variant="outlined"
            value={this.state.job}
            name="job"
            onChange={this.handleChanges}
          /> */}

          <Button type="submit" variant="contained" color="primary">
            Sign Up
          </Button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { submitRegister }
)(Register);
