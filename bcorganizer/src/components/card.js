import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";

import { getCollectionData, deleteRequest } from "../actions";
import Modal from './modals/Modal';

const styles = theme => ({
  card: {
    justifyContent: "space-evenly",
    width: "98%",
    maxWidth: "450px",
    display: "flex",
    flexDirection: "column",
    margin: "0 auto",
    backgroundColor: "antiquewhite",
    border: '.1rem solid black',
    marginTop: "30px"
  },
  details: {
    display: "flex",
    //justifyContent: 'center'
  },
  content: {
    flex: "1 0 auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  cover: {
    width: '151'
  },
  button: {
    color: 'white',
    fontSize: 'larger',
    width: "100%",
    height: '3rem',
    alignSelf: 'center',
    borderRadius: '5px',
    backgroundColor: '#283f5f'
  }
});

class SingleCard extends React.Component {
  state = {
    cards: []
  }

  componentDidMount() {
    this.props.getCollectionData();
    this.setState({ cards: this.props.cards })
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
        <Modal />
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
