import { Container, Row, Col } from "react-bootstrap";
import {
  TbBrandGithub,
  TbBrandLinkedin,
  TbBrandInstagram,
  TbMail,
} from "react-icons/tb";
import Swal from "sweetalert2";


export const Footer = () => {
  const anioActual = new Date().getFullYear();

const abrirInstagram = () => {
  window.open("https://www.instagram.com/codemax.dev", "_blank");
};

const abrirLinkedin = () => {
  window.open("https://www.linkedin.com/in/maxiiordo%C3%B1ez/", "_blank");
};

const abrirGitHub = () => {
  window.open("https://github.com/Maxii34", "_blank");
};

  const copiarCorreo = () => {
    navigator.clipboard.writeText("tu-email@gmail.com");

    Swal.fire({
      title: "¡Copiado!",
      text: "Correo copiado al portapapeles",
      icon: "success",
      timer: 1500,
      showConfirmButton: false,
      background: "#1a1a1a",
      color: "#ffffff",
    });
  };

  return (
    <footer className="footer-custom">
      <Container>
        <Row className="text-center justify-content-center">
          <Col md={6}>
            <div className="footer-logo">
              Maxi<span className="text-highlight">.dev</span>
            </div>
            <p className="text-white-50 mt-2">
              Transformando desafíos en soluciones digitales robustas.
            </p>
            <span className="text-white-50 mt-2">Ultima Actualizacion: 21/02/2026</span>

            <div className="footer-divider"></div>

            <div className="d-flex justify-content-center">
              <span
                onClick={abrirGitHub}
                rel="noreferrer"
                className="footer-link-social"
              >
                <TbBrandGithub />
              </span>
              <span
                onClick={abrirLinkedin}
                rel="noreferrer"
                className="footer-link-social"
              >
                <TbBrandLinkedin />
              </span>
              <span
                onClick={abrirInstagram}
                rel="noreferrer"
                className="footer-link-social"
              >
                <TbBrandInstagram />
              </span>
              <span
                onClick={copiarCorreo}
                className="footer-link-social"
                style={{ cursor: "pointer" }}
              >
                <TbMail />
              </span>
            </div>

            <p className="footer-text">
              ©  {anioActual} - Todos los derechos reservados. 
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
