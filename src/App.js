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
import lolInfo1 from '../src/assets/lol-info-1.PNG';
import lolInfo2 from '../src/assets/lol-info-2.PNG';
import androidGame1 from '../src/assets/android-game-1.PNG';
import androidGame2 from '../src/assets/android-game-2.PNG';
import androidGame3 from '../src/assets/android-game-3.PNG';
import androidGame4 from '../src/assets/android-game-4.PNG';
import stemNotes1 from '../src/assets/stem-notes-1.PNG';
import stemNotes2 from '../src/assets/stem-notes-2.PNG';
import portfolioSite from '../src/assets/porfolio-site-1.PNG';


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

              ],
      projects: [
        {title: "LoL Info Bot", description:"(July 2019 - August 2019) A Discord bot created with Python that searches for information on players in the popular online video game, League of Legends. Utilizes webscraping, requests and external API's to gather the information, and event-based programming to deliver the information.", picture: [lolInfo1, lolInfo2]},
        {title: "Stem Notes", description:"(January 2020) A Hackathon project using OCR to recognize handwriting and output it in latex. I was responsible for the backend set up on the Google Cloud Platform, which communicated with the APIs, iPad and the host output website.", picture:[stemNotes1, stemNotes2]},
        {title: "Politics Simulation Game", description:"(November - December 2019) Created a Android game which depicted the user as a candidate in a satirical election for the world. Created views using Android Studio and Java, and utilized software design principles and patterns to implement the app with a Model-View-Presenter pattern.", picture:[androidGame1, androidGame2, androidGame3, androidGame4]},
        {title: "Portfolio Website", description:"(August 2019 - Present) A series of portfolio websites I made after taking FreeCodeCamp lessons. I created the first one out of pure HTML and CSS and then the second and third one, which you see now, in React.", picture:[portfolioSite]}
                ]
    };

    //Binding functions
    this.getSkills.bind(this.getSkills);
    this.getProjects.bind(this.getProjects);
  }

  getSkills = () => {
    return this.state.skills.map((skill, index) => {
      return <Skills title={skill.title} description={skill.description} picture={skill.picture} color={skill.color}/>;
    });
  }

  getProjects = () => {
    return this.state.projects.map((project, index) => {
      return <Projects title={project.title} description={project.description} picture={project.picture}/>;
    });
  }

  render() {
    return (
      <div className="App">
        <div id="#home"></div>
        <Navbar/>
        <div id="Header">
          <img id="Header-picture" src={headerImage} alt="Missing asset"/>
          <header id="Header-title">
            Martin Chak
          </header>
          <p id="Header-text">
            Computer Science Student <br/> And Aspiring Software Developer
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
          <div id="#about"></div>
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

        <h2 id="Projects-header">
          Projects
        </h2>
        <div id="#projects"></div>
        <div id="Project-container">
          {this.getProjects()}
        </div>
        <div id="Contacts">
          <div id="#contacts"></div>
          <div className="Content-header">
            Contact Info
          </div>
          <div id="Contact-text">
            <tr>
                <td>
                  Github:
                </td>
                <td>
                  <a href="https://github.com/EstaticShark">https://github.com/EstaticShark</a>
                </td>
            </tr>
            <tr>
                <td>
                  Linkedin:
                </td>
                <td>
                  <a href="https://www.linkedin.com/in/martinchak/">https://www.linkedin.com/in/martinchak/</a>
                </td>
            </tr>
            <tr>
                <td>
                  Email:
                </td>
                <td>
                  <a href="mailto:martin.chak@mail.utoronto.ca">martin.chak@mail.utoronto.ca</a>
                </td>
            </tr>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
