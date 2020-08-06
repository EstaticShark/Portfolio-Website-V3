import React, { Component } from 'react';
/*import images from './ProjectImages.js'*/
import './styles/Carousel.css';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

class Carousel extends Component{
  constructor(props) {
    super(props);

    //State initilization
    this.state = {
        pictureCount: this.props.images.length,
        currIndice: 0
    };

    //Binding functions
    this.slideLeft = this.slideLeft.bind(this);
    this.slideRight = this.slideRight.bind(this);
  }

  slideLeft = (event) => {
    event.stopPropagation();

    console.log("Slide to the left from", this.state.currIndice);
    const lastIndice = this.state.pictureCount - 1;
    const newIndice = this.state.currIndice === 0 ? lastIndice : this.state.currIndice - 1;
    this.setState({currIndice: newIndice});
    console.log("New indice at", newIndice);
  }

  slideRight = (event) => {
    event.stopPropagation();

    console.log("Slide to the right from", this.state.currIndice);
    const lastIndice = this.state.pictureCount - 1;
    const newIndice = this.state.currIndice === lastIndice ? 0 : this.state.currIndice + 1;
    this.setState({currIndice: newIndice});
    console.log("New indice at", newIndice);
  }
  
  render() {
    return (
        <div className="Carousel">
            <div className="Arrow-background" onClick={this.slideLeft}>
                <FaArrowLeft className="Left-arrow"/>
            </div>

            <div className="Carousel-container">
                <img className="Slide-image" src={this.props.images[this.state.currIndice]} alt="Cannot be loaded"/>
            </div>
            
            <div className="Arrow-background" onClick={this.slideRight}>
                <FaArrowRight className="Right-arrow"/>
            </div>
        </div>
    );
  }
}

export default Carousel;
