import React from "react";
import "./About.css";
import Nav from "../nav/Nav";

const About: React.FC = () => {
  return (
    <div className="About">
      <Nav />
      <div className="Av">
        <img src="./src/assets/img/pic.jpg" alt="Display image" />
      </div>
      <div className="about-wrapper">
        <div className="about-container">
          <h1>ABOUT US</h1>
          <p>
            At <strong>S2S Creations</strong>, storytelling is at the heart of
            everything we do. We are a creative production company dedicated to
            crafting compelling visual experiences that resonate with audiences
            and leave lasting impressions. Whether it's a commercial, short
            film, or branded content, we bring ideas to life with cinematic
            precision and artistic flair.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
