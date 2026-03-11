import { Container, Row, Col, Card } from "react-bootstrap";
import { GiAchievement } from "react-icons/gi";
import { motion } from "framer-motion";
import { estudios } from "../estudios";

export const SectorEducacion = () => {
 
    


  return (
    <Container
      className="pt-5  mt-lg-5"
      id="educacion"
      style={{ minHeight: "115vh", scrollMarginTop: "15px" }}
    >
      <motion.h2
        className="section-title pt-5"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.1 }}
      >
        Estudios y <span className="text-highlight">Formación</span>
      </motion.h2>

      <Row className="g-4">
        {estudios.map((estudio, index) => (
          <Col md={6} key={estudio.id} className="d-flex align-items-stretch">
            <motion.div
              style={{ width: "100%", height: "100%" }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: false, amount: 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="education-card p-3 h-100">
                <Card.Body className="d-flex flex-column">
                  <div className="edu-year">
                    <GiAchievement /> {estudio.periodo}
                  </div>
                  <Card.Title className="edu-institution">
                    {estudio.institucion}
                  </Card.Title>
                  <Card.Subtitle className="mb-3 text-white-50">
                    {estudio.titulo}
                  </Card.Subtitle>

                  <Card.Text className="edu-description">
                    {estudio.descripcion}
                  </Card.Text>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};