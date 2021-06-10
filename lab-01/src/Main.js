import React from 'react';
import HornedBeast from './HornedBeast'

class Main extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: '',
      description:'',
      imgUrl: '',
      name: ''
    }
  }
  render() {
    return(
      <>
      {
        this.props.importData.map(beast => (
          <HornedBeast title = {beast.title} description = {beast.description} imgUrl = {beast.image_url} name = {beast.keyword}/>
        ))
      }

      {/* stuff from lab-02 below */}

      {/* <HornedBeast title = {this.props.importData[0].title} description = {this.props.importData[0].description} imgUrl = {this.props.importData[0].image_url} name = {this.props.importData[0].keyword}/>
      <HornedBeast title = {this.props.importData[1].title} description = {this.props.importData[1].description} imgUrl = {this.props.importData[1].image_url} name = {this.props.importData[1].keyword}/>
      <HornedBeast title = {this.props.importData[2].title} description = {this.props.importData[2].description} imgUrl = {this.props.importData[2].image_url} name = {this.props.importData[2].keyword}/> */}
      </>
    );
  }
}

export default Main;