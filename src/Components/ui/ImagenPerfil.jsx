import { Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";

export const ImagenPerfil = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center h-100 py-5">
      {/* TU IMAGEN (Sin cambios en estilo, solo agregué margen abajo) */}
      <div
        style={{
          position: "relative",
          padding: "10px",
          borderRadius: "50%",
          background: "linear-gradient(45deg, #007bff, transparent)",
          boxShadow: "0 0 30px rgba(0, 123, 255, 0.4)",
          marginBottom: "2rem",
        }}
      >
        <Image
          src="compressed-Maxi.jpeg"
          roundedCircle
          style={{
            width: "300px",
            height: "300px",
            objectFit: "cover",
            border: "4px solid #0a0a0a",
          }}
          alt="Foto de perfil"
        />
      </div>

      {/* LO NUEVO: Botones */}
      <div className="d-flex gap-3">
        <Button
          href="https://github.com/Maxii34"
          target="_blank"
          variant="outline-primary"
          style={{ borderRadius: "20px" }}
        >
          GitHub
        </Button>

        <a
          href="/public/CV-Maximiliano_Ordoñez.pdf"
          download="CV_Maximiliano_Ordoñez.pdf"
          style={{ textDecoration: "none" }}
        >
          <Button
            variant="primary"
            style={{
              borderRadius: "20px",
              backgroundColor: "#007bff",
              border: "none",
            }}
          >
            Descargar CV
          </Button>
        </a>
      </div>
    </div>
  );
};
