import { Col, Container, Row } from "react-bootstrap";


export const Inicio = () => {
    return (
        <div>
            <h1 className="text-center">Inicio</h1>
            <div>
                <Row>
                    <Col xs={6} md={4} >
                        <p>Contenido de la columna 1</p>
                    </Col>
                    <Col xs={6} md={4} >
                        <p>Contenido de la columna 2</p>
                    </Col>
                </Row>
            </div>
        </div>
    );
};