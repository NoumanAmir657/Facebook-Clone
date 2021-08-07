import './App.css';
import { Navbar, Nav, Container, NavDropdown, Form, FormControl } from 'react-bootstrap';
import { Facebook } from 'react-bootstrap-icons';

const App = () => {
  return(
    <Navbar bg="dark" expand="md" variant='dark'>
      <Navbar.Brand href="#home">
        <Facebook width='2em' height='2em'/>
      </Navbar.Brand>
      
      <Form>
        <FormControl
          type="search"
          placeholder="Search Facebook"
          className="mr-2 rounded-pill"
          aria-label="Search"
        />
      </Form>

      <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
      <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto mx-5">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#watch">Watch</Nav.Link>
      <Nav.Link href="#marketplace">Marketplace</Nav.Link>
      <Nav.Link href="#groups">Groups</Nav.Link>
      </Nav>
      </Navbar.Collapse>

  </Navbar>
  )
}

export default App;
