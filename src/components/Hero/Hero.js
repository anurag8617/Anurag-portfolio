import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to My Portfolio</h1>
        <p className="hero-subtitle">I'm a MERN Stack Developer</p>
        <a href="#projects" className="hero-button">
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;
