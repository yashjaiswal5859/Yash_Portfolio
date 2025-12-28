import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Yash Jaiswal </span>
            from <span className="purple"> Indore, Madhya Pradesh, India.</span>
            <br />
            <br />
            I am currently persuing M-Tech in Data Science from <span className="purple">NIT Jamshedpur</span>. 
            <br /><br />
Also working at <span className="purple">SANAS.AI</span> as an <span className="purple">SDE Intern</span>, 
where I worked on <span className="purple">MERN stack</span>, 
<span className="purple">NestJS</span>, and <span className="purple">ClickHouse DB</span> to build and maintain full-stack features.
<br /><br />  
I resolved multiple bugs reported by QA and clients, and optimized 
<b className="purple"> API performance and database queries</b>, 
reducing response time from <b className="purple">~18 seconds to ~2 seconds</b>.
            <br />
            <br />
            <br />
          </p>
          

          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
