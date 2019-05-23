import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";

import { getCollectionData, deleteRequest } from "../actions";
import Modal from './Modal';

const styles = theme => ({
  card: {
    justifyContent: "space-evenly",
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
  qrscanner: {
    margin: '0 auto'
  },
  button: {
    color: 'white',
    backgroundColor: '#3f51b5',
    fontSize: 'larger',
    width: "22%",
    height: '3rem',
    alignSelf: 'center',
    borderRadius: '5px'
  }
});

class SingleCard extends React.Component {
  state = {
    cards: []
  }

  componentDidMount() {
    this.props.getCollectionData();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.cards !== this.props.cards) {
      this.setState({
        cards: this.props.cards
      });
    }
  }

  handleClick = (cardId) => {
    // event.preventDefault();
    let cards = this.state.cards.filter(card => {
      return card && card.id !== cardId
    });
    console.log(cards)
    this.setState({
      cards: cards
    })
    this.props.deleteRequest(cardId);

  }

  render() {
    const { classes } = this.props;
    const { cards } = this.state;
    return (
      <div>
        <div>
          {cards &&
            cards.map(card => {
              const { firstName, lastName, email, organization, phone, jobTitle, id } = card;
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
                  <button onClick={() => this.handleClick(card.id)} className={classes.button}>Delete</button>
                </Card>
              );
            })}
        </div>
        <div />
        <Modal className={classes.qrscanner} />
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
  { getCollectionData, deleteRequest }
)(withStyles(styles)(SingleCard));
