import { Card, Button } from "react-bootstrap";
import { TbBrandGithub, TbExternalLink } from "react-icons/tb";

export const CardsProyectosFront = ({ p }) => {
  return (
    <>
      <Card className="project-card w-100">
        {/* IMAGEN PRINCIPAL DEL PROYECTO */}
        <img
          className="d-block w-100 project-img"
          src={p.imagenes[0]}
          alt={`Captura principal de ${p.titulo}`}
        />

        <Card.Body className="d-flex flex-column">
          <Card.Title className="fw-bold fs-4">{p.titulo}</Card.Title>
          <Card.Subtitle className="mb-3 text-primary">
            {p.subtitulo}
          </Card.Subtitle>

          <Card.Text className="text-white-50 small" style={{ flex: 1 }}>
            {p.descripcion}
          </Card.Text>

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
    </>
  );
};
