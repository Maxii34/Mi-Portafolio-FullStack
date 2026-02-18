export const Introduccion = () => {
  return (
    <div className="py-5">
      <h5 style={{ color: "#007bff", letterSpacing: "2px" }}>
        BIENVENIDO A MI PORTAFOLIO
      </h5>
      <h1 style={{ fontSize: "3.5rem", fontWeight: "bold" }}>
        Hola, soy <span style={{ color: "#007bff" }}>Maxi</span>
      </h1>
      <h2 className="text-secondary">Full Stack Developer</h2>
      <p
        className="mt-4"
        style={{ fontSize: "1.1rem", maxWidth: "500px", lineHeight: "1.6" }}
      >
        Apasionado por crear soluciones web eficientes y escalables.
        Especializado en JavaScript, React y arquitecturas limpias para el
        backend.
      </p>
      <button className="btn btn-outline-primary mt-3 px-4 py-2">
        Ver Proyectos
      </button>
    </div>
  );
};
