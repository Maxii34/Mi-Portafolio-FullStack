import { useParams, Link } from "react-router";
import { proyectos } from "../proyectos";
import { Container, Row, Col, Carousel, Badge, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import {
  TbBrandGithub,
  TbExternalLink,
  TbChevronLeft,
  TbCode,
  TbServer,
  TbLayout,
} from "react-icons/tb";

export const DetallesProyectos = () => {
  const { id } = useParams();
  // Convertimos id a número para que coincida con la data en proyectos.js
  const proyecto = proyectos.find((p) => p.id === Number(id));

  if (!proyecto) {
    return (
      <Container className="py-5 text-center">
        <h2 className="text-white">Proyecto no encontrado</h2>
        <Link to="/tecno" id="proyectos" className="btn btn-primary mt-3">
          Volver a proyectos
        </Link>
      </Container>
    );
  }

  // Función para normalizar y obtener el stack tecnológico
  const getStack = (p) => {
    let combined = [];
    if (Array.isArray(p.stack)) combined = [...combined, ...p.stack];
    else if (typeof p.stack === "string")
      combined = [...combined, ...p.stack.split(" ")];

    if (p.stackB) combined = [...combined, ...p.stackB.split(" ")];
    if (p.stackF) combined = [...combined, ...p.stackF.split(" ")];
    if (p.stackD) combined = [...combined, ...p.stackD.split(" ")];
    if (p.stack && typeof p.stack === "string")
      combined = [...combined, ...p.stack.split(" ")];

    return [...new Set(combined.filter((s) => s && s.trim() !== ""))];
  };

  const techStack = getStack(proyecto);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="details-page-wrapper"
    >
      <Container>
        <Link to="/tecno#proyectos" className="back-btn-custom">
          <TbChevronLeft size={20} /> Volver a Proyectos
        </Link>

        <div className="glass-detail-card">
          <Row className="g-5">
            {/* Galería de Imágenes */}
            <Col lg={7}>
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Carousel
                  className="carousel-detail"
                  indicators={proyecto.imagenes.length > 1}
                >
                  {proyecto.imagenes.map((img, idx) => (
                    <Carousel.Item key={idx}>
                      <img
                        className="d-block w-100"
                        src={img}
                        alt={`${proyecto.titulo} slide ${idx}`}
                        onError={(e) => {
                          e.target.src = "/img/SinImagen.png";
                        }}
                      />
                    </Carousel.Item>
                  ))}
                </Carousel>
              </motion.div>
            </Col>

            {/* Información del Proyecto */}
            <Col lg={5}>
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <h1 className="project-detail-title">{proyecto.titulo}</h1>
                <h4 className="text-highlight mb-4">{proyecto.subtitulo}</h4>

                <div className="mb-4">
                  <h5 className="text-white d-flex align-items-center gap-2">
                    <TbCode className="text-primary" /> Sobre el Proyecto
                  </h5>
                  <p className="text-white-50 leading-relaxed">
                    {proyecto.descripcion}
                  </p>
                </div>

                {/* Tecnologías */}
                <div className="mb-5">
                  <h5 className="text-white mb-3">Tecnologías Utilizadas</h5>
                  <div className="d-flex flex-wrap gap-2">
                    {techStack.map((tech, i) => (
                      <span key={i} className="tech-badge-detail">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Botones de Acción */}
                <div className="d-grid gap-3">
                  {proyecto.links.demo && (
                    <Button
                      href={proyecto.links.demo}
                      target="_blank"
                      variant="primary"
                      className="btn-p-demo py-2 shadow-lg"
                    >
                      <TbExternalLink size={20} className="me-2" /> Ver Demo en
                      Vivo
                    </Button>
                  )}
                  <div className="d-flex gap-2">
                    {proyecto.links.githubFront && (
                      <Button
                        href={proyecto.links.githubFront}
                        target="_blank"
                        variant="outline-light"
                        className="btn-p-front flex-fill py-2"
                      >
                        <TbBrandGithub size={20} className="me-2" /> Frontend
                      </Button>
                    )}
                    {proyecto.links.githubBack && (
                      <Button
                        href={proyecto.links.githubBack}
                        target="_blank"
                        variant="outline-light"
                        className="btn-p-front flex-fill py-2"
                      >
                        <TbBrandGithub size={20} className="me-2" /> Backend
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            </Col>
          </Row>
        </div>
      </Container>
    </motion.div>
  );
};
