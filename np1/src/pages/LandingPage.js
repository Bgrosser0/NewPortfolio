import React from "react";
import Row from "../components/Grid/Row";
import Col from "../components/Grid/Col";
import Container from "../components/Grid/Container";
import CSS from "./pagesCSS/LandingPage.css";

const LandingPage = () => (

// Main Div
<div>

    {/* Profile Image */}



        {/* Main info Container */}
        <div className="banner">

            <img
    className="avatar-img"
    src="https://farm2.staticflickr.com/1894/30375496158_6ec7d6cbc4_m.jpg"
    alt="avatar"
    id="profile-pic"
    />
          
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
                  <a href="https://github.com/Bgrosser0" target="_blank"><i class="fab fa-github fa-3x"></i></a>
                  <a href="https://www.linkedin.com/in/benjamin-grosser-2aa313157/" target="_blank"><i class="fab fa-linkedin-in fa-3x"></i></a>
                  <a href="https://codepen.io/bgrosser0/" target="_blank"><i class="fab fa-codepen fa-3x"></i></a>
                </div>
        </div>
</div>
);

export default LandingPage;