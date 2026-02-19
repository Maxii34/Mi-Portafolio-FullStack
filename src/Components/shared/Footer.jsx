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

            <div className="footer-divider"></div>

            <div className="d-flex justify-content-center">
              <a
                href="https://github.com/Maxii34"
                target="_blank"
                rel="noreferrer"
                className="footer-link-social"
              >
                <TbBrandGithub />
              </a>
              <a
                href="https://linkedin.com/in/tu-usuario"
                target="_blank"
                rel="noreferrer"
                className="footer-link-social"
              >
                <TbBrandLinkedin />
              </a>
              <a
                href="https://instagram.com/tu-usuario"
                target="_blank"
                rel="noreferrer"
                className="footer-link-social"
              >
                <TbBrandInstagram />
              </a>
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
