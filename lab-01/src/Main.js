import React from 'react';
import HornedBeast from './HornedBeast'

class Main extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: '',
      description:'',
      imgUrl: ''
    }
  }
  render() {
    return(
      <>
      <HornedBeast />
      <HornedBeast />
      <HornedBeast />
      </>
    );
  }
}

export default Main;