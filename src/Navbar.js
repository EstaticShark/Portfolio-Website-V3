import React from 'react';
import './styles/Navbar.css';

import Scroll from "react-scroll";
const ScrollLink = Scroll.Link;

function Navbar() {
  return (
    <div id="Navbar">
      <span id="Navbar-header">Martin Chak</span>
      <div id="Navbar-fields">
      <ScrollLink 
          to="#home"
          spy={true} 
          smooth={true} 
          duration={500} 
        >
          <a className="Navbar-fields-text" href="">Home</a>
        </ScrollLink>

        <ScrollLink 
          to="#about"
          spy={true} 
          smooth={true} 
          duration={500} 
        >
          <a className="Navbar-fields-text" href="">About</a>
        </ScrollLink>

        <ScrollLink 
          to="#projects"
          spy={true} 
          smooth={true} 
          duration={500} 
        >
          <a className="Navbar-fields-text" href="">Projects</a>
        </ScrollLink>
        
        <ScrollLink 
          to="#contacts"
          spy={true} 
          smooth={true} 
          duration={500} 
        >
          <a className="Navbar-fields-text" href="">Contacts</a>
        </ScrollLink>
      </div>
    </div>
  );
}

export default Navbar;
