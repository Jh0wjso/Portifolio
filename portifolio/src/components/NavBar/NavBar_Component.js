import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar_Component() {
  return (
    <div className='d-flex justify-content-center w-screen'>
      <Navbar collapseOnSelect expand="lg" bg="#383737" variant="dark">
        <Container>
          <Navbar.Brand href="App.js">Jhonatan Silvério</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Sobre mim</Nav.Link>
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
  );
}

export default NavBar_Component;