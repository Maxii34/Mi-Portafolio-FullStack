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
      <h2 className="section-title mb-5">
        Mi Stack <span className="text-highlight">Tecnológico</span>
      </h2>
      {categories.map((cat, idx) => (
        <div key={idx} className="mb-5">
          <h4 className="stack-category-title">{cat.title}</h4>
          <Row className="g-3">
            {cat.skills.map((skill, i) => (
              <Col xs={4} md={2} key={i}>
                <div className="tech-box">
                  <span className="tech-icon" style={{ color: skill.color }}>
                    {skill.icon}
                  </span>
                  <span className="tech-name">{skill.name}</span>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </Container>
  );
};
