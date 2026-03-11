import { motion } from "framer-motion";
import { useNavigate } from "react-router";

export const Introduccion = () => {
  const redirecion = useNavigate();

  const iratecno = () => {
    redirecion("/tecno");
  }

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
          Soy desarrollador <strong>Full Stack</strong> con una fuerte
          orientación al backend, donde diseño APIs, estructuras de datos y
          arquitecturas que permiten construir aplicaciones web sólidas,
          eficientes y escalables.
        </p>

        <p>
          Mi conocimiento de frontend me permite complementar esa base técnica
          con interfaces claras y funcionales, entendiendo así el funcionamiento
          completo de una aplicación desde su lógica interna hasta la
          experiencia del usuario.
        </p>
        <p className="intro-quote">
          " <b>Explora mis proyectos</b> y descubre cómo transformo desafíos en soluciones
          a través de un desarrollo sólido y eficiente."
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <a onClick={iratecno} href="#proyectos" className="btn btn-outline-primary btn-explore">
          Explorar mis proyectos
        </a>
      </motion.div>
    </div>
  );
};
