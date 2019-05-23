import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import QRCode from 'qrcode.react';

import { getUserData } from "../actions";

const styles = theme => ({
  card: {
    justifyContent: "center",
    width: "85%",
    maxWidth: '600px',
    display: "flex",
    margin: '0 auto',
    backgroundColor: 'antiquewhite',
    marginTop: '30px'

  },
  details: {
    display: "flex",
  },
  content: {
    flex: "1 0 auto",
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
    justifyContent: 'space-between'
  },
  cover: {
    width: 151
  },
  qrcode: {
    margin: '20px'
  }
});

class Loggedin extends React.Component {
  componentDidMount() {
    this.props.getUserData();
  }

  render() {
    const { classes } = this.props;
    const { firstname, lastname, email, organization, phone, jobTitle, qrCode } = this.props;
    return (
      <div>
        <div>
          <Card className={classes.card}>
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography component="h5" variant="h5">
                  {`${firstname} ${lastname}`}
                </Typography>
                <Typography component="h5" variant="h5">
                  {`Email: ${email}`}
                </Typography>
                <Typography component="h5" variant="h5">
                  {`Organization: ${organization}`}
                </Typography>
                <Typography component="h5" variant="h5">
                  {`Phone: ${phone}`}
                </Typography>
                <Typography component="h5" variant="h5">
                  {`Job Title: ${jobTitle}`}
                </Typography>
              </CardContent>
              <QRCode
                className={classes.qrcode}
                value={`${qrCode}`}
                fgColor='black'
                bgcolor='black'
                level='L'
                renderAs='svg'
              />
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
    lastname: state.user.last_name,
    id: state.user.id,
    email: state.user.email,
    organization: state.user.organization,
    phone: state.user.phone,
    jobTitle: state.user.jobTitle,
    qrCode: state.user.qrCode
  };
};

export default connect(
  mapStateToProps,
  { getUserData }
)(withStyles(styles)(Loggedin));
