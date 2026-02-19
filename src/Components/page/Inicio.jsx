import { Col, Container, Row } from "react-bootstrap";
import { ImagenPerfil } from "../ui/ImagenPerfil";
import { Introduccion } from "../ui/Introducion";

export const Inicio = () => {
    return (
        <Container id="sobre-mi" className="d-flex justify-content-center align-items-center py-5 mt-lg-5" style={{ minHeight: '80vh' }}>
            <Row className="align-items-center w-100">
                <Col xs={12} md={7}>
                    <Introduccion />
                </Col>
                <Col xs={12} md={5}>
                    <ImagenPerfil />
                </Col>
            </Row>
        </Container>
    );
};