import React from 'react';
import './App.css';
import Profile from './components/Home/Profile';
import AboutMe from './components/AboutMe/AboutMe';
import Footer from './components/Footer/Footer';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ContactMe from './components/ContactMe/ContactMe';
import Technologies from './components/Technologies/Technologies';
import Projects from './components/Projects/Projects';

function App() {
  return (

    <div className="MainContent h-100">
      <div className='d-flex justify-content-center w-screen container'>
        <Navbar collapseOnSelect expand="lg" bg="#383737" variant="dark">
          <Container>
            <Navbar.Brand href="App.js">Jhonatan Silvério</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#aboutme">Sobre mim</Nav.Link>
                <Nav.Link href="#contact">Contato</Nav.Link>
                <Nav.Link href="#technologies">Tecnologias</Nav.Link>
                <Nav.Link href="#projects">Curriculo</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
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
