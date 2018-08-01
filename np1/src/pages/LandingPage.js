import React from "react";
import Row from "../components/Grid/Row";
import Col from "../components/Grid/Col";
import Container from "../components/Grid/Container";

const LandingPage = () => (

// Main Div
<div>

    {/* Profile Image */}
    <img
    className="avatar-img"
    src="https://www.shareicon.net/data/512x512/2015/09/18/103160_man_512x512.png"
    alt="avatar"
    />


        {/* Main info Container */}
        <div className="banner">
          
            <h1>
            Ben Grosser
            </h1>
                <h2>
                  Full Stack Web Developer
                </h2>
              <hr/>
                    <p>
                    HTML/CSS | React | JavaScript | NodeJs | mySQL | MongoDB
                    </p>
      
                {/* Links to github, linkedin and codepen */}
                <div className="social-links">
                  <a href="https://github.com/Bgrosser0"><i class="fab fa-github fa-3x"></i></a>
                  <a href="https://www.linkedin.com/in/benjamin-grosser-2aa313157/"><i class="fab fa-linkedin-in fa-3x"></i></a>
                  <a href="https://codepen.io/bgrosser0/"><i class="fab fa-codepen fa-3x"></i></a>
                </div>
        </div>
</div>
);

export default LandingPage;