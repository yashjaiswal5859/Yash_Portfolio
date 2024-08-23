import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import product from "../../Assets/Projects/productComp.png";
import emotion from "../../Assets/Projects/emotion.png";
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
              imgPath={location}
              isBlog={true}
              title="Location Tracker"
              description={
                <>
                An Android based project which can track live location of multiple users at a single time on single screen with good accuracy. 
                <br/>
                <br/>
                Built a reliable app with Android Studio using Singleton design patterns, multi-threading, and foreground services for better performance and stability.
                </>
              }
              ghLink="https://drive.google.com/drive/folders/1GQLA3HWmat1A3jnh-nGdCd7EslWxWe8Z?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={smart_home}
              isBlog={false}
              title="Smart Home"
              description={
                <>
                  An IoT and Android based project by which we can convert our home into a smart home. 
                  <br />
                  Some functionalities are: 
                  <br />
                  i.   Control home appliances through mobile wirelessly.<br />
                  ii.  Making our home fireproof by adding fire safety features.<br />
                  iii. Making our home thief proof by adding fingerprint lock and camera feature.<br />
                  iv.  Automatically turn on light when found any motion.<br />
                  
                </>
              }ghLink="https://github.com/yashjaiswal5859/Smart-Home"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={product}
              isBlog={false}
              title="Product Comparison Website"
              description={
                <>
              Developed a dynamic web application using MERN Stack that allows users to compare products from major e-commerce platforms, including Amazon, Flipkart, Snapdeal, and Dmart. 
              <br />
              <br />
              Implemented web scraping using Python and NodeJS to gather real-time product data across multiple sites, ensuring accurate and up-to-date comparisons.
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
