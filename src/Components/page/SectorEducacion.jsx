import { Container, Row, Col, Card } from "react-bootstrap";
import { GiAchievement } from "react-icons/gi";
import { motion } from "framer-motion";

export const SectorEducacion = () => {
  const estudios = [
    {
      id: 1,
      institucion: "RollingCode School",
      titulo: "Desarrollador Full Stack MERN",
      periodo: "[02/25 - 12/25] - Finalizado",
      descripcion:
        "Formación Full Stack MERN enfocada en el desarrollo de aplicaciones web completas. Creación de APIs REST con autenticación JWT, encriptación con Bcrypt y modelado de datos en MongoDB. Desarrollo frontend con React y trabajo colaborativo con Git bajo metodologías ágiles.",
      competencias: [
        {
          label: "FRONTEND",
          items: "HTML, CSS, JavaScript, React, Tailwind CSS, Bootstrap",
        },
        {
          label: "BACKEND",
          items: "NodeJS, Express, Express Validator, Bcrypt, JWT",
        },
        { label: "Bases de Datos", items: "MongoDB, Mongoose" },
        {
          label: "Herramientas",
          items: "VS Code, Taiga, Git & GitHub, Slack, Postman",
        },
      ],
    },
    {
      id: 2,
      institucion: "RollingCode School - Ready to code",
      titulo: "Bootcamp de Especialización",
      periodo: "2026 (En Curso)",
      descripcion:
        "Bootcamp de especialización enfocado en backend avanzado y arquitectura. Profundización en bases de datos SQL con Prisma, control de versiones avanzado, contenedores con Docker, diseño RESTful, debugging y fortalecimiento de la lógica de programación.",
      competencias: [
        { label: "Módulo 1", items: "SQL & Prisma" },
        { label: "Módulo 2", items: "Git & GitHub Avanzado" },
        { label: "Módulo 3", items: "Docker & Compose" },
        { label: "Módulo 4", items: "Arquitectura RESTful" },
        { label: "Módulo 5", items: "Debugging" },
        { label: "Módulo 6", items: "Logica de programacion" },
      ],
    },
  ];

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