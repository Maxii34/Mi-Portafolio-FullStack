import { Container, Row, Col, Form, Button } from "react-bootstrap";

export const SectorContacto = () => {
  return (
    <Container 
      id="contacto" 
      className="d-flex flex-column justify-content-center pt-5 mt-lg-5" 
      style={{ 
        minHeight: '100vh', 
        scrollMarginTop: '20px' 
      }}
    >
      <h2 className="section-title pb-4 text-center">
        Trabajemos <span className="text-highlight">Juntos</span>
      </h2>
      
      <Row className="justify-content-center">
        <Col lg={8}>
          <div className="contact-container">
            <Form action="https://formsubmit.co/TU-CORREO-AQUI@gmail.com" method="POST">
              <Row>
                <Col md={6} className="mb-3">
                  <Form.Group>
                    <Form.Label className="text-white-50 small">Nombre</Form.Label>
                    <Form.Control type="text" name="name" className="contact-input" required />
                  </Form.Group>
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Group>
                    <Form.Label className="text-white-50 small">Correo Electrónico</Form.Label>
                    <Form.Control type="email" name="email" className="contact-input" required />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-4">
                <Form.Label className="text-white-50 small">Mensaje</Form.Label>
                <Form.Control as="textarea" name="message" rows={4} className="contact-input" required />
              </Form.Group>
              <div className="text-center">
                <Button type="submit" className="btn-send">
                  Enviar Mensaje
                </Button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};