import React from "react";
import "./ProjectBanner.css";

import Row from "../Grid/Row";
import Col from "../Grid/Col";
import Container from "../Grid/Container";

const ProjectBanner = props => (
  <div className="card">
    <div className="card-body">
        <Container>
          <Row>

            <Col size="md-12">
            <h1>
              Projects
            </h1>
            </Col>   

          </Row>
        </Container>
    </div>
  </div>
);

export default ProjectBanner;