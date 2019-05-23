import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { getUserData } from "../../actions";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const styles = theme => ({
  paper: {
    position: "absolute",
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: "none"
  }
});

class EditModal extends React.Component {
  state = {
    open: false
  };

  componentDidMount() {
    this.props.getUserData();
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    const { email, organization, phone, jobTitle } = this.props;

    return (
      <div>
        <Button onClick={this.handleOpen}>Veiw Info</Button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <Typography variant="h6" id="modal-title">
              Profile
            </Typography>
            <div>
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
            </div>
          </div>
        </Modal>
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
  )(withStyles(styles)(EditModal));