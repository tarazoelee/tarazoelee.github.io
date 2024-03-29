import React from 'react';
import './App.css';
import Welcome from './components/Welcome/Welcome';
import Education from './components/Education/Education';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import AboutMe from './components/AboutMe/AboutMe';
import Skills from './components/Skills/Skills';
import WorkExperience from './components/WorkExperience/WorkExperience';
import AdditionalExperience from './components/AdditionalExperience/AdditionalExperience';
import Spotify from './components/Spotify/Spotify';
import Navbar from './components/NavBar/Navbar';

function App() {


  return (
    <div className='whole'>
      <Navbar></Navbar>
      <Fade top>
        <Welcome></Welcome>
      </Fade>
       <Fade bottom>
        <WorkExperience></WorkExperience>
       </Fade>
       <Fade >
        <AdditionalExperience ></AdditionalExperience>
       </Fade>
       <div className='ed-about' id='education'>
        <div  className='education'>
          <Slide left>
            <Education></Education>
          </Slide>
        </div>
        <div className='skills'>
          <Slide right>
            <Skills></Skills>
          </Slide>
        </div>
       </div>

       <Slide bottom>
          <Spotify></Spotify>
       </Slide>
       <Slide bottom>
          <AboutMe></AboutMe>
       </Slide>
    </div>
  );
}

export default App;
