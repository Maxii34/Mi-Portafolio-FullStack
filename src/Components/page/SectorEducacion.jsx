import { Container, Row, Col, Card } from "react-bootstrap";

export const SectorEducacion = () => {
  const estudios = [
    {
      id: 1,
      institucion: "RollingCode School",
      titulo: "Desarrollador Full Stack MERN",
      periodo: "2025",
      descripcion: "Formación integral en el stack MERN.",
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
      descripcion: "Profundización en tecnologías de backend y arquitectura.",
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
    <Container className="pt-5  mt-lg-5" id="educacion" style={{ minHeight: '115vh', scrollMarginTop: '15px'  }}>
      <h2 className="section-title pt-5">
        Estudios y <span className="text-highlight">Formación</span>
      </h2>

      <Row className="g-4">
        {estudios.map((estudio) => (
          <Col md={6} key={estudio.id} className="d-flex align-items-stretch">
            <Card className="education-card p-3 h-auto">
              <Card.Body className="d-flex flex-column">
                <div className="edu-year">{estudio.periodo}</div>
                <Card.Title className="edu-institution">
                  {estudio.institucion}
                </Card.Title>
                <Card.Subtitle className="mb-3 text-white-50">
                  {estudio.titulo}
                </Card.Subtitle>

                <Card.Text className="edu-description">
                  {estudio.descripcion}
                </Card.Text>

                <div className="mt-auto pt-3 border-top border-secondary">
                  <p className="small fw-bold text-uppercase mb-2 text-primary">
                    Competencias Técnicas:
                  </p>
                  {estudio.competencias.map((comp, i) => (
                    <div
                      key={i}
                      className="mb-1"
                      style={{ fontSize: "0.85rem" }}
                    >
                      <span className="text-white-50 fw-bold">
                        {comp.label}:{" "}
                      </span>
                      <span className="text-light">{comp.items}</span>
                    </div>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
