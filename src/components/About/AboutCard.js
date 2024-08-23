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
            <br />
            <br />
            
            I also have a work experience of 10 months as an <span className="purple">Associate Software Engineer</span> in Clear Trail Technologies.
            <br />
            <br />
          </p>
          

          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
