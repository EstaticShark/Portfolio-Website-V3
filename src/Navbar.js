import React from 'react';
import './styles/Navbar.css';

function Navbar() {
  return (
    <div id="Navbar">
      <span id="Navbar-header">Martin Chak</span>
      <div id="Navbar-fields">
        <p>Home</p>
        <p>About</p>
        <p>Projects</p>
        <p>Contacts</p>
      </div>
    </div>
  );
}

export default Navbar;
