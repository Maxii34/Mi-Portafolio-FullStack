import { useParams, Link } from "react-router";
import { proyectos } from "../proyectos";
import { Container, Row, Col, Carousel, Button } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import {
  TbBrandGithub,
  TbExternalLink,
  TbChevronLeft,
  TbChevronRight,
  TbCode,
} from "react-icons/tb";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiJsonwebtokens,
  SiVite,
  SiReactrouter,
  SiReacthookform,
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiPostgresql,
  SiGithub,
  SiNetlify,
} from "react-icons/si";

// Mapeo detallado de tecnologías con sus iconos y colores de SectorStack
const techConfig = {
  HTML5: { icon: <SiHtml5 />, color: "#E34F26" },
  CSS3: { icon: <SiCss3 />, color: "#1572B6" },
  JavaScript: { icon: <SiJavascript />, color: "#F7DF1E" },
  React: { icon: <SiReact />, color: "#61DAFB" },
  "React.js": { icon: <SiReact />, color: "#61DAFB" },
  "Next.js": { icon: <SiNextdotjs />, color: "#ffffff" },
  Tailwind: { icon: <SiTailwindcss />, color: "#06B6D4" },
  Bootstrap: { icon: <SiBootstrap />, color: "#7952B3" },
  "React-Bootstrap": { icon: <SiBootstrap />, color: "#7952B3" },
  "Node.js": { icon: <SiNodedotjs />, color: "#339933" },
  Nodejs: { icon: <SiNodedotjs />, color: "#339933" },
  Express: { icon: <SiExpress />, color: "#ffffff" },
  MongoDB: { icon: <SiMongodb />, color: "#47A248" },
  Mongoose: { icon: <SiMongoose />, color: "#880000" },
  JWT: { icon: <SiJsonwebtokens />, color: "#ffffff" },
  "JSON Web Token": { icon: <SiJsonwebtokens />, color: "#ffffff" },
  Vite: { icon: <SiVite />, color: "#646CFF" },
  "React Router": { icon: <SiReactrouter />, color: "#CA4245" },
  "React-Router": { icon: <SiReactrouter />, color: "#CA4245" },
  "React-Hook-Form": { icon: <SiReacthookform />, color: "#EC5990" },
  SweetAlert2: { icon: <TbCode />, color: "#f8bb86" },
  PostgreSQL: { icon: <SiPostgresql />, color: "#4169E1" },
  GitHub: { icon: <SiGithub />, color: "#ffffff" },
  TypeScript: { icon: <SiTypescript />, color: "#3178C6" },
  Bcrypt: { icon: <TbCode />, color: "#ffffff" },
  "Bcrypt.js": { icon: <TbCode />, color: "#ffffff" },
  Cors: { icon: <TbCode />, color: "#ffffff" },
  Morgan: { icon: <TbCode />, color: "#ffffff" },
};

