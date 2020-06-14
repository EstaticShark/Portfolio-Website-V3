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
        <div className="Content-header">
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
          <div className="Content-header">
            <span>Education</span>
          </div>
          <span className="Content-subheader">University of Toronto, St. George Campus (2018 - 2022/2023)</span>
          <div className="Content-text">
            <p>- Studying for B.Sc. in Computer Science</p>
            <p>- GPA: 3.73/4.00 (As of June 14th, 2020)</p>
            <p>- Computer Science Specialist</p>
            <p>- Secondary Mathematics Major</p>
            <p>- Open for 2021/2022 PEY co-op positions</p>
          </div>
        </div>
        <div id="Courses">
          <img src={uoftImage} className="Circle-image"/>
          <div className="Content-header">
            <span>Relevant Courses</span>
          </div>
          <span className="Content-subheader">At University of Toronto St. George Campus</span>
          <div className="Content-text">
            <p>CSC108 (Intro to Comp Prog) - 89%</p>
            <p>CSC148 (Intro to Comp Sci) - 87%</p>
            <p>CSC165 (Math Expr&Rsng for Cs) - 91%</p>
            <p>CSC207 (Software Design) - 87%</p>
            <p>CSC209 (Soft Tools & Sys Prog) - 90%</p>
            <p>CSC236 (Intro to Theory Comp) - 83%</p>
            <p>CSC258 (Computer Organizatn) - 87%</p>
            <p>CSC263 (Data Structures & Analysis) - 87%</p>
          </div>
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
