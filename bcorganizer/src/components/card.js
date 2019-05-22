import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";

import { getCollectionData } from "../actions";

const styles = theme => ({
  card: {
    justifyContent: "center",
    width: "85%",
    maxWidth: "600px",
    display: "flex",
    margin: "0 auto",
    backgroundColor: "antiquewhite",
    marginTop: "30px"
  },
  details: {
    display: "flex"
  },
  content: {
    flex: "1 0 auto",
    display: "flex",
    flexDirection: "column",
    width: "50%",
    justifyContent: "space-between"
  },
  cover: {
    width: 151
  },
  qrcode: {
    margin: "20px"
  }
});

class SingleCard extends React.Component {
  componentDidMount() {
    this.props.getCollectionData();
  }

  render() {
    console.log(this.props.cards);
    const { classes } = this.props;
    const { cards } = this.props;
    return (
      <div>
        <div>
          {cards &&
            cards.map(card => {
              const { firstName, lastName, email, organization, phone, jobTitle, id} = card;
              return (
                <Card className={classes.card} key={id}>
                  <div className={classes.details}>
                    <CardContent className={classes.content}>
                      <Typography component="h5" variant="h5">
                        {`${firstName} ${lastName}`}
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
                  </div>
                </Card>
              );
            })}
        </div>
        <div />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cards: state.cards
  };
};

export default connect(
  mapStateToProps,
  { getCollectionData }
)(withStyles(styles)(SingleCard));
