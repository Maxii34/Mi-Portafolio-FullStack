import { Container, Row, Col, Carousel } from "react-bootstrap";
import { CardsProyectosFront } from "../ui/CardsProyectosFront";
import { proyectos } from "../proyectos";
import { useEffect, useState } from "react";

export const SectorProyectos = () => {
  // 1. Creamos un estado para la cantidad de items por slide (por defecto 3)
  const [itemsPorSlide, setItemsPorSlide] = useState(3);

  // Tu función original intacta
  const agruparProyectos = (arr, tamaño) => {
    const grupos = [];
    for (let i = 0; i < arr.length; i += tamaño) {
      grupos.push(arr.slice(i, i + tamaño));
    }
    return grupos;
  };

  // 2. Usamos useEffect para detectar el tamaño de la pantalla
  useEffect(() => {
    const revisarAnchoPantalla = () => {
      // Si la pantalla es menor a 768px (celulares), agrupamos de a 1.
      // Si es mayor (tablets/PC), agrupamos de a 3.
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

  // 3. CORRECCIÓN AQUÍ: Cambiamos 'listaDeProyectos' por 'proyectos'
  const proyectosAgrupados = agruparProyectos(proyectos, itemsPorSlide);

  return (
    <Container className="py-5" id="proyectos">
      <div>
        <h2 className="section-title pt-5">
          Últimos <span className="text-highlight">Proyectos</span>
        </h2>
      </div>

      <Carousel className="pb-5" indicators={true} interval={null}>
        {proyectosAgrupados.map((grupo, index) => (
          <Carousel.Item key={index} style={{ overflow: "visible" }}>
            <Row
              className="g-4 justify-content-center px-5"
              style={{ overflow: "visible", paddingTop: "20px" }}
            >
              {grupo.map((p) => (
                <Col
                  xs={12}
                  md={6}
                  lg={4}
                  key={p.id}
                  className="d-flex justify-content-center"
                  style={{ overflow: "visible" }}
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
