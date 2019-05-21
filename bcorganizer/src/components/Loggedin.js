import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import QRCode from 'qrcode.react';

import { getUserData } from "../actions";

const styles = theme => ({
  card: {
    justifyContent: "center",
    width: "85%",
    display: "flex",
    margin: '0 auto'
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 auto"
  },
  cover: {
    width: 151
  }
});

class Loggedin extends React.Component {
  componentDidMount() {
    this.props.getUserData();
  }

  render() {
    const { classes } = this.props;
    const { firstname, lastname } = this.props;
    console.log(this.props);
    return (
      <div>
        <div>
          <Card className={classes.card}>
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography component="h5" variant="h5">
                  {`${firstname} ${lastname}`}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  <QRCode
                    value='https://thelastrolodex.netlify.com/'
                    fgColor='pink'
                    bgcolor='black'
                    level='L'
                    renderAs='svg'
                  />
                </Typography>
              </CardContent>
            </div>
            {/* <CardMedia
        className={classes.cover}
        image="/static/images/cards/live-from-space.jpg"
        title="Live from space album cover"
      /> */}
          </Card>
        </div>
        <div />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    firstname: state.user.first_name,
    lastname: state.user.last_name
  };
};

export default connect(
  mapStateToProps,
  { getUserData }
)(withStyles(styles)(Loggedin));
