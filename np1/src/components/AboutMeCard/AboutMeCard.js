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
            Web developer able to build a sophisticated website with full database backend all the way from mockup to rollout. Adept at working with diverse teams to implement projects. A quick study on new technologies.
            </p>
            </Col>    
          </Row>
        </Container>
    </div>
  </div>
);

export default AboutMeCard;