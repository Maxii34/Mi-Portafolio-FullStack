import { motion } from "framer-motion";
import { useNavigate } from "react-router";

export const Introduccion = () => {
  const redirecion = useNavigate();

  const iratecno = () => {
    redirecion("/tecno");
  };

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
          Soy <strong>Desarrollador Full Stack</strong> con especialización en
          <strong> Backend</strong>, enfocado en la creación de APIs robustas,
          bases de datos eficientes y arquitecturas escalables para aplicaciones
          web modernas.
        </p>

        <p>
          Trabajo principalmente en la lógica del negocio, autenticación,
          seguridad, rendimiento e integración entre sistemas, asegurando
          soluciones sólidas y mantenibles.
        </p>

        <p>
          Mi experiencia en frontend me permite comprender el flujo completo del
          producto y colaborar en interfaces funcionales, ofreciendo una visión
          integral del desarrollo.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <a
          onClick={iratecno}
          href="#proyectos"
          className="btn btn-outline-primary btn-explore"
        >
          Explorar mis proyectos
        </a>
      </motion.div>
    </div>
  );
};
