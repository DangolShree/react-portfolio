import React from "react";
import profilePic from "../assets/shree.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="container hero-section">
      <div className="grid-hero">
        <div className="left">
          <p>
            Hi I'm <span>Shree Dangol</span>
          </p>
          <h3>Web developer</h3>
          <p>Hello im here to learn coding for my better future</p>
          <button className="download-btn">
            <a href="../assests/portfolio-website">
              Download CV
              <a href="../assets/portfolio-website.pdf" download>
                <i className="fa-solid fa-download"></i>
              </a>
            </a>
          </button>
        </div>

        <div className="right flex">
          <img src={profilePic} alt="profile-Pic" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
