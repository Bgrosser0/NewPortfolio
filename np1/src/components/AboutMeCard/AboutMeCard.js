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
            <img
    className="avatar-img"
    src="https://www.shareicon.net/data/512x512/2015/09/18/103160_man_512x512.png"
    alt="avatar"
    />
            </Col>
            <Col size="md-8">
            <h1>
              About Me
            </h1>
            <p className="introText">
            My name is Ben Grosser.  I am a full stack developer currently located in Minneapolis, Minnesota.  After getting a degree in music composition I became interested in programming to further my skills as a music producer and fell in love with coding through a coding bootcamp at the University of Minnesota. I developed an interest and respect for front-end and back-end development and have continued to develop my skills as a programmer through self-education.  I am motivated by new challenges and the pursuit of personal growth. 
            </p>
            </Col>    
          </Row>
        </Container>
    </div>
  </div>
);

export default AboutMeCard;