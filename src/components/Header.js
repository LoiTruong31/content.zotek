import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.scss';
const Header = (props) => {
  return (
    <Navbar expand="lg" className="test" >
      <Container >
        <Navbar.Brand href="#home">
          <img width="55" height="55" src="https://zotek8.com/wp-content/uploads/2023/07/Zotek8_logo_no-slogan_8.png" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#">TimeSheet</Nav.Link>
            <Nav.Link href="#link">Device</Nav.Link>
            <Nav.Link href="#link">Asset</Nav.Link>
            <Nav.Link href="#link">Assessment</Nav.Link>
            <Nav.Link href="#link">Staff</Nav.Link>
            <Nav.Link href="#link">Calendar</Nav.Link>
            <Nav.Link href="#link">Helpdesk</Nav.Link>
            <Nav.Link href="#link">MTool</Nav.Link>
            <Nav.Link href="#link">Feedback</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;