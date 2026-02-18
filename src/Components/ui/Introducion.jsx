export const Introduccion = () => {
  return (
    <div className="py-5">
      <h1
        style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "1.5rem" }}
      >
        Hola, soy <span style={{ color: "#007bff" }}>Maxi</span>
      </h1>

      <div
        style={{
          fontSize: "1.2rem",
          lineHeight: "1.8",
          color: "#e0e0e0", // Un gris muy claro para que no sea tan pesado como el blanco puro
          maxWidth: "650px",
        }}
      >
        <p>
          Soy un desarrollador web enfocado en la creación de interfaces
          cautivadoras, siempre orientado a simplificar y facilitar la
          experiencia del usuario.
        </p>
        <p>
          Mi enfoque como <strong>Full Stack</strong> me permite entender el
          ciclo completo de un proyecto: desde la fluidez visual que el usuario
          percibe, hasta la arquitectura robusta y eficiente que lo sostiene.
        </p>
        <p>
          "Explora mi trabajo y descubre cómo transformo desafíos en soluciones
          a través de un desarrollo sólido y eficiente."
        </p>
      </div>

      <a
        href="#proyectos"
        className="btn btn-outline-primary mt-4 px-4"
        style={{ borderRadius: "20px" }}
      >
        Explorar mis proyectos
      </a>
    </div>
  );
};
