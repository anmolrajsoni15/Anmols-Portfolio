import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import horizontal from "../../Assets/Projects/horizontal-scaling.jpg";
import healthcare from "../../Assets/Projects/heathcare-management.jpg";
import assistant from "../../Assets/Projects/personal-assistant.webp";
import mydukan from "../../Assets/Projects/MyDukan.png";
import dfs from "../../Assets/Projects/distributed-file-system.webp";
import social from "../../Assets/Projects/social-media.png";
import signature from "../../Assets/Projects/digital-signature.jpg";

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
              imgPath={dfs}
              isBlog={false}
              title="Distributed File System"
              description="
              Created a CLI application using GoLang for P2P Distributed File System. This project focuses on decentralizing file storage and sharing, enabling peers to directly exchange files without relying on a central server. The goal was to enhance data redundancy, security, and accessibility. 
              "
              ghLink="https://github.com/anmolrajsoni15/anmols_distributed_file_system"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={healthcare}
              isBlog={false}
              title="Healthcare Management System Microservices"
              description="Created a Spring Boot microservice ecosystem, enhancing healthcare management with robust API routes and integration of Postgres database, RabbitMQ, and OpenFeign for seamless communication. Optimized system performance and reliability by implementing Eureka Server for service discovery, API Gateway for request routing, and Zipkin Server for distributed tracing, achieving a 30% improvement in response time. Containerized microservices using Docker, enabling streamlined deployment and scalability across environments, which reduced deployment time by 40%."
              ghLink="https://github.com/anmolrajsoni15/Healthcare-Management-System-Microservice"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={horizontal}
              isBlog={false}
              title="Horizontal Scaling in JS"
              description="This project creates a CRUD API using an in-memory database with Node.js' Cluster API for horizontal scaling. It sets up a basic app with dependencies like Express and Mongoose, defines a user model, and implements various API endpoints for CRUD operations. Error handling and load testing highlight the benefits of using Node.js clustering to run multiple instances of the application, improving performance and reducing response times."
              ghLink="https://github.com/anmolrajsoni15/Horizontal-Scaling-in-JS"
              demoLink="https://ticktech-apis.onrender.com"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mydukan}
              isBlog={false}
              title="Ecommerce Website"
              description="Engineered a robust e-commerce platform using the MERN stack, integrating key features such as product viewing, purchasing, rating, and reviewing, along with a secure authentication system and Stripe API for seamless transactions. Customizable user profile and an insightful admin dashboard for effective product management, backed by a well structured MongoDB database for efficient data handling."
              ghLink="https://github.com/anmolrajsoni15/Ecommerce_Mern"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={social}
              isBlog={false}
              title="Social Media App"
              description="
              A full-stack social media application where users can create and share their thoughts, like and comment on other users' posts. Implemented user authentication and authorization using JWT tokens and bcrypt for password hashing. Built a RESTful API using Node.js and Express, and a MongoDB database to store user information and posts. Designed a responsive front-end using React.js and Material-UI, and deployed the application on Render.com.
              "
              ghLink="https://github.com/anmolrajsoni15/SocialMediaApp"
              demoLink="https://socialmediahaibhai.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={assistant}
              isBlog={false}
              title="Personal Assistant"
              description=" Developed an innovative personal assistant using Python, allowing users to execute tasks via simple voice commands. Enabled the program to open applications, check battery status, provide weather updates, news highlights, and generate jokes, and many other functions providing a more intuitive and user-friendly experience."
              ghLink="https://github.com/anmolrajsoni15/Personal-Assistant"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={signature}
              isBlog={false}
              title="Digital Signature Application"
              description="
              Created an api using DocuSign api to make digital signatures on any type of forms, letters, applications, etc.
              "
              ghLink="https://github.com/anmolrajsoni15/DocuSign-API"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
