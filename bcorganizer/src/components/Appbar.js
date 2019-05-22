import React from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  }
};

class MyAppBar extends React.Component {

  logOutButton = e => {
    localStorage.removeItem('token');
    this.props.isLoggedIn = false;
  }


  render() {
    const { classes, isLoggedIn, username } = this.props;
    console.log(this.username)

    return (
      <div>
        <AppBar position="static">
          {!isLoggedIn && (
            <div className={classes.root}>
              <Toolbar>
                <Typography
                  variant="h6"
                  color="inherit"
                  className={classes.grow}
                >
                  The Last Rolodex
                </Typography>
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
                <Button color="inherit" component={Link} to="/login">
                  My Collection
                </Button>
                <Button color="inherit" component={Link} to="/login" onClick={this.logOutButton}>
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
    username: state.user.username
  }
}

export default connect(mapStateToProps, {})(withStyles(styles)(MyAppBar));