import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function BarraNavegacion({ isAuthenticated, onLogout }) {
  const [idioma, setIdioma] = useState('Español');

  const cambiarIdioma = (nuevoIdioma) => {
    setIdioma(nuevoIdioma);
    // Aquí puedes agregar lógica para cambiar textos, contexto, etc.
    console.log('Idioma seleccionado:', nuevoIdioma);
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/">🌐 Explorar Colombia</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            {isAuthenticated && <Nav.Link as={Link} to="/panel">Panel</Nav.Link>}
            {!isAuthenticated ? (
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
            ) : (
              <Nav.Link onClick={onLogout}>Logout</Nav.Link>
            )}
            
            

            {/* Selector de idioma */}
            <NavDropdown title={`Idioma: ${idioma}`} id="dropdown-idioma">
              <NavDropdown.Item onClick={() => cambiarIdioma('Español')}>Español</NavDropdown.Item>
              <NavDropdown.Item onClick={() => cambiarIdioma('Inglés')}>Inglés</NavDropdown.Item>
              <NavDropdown.Item onClick={() => cambiarIdioma('Francés')}>Francés</NavDropdown.Item>
            </NavDropdown>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BarraNavegacion;
