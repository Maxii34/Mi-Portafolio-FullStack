import { Container, Row, Col, Card, Button, Carousel } from "react-bootstrap";
import { TbBrandGithub, TbExternalLink } from "react-icons/tb";

export const SectorProyectos = () => {
  const proyectos = [
    {
      id: 1,
      titulo: "Dogtor Veterinaria",
      subtitulo: "Plataforma de Gestión Integral",
      descripcion:
        "Solución Full Stack para administrar pacientes y citas de manera eficiente, integrando sistemas de autenticación robustos.",
      // Agregamos las rutas de tus imágenes aquí
      imagenes: ["dogtor1.jpg", "dogtor2.jpg", "dogtor3.jpg"],
      stack: ["React.js", "Node.js", "Express", "MongoDB", "JWT", "Bcrypt"],
      links: {
        demo: "https://tu-demo.com",
        githubFront: "https://github.com/Maxii34",
        githubBack: "https://github.com/Maxii34",
      },
    },
    {
      id: 2,
      titulo: "Force Gim",
      subtitulo: "Sistema de gestión para gimnasios",
      descripcion:
        "Backend enfocado en la lógica de negocio, automatización de pagos, renovaciones y control de accesos mediante tokens.",
      imagenes: ["force1.jpg", "force2.jpg"],
      stack: ["Node.js", "Express", "MongoDB", "Mongoose", "JWT", "Bcrypt"],
      links: {
        githubBack: "https://github.com/Maxii34",
      },
    },
    {
      id: 3,
      titulo: "Sintax Hotel",
      subtitulo: "Plataforma de Gestión Hotelera",
      descripcion:
        "Sistema completo desarrollado en equipo para administrar reservas, habitaciones, clientes y servicios de forma eficiente.",
      imagenes: ["hotel1.jpg", "hotel2.jpg", "hotel3.jpg"],
      stack: ["React.js", "Node.js", "Express", "MongoDB", "JWT", "Bcrypt"],
      links: {
        demo: "https://tu-demo.com",
        githubFront: "https://github.com/Maxii34",
        githubBack: "https://github.com/Maxii34",
      },
    },
  ];

  return (
    <Container className="py-5" id="proyectos">
      <h2 className="section-title mb-5">
        Últimos <span className="text-highlight">Proyectos</span>
      </h2>
      <Row className="g-4">
        {proyectos.map((p) => (
          <Col lg={4} md={6} key={p.id} className="d-flex">
            <Card className="project-card w-100">
              {/* CAROUSEL INTEGRADO */}
              <Carousel
                interval={null}
                indicators={true}
                className="project-carousel"
              >
                {p.imagenes.map((img, index) => (
                  <Carousel.Item key={index}>
                    <img
                      className="d-block w-100 project-img"
                      src={img}
                      alt={`Captura ${index + 1} de ${p.titulo}`}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>

              <Card.Body className="d-flex flex-column">
                <Card.Title className="fw-bold fs-4">{p.titulo}</Card.Title>
                <Card.Subtitle className="mb-3 text-primary">
                  {p.subtitulo}
                </Card.Subtitle>

                <Card.Text className="text-white-50 small" style={{ flex: 1 }}>
                  {p.descripcion}
                </Card.Text>

                <div className="project-stack mb-4">
                  {p.stack.map((tech, i) => (
                    <span key={i} className="stack-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="d-flex flex-wrap gap-2 mt-auto">
                  {p.links.demo && (
                    <Button
                      href={p.links.demo}
                      target="_blank"
                      variant="primary"
                      className="btn-project"
                    >
                      <TbExternalLink /> Demo
                    </Button>
                  )}
                  {p.links.githubFront && (
                    <Button
                      href={p.links.githubFront}
                      target="_blank"
                      variant="outline-light"
                      className="btn-project"
                    >
                      <TbBrandGithub /> Front
                    </Button>
                  )}
                  {p.links.githubBack && (
                    <Button
                      href={p.links.githubBack}
                      target="_blank"
                      variant="outline-light"
                      className="btn-project"
                    >
                      <TbBrandGithub /> Back
                    </Button>
                  )}
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
