import React from "react";
import "./ContactCard.css";

import Row from "../Grid/Row";
import Col from "../Grid/Col";
import Container from "../Grid/Container";

const ContactCard = props => (
  <div className="card" id="contactCard">
    <div className="card-body">
     
          <Row>
            <Col size="md-12">
            <h1>
              Contact Me
            </h1>
            
            </Col>
          </Row>

          <Row>
          <Col size="md-6">
          <p>
            Phone: 612-709-4778
          </p>
          <p>
            Email: Bgrosser00@gmail.com
          </p>
          <p>
            Location: Minneapolis, Minnesota
          </p>
          </Col>
    <Col size="md-6">
    <form>
  <div className="form-group">
    <label for="exampleInputEmail1">Name</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name"></input>
  </div>
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
  </div>
  <div className="form-group">
    <label for="exampleFormControlTextarea1">Message</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
  
</form>
</Col>
  </Row>


    </div>
  </div>
);

export default ContactCard;