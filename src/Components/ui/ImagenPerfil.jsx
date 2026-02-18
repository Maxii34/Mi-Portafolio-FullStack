import Image from "react-bootstrap/Image";

export const ImagenPerfil = () => {
  return (
    <div className="d-flex justify-content-center align-items-center h-100 py-5">
      <div
        style={{
          position: "relative",
          padding: "10px",
          borderRadius: "50%",
          background: "linear-gradient(45deg, #007bff, transparent)",
          boxShadow: "0 0 30px rgba(0, 123, 255, 0.3)", // El efecto glow
        }}
      >
        <Image
          src="tu-foto-aqui.jpg" // Cambia esto por tu ruta
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
    </div>
  );
};
