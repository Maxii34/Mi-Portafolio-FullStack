import { Container, Row, Col } from "react-bootstrap";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiPostman,
  SiGit,
  SiDocker,
  SiGithub
} from "react-icons/si";
import { motion } from "framer-motion";

export const SectorStack = () => {
  const categories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML5", icon: <SiHtml5 />, color: "#E34F26" },
        { name: "CSS3", icon: <SiCss3 />, color: "#1572B6" },
        { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
        { name: "React", icon: <SiReact />, color: "#61DAFB" },
        { name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4" },
        { name: "Bootstrap", icon: <SiBootstrap />, color: "#7952B3" },
      ],
    },
    {
      title: "Backend & DB",
      skills: [
        { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
        { name: "Express", icon: <SiExpress />, color: "#ffffff" },
        { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
        { name: "PostgreSQL", icon: <SiPostgresql />, color: "#4169E1" },
      ],
    },
    {
      title: "Herramientas",
      skills: [
        { name: "Git", icon: <SiGit />, color: "#F05032" },
        { name: "GitHub", icon: <SiGithub />, color: "#ffffff" },
        { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
        { name: "Docker", icon: <SiDocker />, color: "#2496ED" },
      ],
    },
  ];

  return (
    <Container
      className="stack-section"
      id="habilidades"
      style={{ minHeight: "115vh", scrollMarginTop: "20px" }}
    >
      <motion.h2
        className="section-title mb-5"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        Mi Stack <span className="text-highlight">Tecnológico</span>
      </motion.h2>

      {categories.map((cat, idx) => (
        <div key={idx} className="mb-5">
          <motion.h4
            className="stack-category-title"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            {cat.title}
          </motion.h4>

          <Row className="g-3">
            {cat.skills.map((skill, i) => (
              <Col xs={4} md={2} key={i}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  viewport={{ once: false, amount: 0.3 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="tech-box">
                    <span className="tech-icon" style={{ color: skill.color }}>
                      {skill.icon}
                    </span>
                    <span className="tech-name">{skill.name}</span>
                  </div>
                </motion.div>
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </Container>
  );
};