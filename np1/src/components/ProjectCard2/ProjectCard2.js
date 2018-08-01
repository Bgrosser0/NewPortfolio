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
            <Col size="md-6">
            <img
    className="avatar-img"
    src={TrollCapture}
    alt="avatar"
    />
            </Col>
            <Col size="md-6">
            <h1>
              The Troll's Toll
            </h1>
            <p className="introText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies consequat auctor. Donec convallis ornare egestas. Quisque placerat, augue pulvinar tristique tristique, purus nulla dignissim est, mollis mollis nisi lorem ut magna. Praesent efficitur pretium nunc vitae eleifend. Sed pharetra metus imperdiet, fringilla mi sed, maximus quam. Praesent nisi lectus, cursus id tincidunt sit amet, dictum vestibulum enim. Integer pharetra pellentesque nulla, malesuada feugiat lacus semper et. Nam egestas gravida eros et volutpat. Nunc laoreet convallis sagittis. Praesent sit amet arcu sed quam viverra dapibus. Phasellus pharetra nisl et faucibus tempus. Integer nec orci a velit dictum fringilla. Sed viverra feugiat elit congue egestas. Nunc non libero nisl.
            </p>
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