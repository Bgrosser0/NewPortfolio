import React from "react";
import "./AboutMeCard.css";

import Row from "../Grid/Row";
import Col from "../Grid/Col";
import Container from "../Grid/Container";

const AboutMeCard = props => (
  <div className="card">
    <div className="card-body">
        <Container>
          <Row>
            <Col size="md-4">
            <div id="pic-hold">
            <img
    className="avatar-img"
    src="https://farm2.staticflickr.com/1882/42434850600_7e1a9baed4_m.jpg"
    alt="avatar"
    id="abtPic"
    />
    </div>
            </Col>
            <Col size="md-8">
            <div id="content-hold">
            <h1>
              About Me
            </h1>
            <p className="introText">
            My name is Ben Grosser.  I am a full stack developer currently located in Minneapolis, Minnesota.  After getting a degree in music composition I became interested in programming to further my skills as a music producer and fell in love with coding through a coding bootcamp at the University of Minnesota. I developed an interest and respect for front-end and back-end development and have continued to develop my skills as a programmer through self-education.  I am motivated by new challenges and the pursuit of personal growth. 
            </p>
            </div>
            </Col>    
          </Row>
        </Container>
    </div>
  </div>
);

export default AboutMeCard;