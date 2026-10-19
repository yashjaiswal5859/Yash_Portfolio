import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import samvadaImg from "../../Assets/Projects/image.png";

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
          <Col md={8} className="project-card">
            <ProjectCard
              imgPath={samvadaImg}
              isBlog={false}
              title="Samvada AI - Real-Time Voice AI Platform & SaaS Portal"
              description={
                <>
                  <p style={{ marginBottom: "15px", textAlign: "left" }}>
                    <b className="purple">Tech Stack:</b> Go, Gin, React, TypeScript, PostgreSQL, pgvector, ClickHouse, Redis, Apache Kafka, Docker, WebSockets, gRPC, REST APIs, Ory (Kratos, Hydra, Keto), ReBAC, Twilio, Plivo, Deepgram, FishAudio.
                  </p>
                  <ul style={{ paddingLeft: "20px" }}>
                    <li style={{ marginBottom: "10px" }}>
                      Architected a full-duplex, streaming voice pipeline in <b>Go</b> connecting PSTN networks (<b>Plivo, Twilio</b>) with <b>Deepgram (STT)</b>, <b>LLM token streaming</b>, and <b>FishAudio (TTS)</b>, achieving <b>1.19s end-to-end response latency</b>.
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      Engineered human-like conversational realism using instant fillers (<b>FillerService</b>), active listening cues (<b>BackchannelService</b>), background room noise (<b>AmbienceService</b>), <b>&lt; 10 ms Barge-In</b> interruption, and a <b>pgvector-powered Hybrid RAG engine</b> for low-latency knowledge retrieval.
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      Developed a full-stack SaaS portal using <b>React</b> and <b>Go (Gin)</b> to configure AI voice agents, monitor live calls through real-time audio visualizations, and manage SIP phone number provisioning.
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      Developed backend microservices in <b>Go (Gin)</b>, integrating open-source <b>Ory</b> services for JWT/OTP-based authentication and fine-grained <b>ReBAC</b> authorization, alongside an <b>Application & Billing Service (ABS)</b> for multi-tenant workspace management and wallet deductions using <b>PostgreSQL</b>, supported by a dedicated background worker.
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      Implemented an event-driven <b>OLAP Reporting Service</b> with a dedicated background worker to process call telemetry into <b>ClickHouse</b>, enabling low-latency analytical queries and usage dashboards; containerized microservices, workers, and databases using <b>Docker</b>.
                    </li>
                  </ul>
                </>
              }
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
