import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router";
import { MdDownloading } from "react-icons/md";

export const Menu = () => {
  const redirecion = useNavigate();

  const irahome = () => {
    redirecion("/");
  };
  const iratecno = () => {
    redirecion("/tecno");
  };
  const iracontacto = () => {
    redirecion("/contacto");
  };

  const abrirInstagram = () => {
    window.open("https://www.instagram.com/codemax.dev", "_blank");
  };

  const abrirLinkedin = () => {
    window.open("https://www.linkedin.com/in/maxiiordo%C3%B1ez/", "_blank");
  };

  const abrirGitHub = () => {
    window.open("https://github.com/Maxii34", "_blank");
  };

  return (
    <Navbar
      expand="lg"
      variant="dark"
      style={{
        backgroundColor: "#0a0a0a",
        borderBottom: "2px solid #007bff",
        padding: "1rem 0",
      }}
      sticky="top"
    >
      <Container>
        <Navbar.Brand
          href="#home"
          style={{ fontWeight: "bold", color: "#007bff" }}
        ></Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          <Nav className="mx-auto my-2 my-lg-0 font-weight-bold">
            <Nav.Link
              onClick={irahome}
              href="#sobre-mi"
              className="px-3 fs-5 menu-divider"
            >
              Sobre Mí
            </Nav.Link>
            <Nav.Link onClick={irahome} href="#educacion" className="px-3 fs-5">
              Educación
            </Nav.Link>
            <Nav.Link
              onClick={iratecno}
              href="#proyectos"
              className="px-3 fs-5"
            >
              Proyectos
            </Nav.Link>
            <Nav.Link
              onClick={iratecno}
              href="#habilidades"
              className="px-3 fs-5"
            >
              Habilidades
            </Nav.Link>
            <Nav.Link
              onClick={iracontacto}
              href="#contacto"
              className="px-3 fs-5"
            >
              Contacto
            </Nav.Link>
          </Nav>

          {/* Redes sociales */}
          <div className="d-flex align-items-center gap-3 text-white fs-5">
            <button onClick={abrirInstagram} className="button instagram">
              <svg viewBox="0 0 24 24" fill="none" height="24" width="24">
                <path
                  clip-rule="evenodd"
                  d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                />
                |
              </svg>
            </button>

            <button onClick={abrirLinkedin} className="button linkedin">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                height="24"
                width="24"
              >
                <path d="M6.94 6.5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0zM3.5 8.75h3V20h-3V8.75zM9 8.75h2.88v1.54h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59V20h-3v-5.16c0-1.23-.02-2.8-1.71-2.8-1.71 0-1.97 1.34-1.97 2.72V20H9V8.75z" />
              </svg>
            </button>

            <button onClick={abrirGitHub} className="button github">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                height="24"
                width="24"
              >
                <path
                  clip-rule="evenodd"
                  d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                  fill-rule="evenodd"
                />
              </svg>
            </button>

            <div className="">
              <Button
                as="a"
                href="/CV-Maximiliano_Ordoñez.pdf"
                download="CV_Maximiliano_Ordoñez.pdf"
                variant="primary"
                className="btn-custom btn-cv"
              >
                <MdDownloading className="fs-4" /> CV
              </Button>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
