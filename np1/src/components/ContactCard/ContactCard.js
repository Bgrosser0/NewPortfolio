import React from "react";
import "./ContactCard.css";

import Row from "../Grid/Row";
import Col from "../Grid/Col";
import Container from "../Grid/Container";

const ContactCard = props => (
  <div className="card" id="contactCard">
    <div className="card-body" id="contactCardBody">
     
          <Row>
            <Col size="md-12">
            <h1>
              Contact Me
            </h1>
            
            </Col>
          </Row>

          <Row>
          <Col size="md-12">
          <div className="ContactInfo">
          <p>
          <i class="fab fa-linkedin-in"></i> LinkedIn: <a href="https://www.linkedin.com/in/benjamin-grosser-2aa313157/" target="_blank">Ben Grosser</a>
          </p>
          <p>
          <i class="fas fa-phone"></i> Phone: 612-709-4778
          </p>
          <p>
          <i class="fas fa-envelope"></i> Email: Bgrosser00@gmail.com
          </p>
          <p>
          <i class="fas fa-map-marker-alt"></i>  Location: Minneapolis, Minnesota
          </p>
      
          </div>
          </Col>
    {/* <Col size="md-6">
    <div className="ContactForm">
    <form>
  <div className="form-group" id="NameForm">
    <label for="exampleInputEmail1" className="FormLable">Name</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name"></input>
  </div>
  <div className="form-group" id="EmailForm">
    <label for="exampleInputEmail1" className="FormLable">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email"></input>
  </div>
  <div className="form-group">
    <label for="exampleFormControlTextarea1" className="FormLable">Message</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
  
</form>
</div>
</Col> */}
  </Row>


    </div>
  </div>
);

export default ContactCard;