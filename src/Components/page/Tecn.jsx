import { Col, Container, Row } from "react-bootstrap";
import { SectorProyectos } from "./SectorProyectos";
import { SectorStack } from "./SectorStack";

export const Tecn = () => {
  return (
    <>
      <Container
        id="sobre-mi"
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <Row className="w-100">
          <Col className="d-flex justify-content-center">
            <SectorProyectos />
          </Col>
        </Row>
        <Row className="w-100 mt-5">
          <Col className="d-flex justify-content-center">
            <SectorStack />
          </Col>
        </Row>
      </Container>
    </>
  );
};
