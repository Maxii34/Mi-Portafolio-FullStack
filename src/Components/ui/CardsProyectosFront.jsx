import { Card, Button } from "react-bootstrap";
import { TbBrandGithub, TbExternalLink } from "react-icons/tb";

export const CardsProyectosFront = ({ p }) => {
  return (
    <>
      <Card className="project-card w-100 h-100">
        {/* IMAGEN PRINCIPAL DEL PROYECTO */}
        <div className="project-img-container">
          <img
            className="d-block w-100 project-img"
            src={p.imagenes[0]}
            alt={`Captura principal de ${p.titulo}`}
          />
        </div>

        <Card.Body className="d-flex flex-column p-4">
          <Card.Title className="fw-bold fs-4 text-white">{p.titulo}</Card.Title>
          <Card.Subtitle className="mb-3 text-primary">
            {p.subtitulo}
          </Card.Subtitle>

          <Card.Text className="text-white-50 small project-description">
            {p.descripcion}
          </Card.Text>

          <Card.Footer className="bg-transparent border-0 p-0 mt-auto">
            <div className="d-flex flex-wrap gap-2">
              {p.links.githubFront && (
                <Button
                  href={p.links.githubFront}
                  target="_blank"
                  variant="outline-light"
                  className="btn-p-front flex-fill"
                >
                  <TbBrandGithub /> Frontend
                </Button>
              )}

              {p.links.githubBack && (
                <Button
                  href={p.links.githubBack}
                  target="_blank"
                  variant="outline-light"
                  className="btn-p-front flex-fill"
                >
                  <TbBrandGithub /> Backend
                </Button>
              )}

              {p.links.demo && (
                <Button
                  href={p.links.demo}
                  target="_blank"
                  variant="primary"
                  className="btn-p-demo flex-fill"
                >
                  <TbExternalLink /> Ver Demo en linea
                </Button>
              )}
            </div>
          </Card.Footer>
        </Card.Body>
      </Card>
    </>
  );
};
