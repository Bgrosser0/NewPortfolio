import React from "react";
import "./ContactCard.css";

import Row from "../Grid/Row";
import Col from "../Grid/Col";
import Container from "../Grid/Container";

const ContactCard = props => (
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
              Contact Me
            </h1>
            <p className="introText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies consequat auctor. Donec convallis ornare egestas. Quisque placerat, augue pulvinar tristique tristique, purus nulla dignissim est, mollis mollis nisi lorem ut magna. Praesent efficitur pretium nunc vitae eleifend. Sed pharetra metus imperdiet, fringilla mi sed, maximus quam. Praesent nisi lectus, cursus id tincidunt sit amet, dictum vestibulum enim. Integer pharetra pellentesque nulla, malesuada feugiat lacus semper et. Nam egestas gravida eros et volutpat. Nunc laoreet convallis sagittis. Praesent sit amet arcu sed quam viverra dapibus. Phasellus pharetra nisl et faucibus tempus. Integer nec orci a velit dictum fringilla. Sed viverra feugiat elit congue egestas. Nunc non libero nisl.
            </p>
            </Col>    
          </Row>
        </Container>
    </div>
  </div>
);

export default ContactCard;