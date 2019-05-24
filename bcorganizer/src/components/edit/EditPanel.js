import React from "react";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { connect } from "react-redux";
import { getUserData } from "../../actions";

const styles = theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  },
  ExpansionPanelDetails: {
    flexDirection: "column"
  }
});

class EditPanel extends React.Component {
  componentDidMount() {
    this.props.getUserData();
  }

  render() {
    const { classes } = this.props;
    const { email, organization, phone, jobTitle } = this.props;

    return (
      <div className={classes.root}>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              Profile
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.ExpansionPanelDetails}>
            <Typography component="p" variant="p">
              {`Email: ${email}`}
            </Typography>
            <Typography component="p" variant="p">
              {`Organization: ${organization}`}
            </Typography>
            <Typography component="p" variant="p">
              {`Phone: ${phone}`}
            </Typography>
            <Typography component="p" variant="p">
              {`Job Title: ${jobTitle}`}
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    id: state.user.id,
    email: state.user.email,
    organization: state.user.organization,
    phone: state.user.phone,
    jobTitle: state.user.jobTitle
  };
};

export default connect(
  mapStateToProps,
  { getUserData }
)(withStyles(styles)(EditPanel));
