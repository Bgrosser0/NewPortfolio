import React from "react";
import Carousel from "../components/Carousel";
// import TrollToll from "../images/TrollCapture2.PNG";
// import HoookCap from "../images/HoookCap.PNG";
import ContactCard from "../components/ContactCard";
import Container from "../components/Grid/Container";
import Row from "../components/Grid/Row";
import Col from "../components/Grid/Col";
import ProjectBanner from "../components/ProjectBanner";
import ProjectCard1 from "../components/ProjectCard1";
import ProjectCard2 from "../components/ProjectCard2";
import ProjectCard3 from "../components/ProjectCard3";

const Projects = () => (
  <div>

  <hr></hr>

  <Row>
    <Col size="md-12">
    <ProjectBanner />
    </Col>
  </Row>



  <Row>

    <Col size="md-12">
<div className="CarouselContainer">

    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <div className="item-container">
        <ProjectCard1 />
      </div>
    </div>
    <div className="carousel-item">
      <div className="item-container">
      <ProjectCard2 />
      </div>
    </div>
    <div className="carousel-item">
      <div className="item-container">
      <ProjectCard3 />
      </div>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>

</div>
</Col>
</Row>

</div>
);


export default Projects;