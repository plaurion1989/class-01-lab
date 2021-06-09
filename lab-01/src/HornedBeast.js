/* eslint-disable */
import React from 'react';


class HornedBeast extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <>
      <h2>{this.props.name}</h2>
      <img alt = {this.props.description}/>
      <p>{this.props.description}</p>
      </>
    );
  }
}

export default HornedBeast;