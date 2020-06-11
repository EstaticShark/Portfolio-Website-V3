import React from 'react';
import Navbar from './Navbar.js';
import Courses from './Courses.js';
import Skills from './Skills.js';
import Projects from './Projects.js';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div id="Header">

      </div>
      <div id="Intro">

      </div>
      <Courses/>
      <Skills/>
      <Projects/>
      <div id="Contacts">

      </div>
    </div>
  );
}

export default App;
