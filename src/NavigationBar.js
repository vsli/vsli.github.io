import { Navbar, Nav, Container } from 'react-bootstrap';
import './NavigationBar.css';
import logo from './film_icon.jpg';

function NavigationBar() {
  return (
    <Navbar variant="light" expand="lg">
      <Navbar.Brand href="#">
        <a>
          <img src={logo} width="64px" height="64px"></img>Jiawei Li
        </a>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
