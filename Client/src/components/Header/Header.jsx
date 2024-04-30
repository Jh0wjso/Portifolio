import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BsDownload } from "react-icons/bs";
import "./Header.css";

export default function Header() {
  return (
    <div className="d-flex w-screen container justify-content-between w-100 p-4">
      <h1>Jhonatan</h1>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="#080808"
        variant="dark"
      >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#aboutme">About me</Nav.Link>
            <Nav.Link href="#technologies">Technologies</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <a
        href="Curriculo.pdf"
        download="Jhonatan Silverio.pdf"
        className="buttonLink"
      >
        Resume
        <BsDownload className="ml-2" />
      </a>
    </div>
  );
}