export const DetallesProyectos = () => {
  const { id } = useParams();
  // Buscamos directamente por el ID de string
  const currentIndex = proyectos.findIndex((p) => p.id === id);
  const proyecto = proyectos[currentIndex];

  if (!proyecto) {
    return (
      <Container className="py-5 text-center">
        <h2 className="text-white">Proyecto no encontrado</h2>
        <Link to="/tecno" className="btn btn-primary mt-3">
          Volver a proyectos
        </Link>
      </Container>
    );
  }

  // Lógica para navegación circular
  const prevProject =
    proyectos[(currentIndex - 1 + proyectos.length) % proyectos.length];
  const nextProject = proyectos[(currentIndex + 1) % proyectos.length];

  // Lógica para obtener el stack categorizado adaptado a la nueva estructura
  const categorizeStack = (p) => {
    const categories = {
      frontend: [],
      backend: [],
      database: [],
    };

    const processItem = (name, cat) => {
      const cleanItem = name.trim().replace(/[,.-]$/, "");
      if (cleanItem && !categories[cat].some((i) => i.name === cleanItem)) {
        categories[cat].push({
          name: cleanItem,
          ...(techConfig[cleanItem] || {
            icon: <TbCode />,
            color: "#ffffff",
          }),
        });
      }
    };

    // Si el proyecto usa la nueva estructura de objeto
    if (p.stack && typeof p.stack === "object" && !Array.isArray(p.stack)) {
      if (p.stack.frontend)
        p.stack.frontend.forEach((item) => processItem(item, "frontend"));
      if (p.stack.backend)
        p.stack.backend.forEach((item) => processItem(item, "backend"));
      if (p.stack.database)
        p.stack.database.forEach((item) => processItem(item, "database"));
    } else {
      // Fallback para estructura vieja o mixta
      const processOld = (str, cat) => {
        if (!str) return;
        const items = Array.isArray(str) ? str : str.split(/\s+/);
        items.forEach((item) => processItem(item, cat));
      };

      processOld(p.stackF, "frontend");
      processOld(p.stackB, "backend");
      processOld(p.stackD, "database");

      if (p.stack && typeof p.stack === "string") {
        p.stack.split(/\s+/).forEach((item) => {
          const cleanItem = item.trim().replace(/[,.-]$/, "");
          if (/Database|Mongo|SQL|Mongoose/i.test(cleanItem))
            processItem(cleanItem, "database");
          else if (/Node|Express|JWT|Bcrypt|Server|Cors|Morgan/i.test(cleanItem))
            processItem(cleanItem, "backend");
          else processItem(cleanItem, "frontend");
        });
      }
    }

    return categories;
  };

  const stack = categorizeStack(proyecto);

  const TechItem = ({ tech }) => (
    <div className="tech-box-detail-page">
      <span className="tech-icon-detail" style={{ color: tech.color }}>
        {tech.icon}
      </span>
      <span className="tech-name-detail">{tech.name}</span>
    </div>
  );

  return (
    <motion.div
      key={proyecto.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="details-page-wrapper"
    >
      <Container>
        <div className="d-flex flex-wrap justify-content-between align-items-center mb-4 gap-3">
          <Link to="/tecno#proyectos" className="back-btn-custom m-0">
            <TbChevronLeft size={20} /> Volver a Proyectos
          </Link>

          <div className="d-flex gap-2">
            <Link
              to={`/detalles/${prevProject.id}`}
              className="back-btn-custom m-0"
            >
              <TbChevronLeft size={20} /> Anterior
            </Link>
            <Link
              to={`/detalles/${nextProject.id}`}
              className="back-btn-custom m-0"
            >
              Siguiente <TbChevronRight size={20} />
            </Link>
          </div>
        </div>

        <div className="glass-detail-card">
          <Row className="g-5">
            {/* Columna Izquierda: Galería y Stack */}
            <Col lg={7}>
              <motion.div
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Carousel
                  className="carousel-detail mb-4"
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

                {/* Sección de Tecnologías */}
                <motion.div
                  className="mt-5"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <h4 className="text-white mb-4 d-flex align-items-center gap-2">
                    <TbCode className="text-primary" /> Stack del Proyecto
                  </h4>

                  <Row className="g-4">
                    {stack.frontend.length > 0 && (
                      <Col md={12}>
                        <h6 className="text-primary text-uppercase small fw-bold mb-3">
                          Frontend
                        </h6>
                        <div className="d-flex flex-wrap gap-3">
                          {stack.frontend.map((t, i) => (
                            <TechItem key={i} tech={t} />
                          ))}
                        </div>
                      </Col>
                    )}

                    {stack.backend.length > 0 && (
                      <Col md={12}>
                        <h6 className="text-primary text-uppercase small fw-bold mb-3">
                          Backend
                        </h6>
                        <div className="d-flex flex-wrap gap-3">
                          {stack.backend.map((t, i) => (
                            <TechItem key={i} tech={t} />
                          ))}
                        </div>
                      </Col>
                    )}

                    {stack.database.length > 0 && (
                      <Col md={12}>
                        <h6 className="text-primary text-uppercase small fw-bold mb-3">
                          Base de Datos
                        </h6>
                        <div className="d-flex flex-wrap gap-3">
                          {stack.database.map((t, i) => (
                            <TechItem key={i} tech={t} />
                          ))}
                        </div>
                      </Col>
                    )}
                  </Row>
                </motion.div>
              </motion.div>
            </Col>

            {/* Columna Derecha: Información y Botones */}
            <Col lg={5}>
              <motion.div
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <h1 className="project-detail-title">{proyecto.titulo}</h1>
                <h4 className="text-highlight mb-4">{proyecto.subtitulo}</h4>

                <div className="mb-5">
                  <h5 className="text-white mb-3">Descripción</h5>
                  <p className="text-white-50 leading-relaxed fs-5">
                    {proyecto.descripcion}
                  </p>
                </div>

                {/* Botones de Acción */}
                <div className="d-grid gap-3 mt-auto">
                  {proyecto.links.demo && (
                    <Button
                      href={proyecto.links.demo}
                      target="_blank"
                      variant="primary"
                      className="btn-p-demo py-3 shadow-lg fs-5"
                    >
                      <TbExternalLink size={22} className="me-2" /> Ver Demo en
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
