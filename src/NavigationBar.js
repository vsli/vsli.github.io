import { Navbar, Nav, Container } from 'react-bootstrap'
import './NavigationBar.css'

function NavigationBar() {
  return (
    <Navbar sticky="top" bg="dark" variant="dark">
      <Navbar.Brand href="#">Jiawei</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#reel">Reel</Nav.Link>
          <Nav.Link href="#about">About Me</Nav.Link>
          <Nav.Link href="#contact">Contact Me</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
