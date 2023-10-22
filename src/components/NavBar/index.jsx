import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// import NavDropdown from 'react-bootstrap/NavDropdown'; no lo necesito
//debo importar navlink yo mismo:
import { NavLink } from 'react-router-dom';//esto es lo que reemplaza el href en react
import './index.css'; // Importa tu archivo CSS


function NavBarComponent() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" >
    <Container className='header'>
      <Navbar.Brand href="#home">Sitio web Julián Castaño</Navbar.Brand>
      {/* <img src={st} className='st' /> */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          {/* <Nav.Link href="#home">Dahboard</Nav.Link> */}
          
          <NavLink to="/pagina_personal/inicio" className="nav-link">INICIO</NavLink>
          <NavLink to="/pagina_personal/portafolio" className="nav-link">PORTAFOLIO</NavLink>
          <NavLink to="/pagina_personal/habilidades" className="nav-link">HABILIDADES</NavLink>
          <NavLink to="/pagina_personal/trayectoria" className="nav-link">CURRICULO</NavLink>
          <NavLink to="/pagina_personal/contacto" className="nav-link">CONTACTO</NavLink>

          {/* <NavLink to="/dashboard" className="nav-link">Dashboard</NavLink> esto para hacer la navegacion interna entre rutas */}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default NavBarComponent;//exporto el NavBarcomponent