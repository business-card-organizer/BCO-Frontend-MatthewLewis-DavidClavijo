import React from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { getUserData, userLogout } from "../actions";
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1,
    justifyContent: 'flex-start'
  }
};

class MyAppBar extends React.Component {
  componentDidMount() {
    this.props.getUserData();
  }

  handleLogout = () => {
    this.props.userLogout();
  }

  render() {
    const { classes, isLoggedIn, username } = this.props;
    console.log( isLoggedIn )


    return (
      <div>
        <AppBar position="static">
          {!isLoggedIn && (
            <div className={classes.root}>
              <Toolbar>
                <Button
                  color="inherit"
                  className={classes.grow}
                  component={Link} to="/"
                >
                  The Last Rolodex
                </Button>
                <Button color="inherit" component={Link} to="/login">
                  Login
                </Button>
                <Button color="inherit" component={Link} to="/register">
                  Register
                </Button>
              </Toolbar>
            </div>
          )}
          {isLoggedIn && (
            <div className={classes.root}>
              <Toolbar>

                <Typography variant="h6" color="inherit" className={classes.grow}>
                  {`Welcome ${username}`}
                </Typography>
                <Button color="inherit" component={Link} to="/home">
                  My Profile
                </Button>
                <Button color="inherit" component={Link} to="/collection">
                  My Collection
                </Button>
                <Button color="inherit" component={Link} to="/login" onClick={this.handleLogout}>
                  Log Out
                </Button>
              </Toolbar>
            </div>
          )}
        </AppBar>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.isLoggedIn,
    username: state.user.username,
  }
}

export default connect(mapStateToProps, { getUserData, userLogout })(withStyles(styles)(MyAppBar));