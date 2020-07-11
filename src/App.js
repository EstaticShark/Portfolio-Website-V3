/** Import library **/
import React, { Component } from 'react';

/** Import components **/ 
import Navbar from './Navbar.js';
import Skills from './Skills.js';
import Projects from './Projects.js';

/** Import images **/
import headerImage from '../src/assets/header-image.jpg';
import uoftImage from '../src/assets/uoft.png';
import { GiComputing } from "react-icons/gi";
import javaIcon from '../src/assets/java-icon.jpg';
import javascriptIcon from '../src/assets/javascript-icon.png';
import pythonIcon from '../src/assets/python-icon.png';
import latexIcon from '../src/assets/latex-icon.png';
import reactIcon from '../src/assets/react-icon.png';
import gcpIcon from '../src/assets/gcp-icon.png';

/** Import Styles **/
import './styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);

    //State initilization
    this.state = {
      skills: [
                {title: "Java", description: "I have about 2 years of experience with Java. I've created a mobile game application on Android Studio Development Suite with this language.", picture: javaIcon, color: "red"},
                {title: "Python", description: "As one of my main languages, I have 2 years of experience with Python. I've utilized Python for several hackathons, mostly for setting up endpoints and API calls. And have other small projects where I made webscrapers and Discord bots.", picture: pythonIcon, color: "red"},
                {title: "Javascript", description: "I am reaching 1 year of experience with Javascript. It is extensively used with my React projects.", picture: javascriptIcon, color: "red"},
                {title: "React", description: "My main front-end framework for developing webpages such as this. So far, I have been actively using React for 6 months both in and out of school", picture: reactIcon, color: "teal"},
                {title: "LaTeX", description: "A document preparation system I have used extensively since my start at university. I have 2 years of experience using TeX for writing notes and completing papers. I have even worked on a program with others that converts handwriting to TeX", picture: latexIcon, color: "teal"},
                {title: "Google Cloud Platform", description: "I have experience working with many of GCP's features such as Firebase, Cloud Storage and Cloud functions. Most of this experience comes from using them in hackathons.", picture: gcpIcon, color: "teal"},

              ]
    };

    //Binding functions
    this.getSkills.bind(this.getSkills);
  }

  getSkills = () => {
    return this.state.skills.map((skill, index) => {
      return <Skills title={skill.title} description={skill.description} picture={skill.picture} color={skill.color}/>;
    });
  }

  render() {
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
            {/*<img src={uoftImage} className="Circle-image"/>*/}
            <div className="Circle-image">
              <img src={uoftImage} id="Uoft-icon" alt="Error"/>
            </div>
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
              <p>- Dean's List Student since 2019</p>
              <p>- Later Life Learning OSOTF Award 2019 (3.70+ GPA)</p>
            </div>
          </div>
          <div id="Courses">
            {/*<img src={uoftImage} className="Circle-image"/>*/}
            <div className="Circle-image">
              <GiComputing size={128} id="Courses-icon"/>
            </div>
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
        <h2 id="Skills-header">
          Skills
        </h2>
        <p id="Skills-subheader">
          (Though not limited to...)
        </p>
        <div id="Skills-container">
          {this.getSkills()}
        </div>
        <Projects/>
        <div id="Contacts">

        </div>
      </div>
    );
  }
}

export default App;
