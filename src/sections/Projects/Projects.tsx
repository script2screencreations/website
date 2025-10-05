import React from "react";
import "./Projects.css";
import Nav from "../nav/Nav";

const Projects: React.FC = () => {
  return (
    <div className="project">
      <Nav />
      <div className="content">
        <h1>PROJECTS</h1>
        <section className="prj-1">
          <div className="left">
            <img src="image1.jpg" alt="Project 1" />
            <img src="image2.jpg" alt="Project 2" />
            <img src="image3.jpg" alt="Project 3" />
            <img src="image4.jpg" alt="Project 4" />
          </div>
          <div className="right">
            <h2>HackXelerate'25 Media Partner</h2>
            <p>
              We were honored to be the official media partner of
              HackXelerate'25, contributing to its branding, promotion, and
              digital content. Our team handled pre-event posters, live
              coverage, and post-event highlights across various platforms.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;
