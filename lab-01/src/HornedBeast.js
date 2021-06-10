/* eslint-disable */
import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      votes:0,
    }
  }
  incrementVote = () => {
    this.setState({
      votes: this.state.votes +1
    });
  }
  render() {
    return (
      <>
        <Card>
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Img src={this.props.imgUrl} alt={this.props.name} />
            <Card.Text>{this.props.description}</Card.Text>
            <Card.Footer>
              <Button onClick ={this.incrementVote()}>Vote Here</Button>
            </Card.Footer>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default HornedBeast;