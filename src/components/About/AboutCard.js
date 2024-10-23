import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Anmol Raj Soni </span>
            from <span className="purple"> Ranchi, Jharkhand, India.</span>
            <br />
            I am currently final year student (batch 2021-25) at <span className="purple">Indian Institute of Information Technology Bhagalpur.</span>
            <br />
            I have am pursuing my B.Tech. degree in Electronics and Communication Engineering.
            <br />
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Anmol</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
