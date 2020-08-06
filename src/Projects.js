import React, { Component } from 'react';
import './styles/Projects.css';
import Carousel from './Carousel.js';

class Projects extends Component{
  constructor(props) {
    super(props);

    //State initilization
    this.state = {
      
    };

    //Binding functions

  }
  
  render() {
    return (
      <div className="Projects">
        <div className="project-title">
          {this.props.title}
        </div>

        {/*<img src={this.props.picture} className="project-image"/>*/}

        <Carousel images={this.props.picture}/>

        <div className="project-content">
          {this.props.description}
        </div>
      </div>
    );
  }
}

export default Projects;
