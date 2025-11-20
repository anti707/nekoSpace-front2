import { Navbar, Nav, Container } from 'react-bootstrap';
import '../../styles/organisms/Navbar.css';

function NavBar({ 
  brand = "NekoSpace", 
  links = [{ href: "/", label: "Inicio" }],
  className = ''
}) {
 return (
  <Navbar bg="dark" variant="dark" expand="lg" className={`custom-navbar ${className}`}>
     <Container>
       <Navbar.Brand href="/">{brand}</Navbar.Brand>
       <Navbar.Toggle aria-controls="basic-navbar-nav" />
       <Navbar.Collapse id="basic-navbar-nav">
         <Nav className="me-auto">
          {links.map((link, index) => (
             <Nav.Link key={index} href={link.href}>
               {link.label}
             </Nav.Link>
           ))}
         </Nav>
       </Navbar.Collapse>
     </Container>
  </Navbar>
 );
}

export default NavBar;