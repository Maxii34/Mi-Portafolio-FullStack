import { Container, Row, Col, Card, Button, Carousel } from "react-bootstrap";
import { CardsProyectosFront } from "../ui/CardsProyectosFront";

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
      stack: "Nodejs Express MongoDB Mongoose JWT Bcrypt",
      stackD: "Node.js Express MongoDB Mongoose JWT Bcrypt",
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
      imagenes: ["/Sintax01.png", "/Sintax02.png", "/Sintax03.png"],
      stackB: "Nodejs Express MongoDB Mongoose JWT Bcrypt",
      stackF: "Reack Bootstrap JavaScript HTML5 CSS3 React Router",
      links: {
        demo: "https://sintaxhotelv2max.netlify.app",
        githubFront: "https://github.com/Maxii34/ModuloN3-Front",
        githubBack: "https://github.com/Maxii34/ModuloN3-Back",
      },
    },
  ];

  return (
    <Container className="py-5" id="proyectos">
      <div>
        <h2 className="section-title mb-5 pt-5">
          Últimos <span className="text-highlight">Proyectos</span>
        </h2>
        <h3 className="category-title mt-5 text-center pb-2 fs-4">
          Proyectos <span className="text-highlight">FullStack</span> (Frontend + Backend)
        </h3>
      </div>
      <Row className="g-4">
        {proyectos.map((p) => (
          <Col lg={4} md={6} key={p.id} className="d-flex">
            <CardsProyectosFront p={p} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
