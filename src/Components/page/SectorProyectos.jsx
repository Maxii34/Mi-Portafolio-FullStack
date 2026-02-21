import { Container, Row, Col, Card, Button, Carousel } from "react-bootstrap";
import { CardsProyectosFront } from "../ui/CardsProyectosFront";
import { proyectos } from "../proyectos";

export const SectorProyectos = () => {
  // Agrupa los proyectos en arrays de 3 elementos
  const agruparProyectos = (arr, tamaño) => {
    const grupos = [];
    for (let i = 0; i < arr.length; i += tamaño) {
      grupos.push(arr.slice(i, i + tamaño));
    }
    return grupos;
  };

  const proyectosAgrupados = agruparProyectos(proyectos, 3);
  return (
    <Container className="py-5" id="proyectos">
      <div>
        <h2 className="section-title mb-5 pt-5">
          Últimos <span className="text-highlight">Proyectos</span>
        </h2>
      </div>

      <Carousel className="pb-5" indicators={true}>
        {proyectosAgrupados.map((grupo, index) => (
          <Carousel.Item key={index}>
            {/* Aquí vuelve tu Row para mantener la estructura de 3 columnas */}
            <Row className="g-4 justify-content-center px-5">
              {grupo.map((p) => (
                <Col
                  lg={4}
                  md={6}
                  key={p.id}
                  className="d-flex justify-content-center"
                >
                  <CardsProyectosFront p={p} />
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};
