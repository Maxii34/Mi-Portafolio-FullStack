import { Container, Row, Col, Carousel } from "react-bootstrap";
import { CardsProyectosFront } from "../ui/CardsProyectosFront";
import { proyectos } from "../proyectos";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const SectorProyectos = () => {
  const [itemsPorSlide, setItemsPorSlide] = useState(3);

  const agruparProyectos = (arr, tamaño) => {
    const grupos = [];
    for (let i = 0; i < arr.length; i += tamaño) {
      grupos.push(arr.slice(i, i + tamaño));
    }
    return grupos;
  };

  useEffect(() => {
    const revisarAnchoPantalla = () => {
      if (window.innerWidth < 768) {
        setItemsPorSlide(1);
      } else {
        setItemsPorSlide(3);
      }
    };

    revisarAnchoPantalla();
    window.addEventListener("resize", revisarAnchoPantalla);

    return () => window.removeEventListener("resize", revisarAnchoPantalla);
  }, []);

  const proyectosAgrupados = agruparProyectos(proyectos, itemsPorSlide);

  return (
    <Container className="py-5" id="proyectos">
      <div>
        <motion.h2
          className="section-title pt-5"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          Últimos <span className="text-highlight">Proyectos</span>
        </motion.h2>
      </div>

      <Carousel className="pb-5" indicators={true} interval={null}>
        {proyectosAgrupados.map((grupo, index) => (
          <Carousel.Item key={index} style={{ overflow: "visible" }}>
            <Row
              className="g-4 justify-content-center px-5"
              style={{ overflow: "visible", paddingTop: "20px" }}
            >
              {grupo.map((p, i) => (
                <Col
                  xs={12}
                  md={6}
                  lg={4}
                  key={p.id}
                  className="d-flex justify-content-center"
                  style={{ overflow: "visible" }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.15 }}
                    viewport={{ once: false, amount: 0.3 }}
                  >
                    <CardsProyectosFront p={p} />
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};