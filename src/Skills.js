import React, { Component } from 'react';
import './styles/Skills.css';

class Skills extends Component{
  constructor(props) {
    super(props);

    //State initilization
    this.state = {
      
    };

    //Binding functions

  }
  
  render() {
    return (
      <tr className="Skills">
        <td className="Skills-image">
            <img src={this.props.picture} alt="Error"/>
        </td>
        <td className="Skills-content">
          <h2>
            {this.props.title}
          </h2>
          <p>
            {this.props.description}
          </p>
        </td>
      </tr>
    );
  }
}

export default Skills;