import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram
} from "react-icons/ai";
import { FaCode } from "react-icons/fa";

import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in 
              <i>
                <b className="purple"> Python, Java, C++  </b>
              </i>
              &nbsp; and can quickly adapt to any technology or programming language.
              <br />
              <br />
              I have solved <b className="purple">2500+ DSA Problems</b> showcasing my strong problem solving skills.
              <br />
              <br />
              I am at the <b className="purple">top 4% in Leetcode (Knight)</b> and <b className="purple">top 3% in Coding Ninjas (Master)</b>.
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Projects and Products </b> and
                also in areas related to{" "}
                <b className="purple">
                  Backend.
                </b>
              </i>
              <br />
<br />
I have built multiple <b className="purple">full-stack projects</b> using 
<b className="purple"> monolithic and microservices architectures</b>.
<br />
<br />
I have tried to design <b className="purple">scalable backend systems</b> using 
<b className="purple"> Docker-based horizontal scaling</b> 
(without Kubernetes due to budget constraints) and implemented 
<b className="purple"> Redis</b> for caching and asynchronous processing.
<br /><br />
I also used <b className="purple">Redis-based queues</b> for 
<b className="purple"> producer–consumer communication</b>, 
serving as a lightweight alternative to Kafka.
<br />

<br />
I focus on building <b className="purple">clean, maintainable, and production-ready backend systems</b>.
<br />
<br />
Currently, I am learning <b className="purple">system design</b> from 
<b className="purple"> Harkirat Singh</b> and applying these concepts while building real-world projects.

              <br />
              <br />
              
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/yashjaiswal5859"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/yash-jaiswal-49a26a178/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/yashjaiswal5859/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://codolio.com/profile/yash_"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaCode />
                </a>
              </li>
              
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
