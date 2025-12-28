import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import product from "../../Assets/Projects/productComp.png";
import taskUno from "../../Assets/Projects/taskUno.png"
import editor from "../../Assets/Projects/codeEditor.png";
import location from "../../Assets/Projects/LocationTracker.png";
import suicide from "../../Assets/Projects/suicide.png";
import smart_home from "../../Assets/Projects/smart_home.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col md={4} className="project-card">
            <ProjectCard
              imgPath={taskUno}
              isBlog={false}
              title="TaskUno"
              description={
  <>
    <ul>
      <li>
        Built a <b>full-stack Jira-like project management platform</b> using 
        <b> FastAPI</b>, <b>React</b>, and <b>PostgreSQL</b>, following a clean 
        <b> three-tier architecture</b>.
      </li>

      <li>
        Deployed backend on <b>AWS EC2</b> and frontend on <b>Vercel</b>, using 
        <b> Dockerized microservices</b> and <b>Nginx</b> as a reverse proxy.
      </li>

      <li>
        Integrated <b>Redis</b> for caching and queue-based email processing.
      </li>

      <li>
        Implemented <b>CI/CD pipelines using GitHub Actions</b> for automated builds, testing,
        and seamless deployments.
      </li>

      <li>
        Developed <b>JWT-based authentication</b>, role-based access control, Kanban boards,
        task management, and a responsive UI.
      </li>

      <li>
        Future scope includes <b>rate limiting</b>, enhanced <b>security headers</b>, and 
        <b>Kubernetes-based horizontal scaling</b>.
      </li>
    </ul>
  </>
}



              ghLink="https://github.com/yashjaiswal5859/TaskUno_Backend"
              demoLink="https://task-uno.vercel.app/"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={location}
              isBlog={false}
              title="Location Tracker"
              description={
  <>
    <ul>
      <li>
        Built an <b>Android app</b> for real-time GPS tracking using 
        <b> React Native</b>, <b>WebSockets</b>, and <b>Geolocation APIs</b>.
      </li>

      <li>
        Developed a <b>Node.js + Express</b> backend with <b>AWS DynamoDB</b> and 
        <b> Redis caching</b>.
      </li>

      <li>
        Implemented <b>JWT-based authentication</b>, secure WebSocket communication, 
        and optimized performance using <b>foreground services</b>.
      </li>
    </ul>
  </>
}


            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={smart_home}
              isBlog={false}
              title="Smart Home"
             description={
  <>
    <ul>
      <li>
        Built an <b>IoT and Android-based smart home system</b> to automate and monitor home activities.
      </li>

      <li>
        Enabled <b>wireless control of home appliances</b> through a mobile application.
      </li>

      <li>
        Improved home safety by integrating <b>fire detection</b>, 
        <b>fingerprint-based door locks</b>, and <b>camera surveillance</b>.
      </li>

      <li>
        Implemented <b>motion detection</b> to automatically turn lights on/off when movement is detected.
      </li>
    </ul>
  </>
}
ghLink="https://github.com/yashjaiswal5859/Smart-Home"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={product}
              isBlog={false}
              title="Product Comparison Website"
              description={
  <>
    <ul>
      <li>
        Developed a <b>dynamic MERN stack web application</b> to compare products across major e-commerce platforms such as 
        <b> Amazon</b>, <b>Flipkart</b>, <b>Snapdeal</b>, and <b>Dmart</b>.
      </li>

      <li>
        Implemented <b>web scraping</b> using <b>Python</b> and <b>Node.js</b> to collect real-time product data and ensure 
        accurate, up-to-date comparisons.
      </li>
    </ul>
  </>
}

              ghLink="https://github.com/yashjaiswal5859/Product-Comparison"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
