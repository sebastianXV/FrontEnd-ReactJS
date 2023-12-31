import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './header.css'
import Account from './account';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='custom-header'>
      <Container>
        <Navbar expand="lg" >
          <Container fluid>
            <Link to="/">
              <img
                src="img/logo.png"
                width="150px"
                height="autopx"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Link>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll" className='mx-3'>
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link href="#action1" className="text-white hv">Generos</Nav.Link>
                <Nav.Link href="#action2" className="text-white hv">Series</Nav.Link>
                <Nav.Link href="#action3" className="text-white hv">Peliculas</Nav.Link>
              </Nav>
              <Form className="d-flex ">
                <Form.Control
                  type="search"
                  placeholder=""
                  className="me-2 form_search"
                  aria-label="Search"
                />
                <Button className='custom-button'>Buscar</Button>
              </Form>

            </Navbar.Collapse>
            <Account></Account>
          </Container>
        </Navbar>
      </Container >
    </div>
  );
}

export default Header;