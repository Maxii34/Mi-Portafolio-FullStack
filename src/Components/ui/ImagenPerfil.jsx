import { Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { TbBrandGithub } from "react-icons/tb";
import { MdDownloading } from "react-icons/md";
import { motion } from "framer-motion"; 

export const ImagenPerfil = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center h-100 mt-5">
      
      {/* Imagen con animación */}
      <motion.div
        className="profile-image-container"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: 1, 
          scale: 1,
          boxShadow: [
            "0 0 20px rgba(0, 123, 255, 0.3)",
            "0 0 40px rgba(0, 123, 255, 0.6)",
            "0 0 20px rgba(0, 123, 255, 0.3)"
          ]
        }}
        transition={{ 
          duration: 0.8,
          boxShadow: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      >
        <Image
          src="compressed-Maxi.jpeg"
          roundedCircle
          className="profile-image"
          alt="Foto de perfil"
        />
      </motion.div>

      {/* Botones */}
      <div className="d-flex gap-3">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            href="https://github.com/Maxii34"
            target="_blank"
            variant="outline-primary"
            className="btn-custom"
          >
            <TbBrandGithub className="fs-5" /> GitHub
          </Button>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <a
            href="/CV-Maximiliano_Ordoñez.pdf" 
            download="CV_Maximiliano_Ordoñez.pdf"
            className="download-link"
          >
            <Button
              variant="primary"
              className="btn-custom btn-cv"
            >
              <MdDownloading className="fs-4" /> Download CV
            </Button>
          </a>
        </motion.div>
      </div>
    </div>
  );
};