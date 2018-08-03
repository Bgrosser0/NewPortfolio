import React from "react";
import "./ProjectCard3.css";

import Row from "../Grid/Row";
import Col from "../Grid/Col";
import Container from "../Grid/Container";
import LiriCapture from "../images/Capture4.PNG"

const ProjectCard3 = props => (
  <div className="card">
    <div className="card-body">
        <Container>
          <Row>
            <Col size="md-6">
            <img
    className="avatar-img"
    src={LiriCapture}
    alt="avatar"
    />
            </Col>
            <Col size="md-6">
            <h1>
              Liri
            </h1>
            <p className="introText">
            A Command line node app that uses APIs to return tweets, song information or movie information.</p>
            </Col>    
          </Row>
          <Row>
            <Col size="md-6">
          <button className="btn btn-primary" id="LiriButton" data-toggle="modal" data-target="#newpassword" ><a target="_blank" rel="noopener noreferrer" href="https://github.com/Bgrosser0/Liri">GitHub</a></button>
            </Col>
            <Col size="md-6">
              <br></br>
            </Col>
          </Row>
        </Container>
    </div>
  </div>
);

export default ProjectCard3;