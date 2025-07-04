import React from 'react';
import './About.css';
import myImg from '../../assets/images/portfilio_imgjpg.jpg'

const About = () => {
  return (
    <section id="about" className="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <img
          src={myImg}
          alt="About Me"
          className="about-image"
        />
        <div className="about-text">
          <p>
            Hi, I'm Anurag, a passionate and dedicated Full-Stack Web Developer
            from West Bengal, India. I recently completed my Bachelor of
            Computer Applications (BCA) and have been working on real-world web
            development projects to sharpen my skills and build practical
            experience.
          </p>
          <p>
            I specialize in MERN stack development (MongoDB, Express.js,
            React.js, Node.js) and have hands-on experience in creating
            responsive, user-friendly websites and web applications. I’ve worked
            on projects like Inventory Management Systems, Pathology Lab
            Websites, and more.
          </p>
          <p>
            I love writing clean, efficient code and continuously learning new
            technologies to improve my craft. My goal is to build solutions that
            not only look good but also solve real-world problems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

