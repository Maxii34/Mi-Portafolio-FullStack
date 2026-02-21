import { motion } from "framer-motion";

export const Introduccion = () => {
  return (
    <div className="">
      <motion.h1
        className="intro-title"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        Hola, soy <br /> 
        <span className="text-highlight">Maximiliano Ordoñez</span>
      </motion.h1>

      <motion.div
        className="intro-text-container"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: false, amount: 0.3 }}
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
        <p className="intro-quote">
          "Explora mi trabajo y descubre cómo transformo desafíos en soluciones
          a través de un desarrollo sólido y eficiente."
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <a href="#proyectos" className="btn btn-outline-primary btn-explore">
          Explorar mis proyectos
        </a>
      </motion.div>
    </div>
  );
};