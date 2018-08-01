import React from "react";
import "./ProjectCard1.css";

import Row from "../Grid/Row";
import Col from "../Grid/Col";
import Container from "../Grid/Container";
import HoookCap from "../images/HoookCap.PNG"

const ProjectCard1 = props => (
  <div className="card">
    <div className="card-body">
        <Container>
          <Row>
            <Col size="md-6">
            <img
    className="avatar-img"
    src={HoookCap}
    alt="avatar"
    />
            </Col>
            <Col size="md-6">
            <h1>
              Hoook.me
            </h1>
            <p className="introText">
            A web app that allows users to send “hook” requests to other users with media like video games, books, TV shows and movies.  The receiver of the “hook” then has a list with links and information on the media sent to them, which they can remove from their list after consuming that media.           
            </p>
            </Col>    
          </Row>
          <Row>
          <button className="btn btn-primary" data-toggle="modal" data-target="#newpassword" ><a target="_blank" rel="noopener noreferrer" href="https://github.com/Team-Chocolate-Chip-Cookies/Hoooked">GitHub</a></button>
          <button className="btn btn-primary" data-toggle="modal" data-target="#newpassword" ><a target="_blank" rel="noopener noreferrer" href="http://www.hoook.me/">Hosted Site</a></button>
          </Row>
        </Container>
    </div>
  </div>
);

export default ProjectCard1;