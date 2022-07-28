import './App.css';
import Profile from './components/Home/Profile';
import AboutMe from './components/AboutMe/AboutMe';
import Footer from './components/Footer/Footer';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

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
                <Nav.Link href="#profile">Sobre mim</Nav.Link>
                <Nav.Link href="#pricing">Contato</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="#deets">Curriculo</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                  Projetos
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div className='w-100'><Profile/></div>
      <div id='profile' className='w-100'><AboutMe/></div>
      <div id='footer'><Footer/></div>
    </div>
  );
}

export default App;
