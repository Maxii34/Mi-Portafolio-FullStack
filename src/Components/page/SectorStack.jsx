import { Container, Row, Col } from "react-bootstrap";
import { 
  SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss, SiBootstrap,
  SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiPostman, SiGit, SiDocker 
} from "react-icons/si";

export const SectorStack = () => {
  const categories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML5", icon: <SiHtml5 /> },
        { name: "CSS3", icon: <SiCss3 /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "React", icon: <SiReact /> },
        { name: "Tailwind", icon: <SiTailwindcss /> },
        { name: "Bootstrap", icon: <SiBootstrap /> },
      ]
    },
    {
      title: "Backend & DB",
      skills: [
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "Express", icon: <SiExpress /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
      ]
    },
    {
      title: "Herramientas",
      skills: [
        { name: "Git", icon: <SiGit /> },
        { name: "Postman", icon: <SiPostman /> },
        { name: "Docker", icon: <SiDocker /> },
      ]
    }
  ];

  return (
    <Container className="stack-section " id="habilidades" style={{ minHeight: '115vh', scrollMarginTop: '20px'  }}>
      <h2 className="section-title mb-5">Mi Stack <span className="text-highlight">Tecnológico</span></h2>
      {categories.map((cat, idx) => (
        <div key={idx} className="mb-5">
          <h4 className="stack-category-title">{cat.title}</h4>
          <Row className="g-3">
            {cat.skills.map((skill, i) => (
              <Col xs={4} md={2} key={i}>
                <div className="tech-box">
                  <span className="tech-icon">{skill.icon}</span>
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