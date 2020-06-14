/** Import library **/
import React from 'react';

/** Import components **/ 
import Navbar from './Navbar.js';
import Courses from './Courses.js';
import Skills from './Skills.js';
import Projects from './Projects.js';

/** Import images **/
import headerImage from '../src/assets/header-image.jpg'
import uoftImage from '../src/assets/uoft.png'
import { GiComputing } from "react-icons/gi";

/** Import Styles **/
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div id="Header">
        <img id="Header-picture" src={headerImage} alt="Missing asset"/>
        <header id="Header-title">
          Martin Chak
        </header>
        <p id="Header-text">
          Third Year Computer Science Student <br/> And Aspiring Software Developer
        </p>
      </div>
      <div id="Intro">
        <div id="Intro-header">
          Introduction
        </div>
        <div id="Intro-text">
          I am a student studying for a Computer Science specialist with a double major in Mathematics at 
          the University of Toronto. I started programming late into high school and now do it as both a 
          hobby and future profession.
          <br/><br/>
          I'm currently looking for 2020-2022 PEY co-op positions at the moment, if you're interested you
          can view my resume <a href="https://drive.google.com/open?id=1stbWlfTAVCdx1MCJwrVb7PcRH38nwYNw" className="text-link">here.</a>
        </div>
      </div>
      <div id="School-container">
        <div id="Education">
          <img src={uoftImage} className="Circle-image"/>
        </div>
        <div id="Courses">
          <img src={uoftImage} className="Circle-image"/>
        </div>
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
