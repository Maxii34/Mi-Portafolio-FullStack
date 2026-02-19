import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const Menu = () => {
  return (
    <Navbar 
      expand="lg" 
      variant="dark" 
      style={{ 
        backgroundColor: "#0a0a0a", // Negro profundo
        borderBottom: "2px solid #007bff", // Línea azul sutil
        padding: "1rem 0"
      }}
      sticky="top"
    >
      <Container>
        {/* Tu nombre o logo a la izquierda */}
        <Navbar.Brand href="#home" style={{ fontWeight: 'bold', color: '#007bff' }}>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          {/* mx-auto centra el contenido horizontalmente */}
          <Nav className="mx-auto my-2 my-lg-0 font-weight-bold">
            <Nav.Link href="#sobre-mi" className="px-3 fs-5">Sobre Mí</Nav.Link>
            <Nav.Link href="#educacion" className="px-3 fs-5">Educación</Nav.Link>
            <Nav.Link href="#proyectos" className="px-3 fs-5">Proyectos</Nav.Link>
            <Nav.Link href="#habilidades" className="px-3 fs-5">Habilidades</Nav.Link>
          </Nav>

          {/* Espaciador para que el logo no se vea desplazado si quieres simetría perfecta */}
          <div className="d-none d-lg-block" style={{ width: '100px' }}></div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};