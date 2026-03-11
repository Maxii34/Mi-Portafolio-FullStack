import { Col, Container, Row } from "react-bootstrap";
import { ImagenPerfil } from "../ui/ImagenPerfil";
import { Introduccion } from "../ui/Introducion";
import { SectorEducacion } from "./SectorEducacion";

export const Inicio = () => {
  return (
    <Container
      id="sobre-mi"
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ minHeight: "110vh" }}
    >
      <Row className="align-items-center w-100">
        <Col xs={12} md={7}>
          <Introduccion />
        </Col>

        <Col xs={12} md={5}>
          <ImagenPerfil />
        </Col>
      </Row>

      {/* NUEVA FILA */}
      <Row className="w-100 mt-5">
        <Col className="d-flex justify-content-center">
          <SectorEducacion />
        </Col>
      </Row>

      <Row className="w-100 mt-5">
        <Col className="d-flex justify-content-center">
        </Col>
      </Row>
    </Container>
  );
};
