import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Header() {
  return (
    <div className="d-flex justify-content-center w-screen container">
      <Navbar collapseOnSelect expand="lg" bg="#080808" variant="dark">
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
  );
}
