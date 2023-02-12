import React from 'react';
import './App.css';
import Profile from './components/Home/Profile';
import AboutMe from './components/AboutMe/AboutMe';
import Footer from './components/Footer/Footer';


import ContactMe from './components/ContactMe/ContactMe';
import Technologies from './components/Technologies/Technologies';
import Projects from './components/Projects/Projects';
import Header from './components/Header/Header';
 
function App() {
  return (
    <div className="MainContent h-100">
      <Header />
      <div className='d-flex flex-column justify-content-center'>
        <div className='w-100 mb-3'> <Profile/> </div>
        <div id='aboutme' className='w-100'> <AboutMe/> </div>
        <div id='technologies'> <Technologies/> </div>
        <div id='projects' className='w-100 text-center'> <Projects/> </div>
        <div id='contact' className='w-100 text-center '> <ContactMe/> </div>
        <div id='footer' className='w-100'> <Footer/></div>
      </div>
    </div>
  );
}

export default App;
