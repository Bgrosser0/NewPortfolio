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
            <h1>
                My name is Ben Grosser, I am a Full Stack Web Developer wih an emphasis on front end skills.
                I like making music and coffee.
            </h1>
            <Col size="md-8">
            </Col>    
          </Row>
        </Container>
    </div>
  </div>
);

export default AboutMeCard;