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
    width: "100%",
    maxWidth: '600px',
    display: "flex",
    margin: '0 auto',
    backgroundColor: 'lightgrey',
    marginTop: '30px'

  },
  details: {
    display: "flex",
    flexDirection: "column",
    alignItems: 'center',
  },
  content: {

  },
  cover: {
    width: 151
  },
  qrcode: {
    marginTop: '20px',
    marginBottom: '20px'

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
                <QRCode
                  className={classes.qrcode}
                  value={`${qrCode}`}
                  fgColor='black'
                  bgColor='lightgray'
                  level='L'
                  renderAs='svg'
                />
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

            </div>
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
