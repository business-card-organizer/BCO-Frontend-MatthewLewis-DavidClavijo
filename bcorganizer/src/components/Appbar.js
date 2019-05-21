import React from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
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
  state = {
    loggedin: false
  };

  handleChange = event => {
    this.setState({ loggedin: event.target.checked });
  };

  render() {
    const { classes } = this.props;
    const { loggedin } = this.state;

    return (
      <div>
        <AppBar position="static">
          {!loggedin && (
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
          {loggedin && (
            <div className={classes.root}>
              <Toolbar>
                <Typography variant="h6" color="inherit">
                  Welcome username
                </Typography>
              </Toolbar>
            </div>
          )}
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(MyAppBar);