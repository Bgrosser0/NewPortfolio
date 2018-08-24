import React from "react";
import "./ProjectCard2.css";

import Row from "../Grid/Row";
import Col from "../Grid/Col";
import Container from "../Grid/Container";
import TrollCapture from "../images/TrollCapture.PNG"

const ProjectCard2 = props => (
  <div className="card">
    <div className="card-body">
        <Container>
          <Row>
            <Col size="md-12">
            <img
    className="avatar-img"
    src={TrollCapture}
    alt="avatar"
    />
            </Col>
            <Col size="md-12">
            <div id="troll-cont">
            <h1>
              The Troll's Toll
            </h1>
            <p className="introText">
            	A choose your own adventure game, the player moves through a story making choices that lead to branching paths with different story content and endings.
            </p>
          
            </div>
            </Col>    
          </Row>
          <Row>
          <button className="btn btn-primary" data-toggle="modal" data-target="#newpassword" ><a target="_blank" rel="noopener noreferrer" href="https://github.com/TeamMongai/MongaiProject">GitHub</a></button>
          <button className="btn btn-primary" data-toggle="modal" data-target="#newpassword" ><a target="_blank" rel="noopener noreferrer" href="https://evening-plains-48878.herokuapp.com/">Hosted Site</a></button>
          </Row>
        </Container>
    </div>
  </div>
);

export default ProjectCard2;