import React from "react";
import "./Skills.css";

const Skills = () => {
  const Skills = [
    {
      title: "",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    },
    {
      title: "",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    },
    {
      title: "",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg",
    },
    {
      title: "",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
    },
    {
      title: "",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    },
    {
      title: "",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg",
    },
    {
      title: "",
      imageUrl:
        "https://tse3.mm.bing.net/th/id/OIP.qgWsj2doQdkwJusxZRqFhQAAAA?pid=Api&P=0&h=220",
    },
    {
      title: "",
      imageUrl:
        "https://tse1.mm.bing.net/th/id/OIP.PY9TO3r57CyH9FlnQWxlegHaGY?pid=Api&P=0&h=220",
    },
    {
      title: "",
      imageUrl:
        "https://tse4.mm.bing.net/th/id/OIP.yUIb5S_kj98Eg5tT-Onx1AHaHa?pid=Api&P=0&h=220",
    },
    {
      title: "",
      imageUrl:
        "https://tse2.mm.bing.net/th/id/OIP.CJezIVA0-euvbQFL-gtMEAHaHa?pid=Api&P=0&h=220",
    },
    {
      title: "",
      imageUrl:
        "https://tse2.mm.bing.net/th/id/OIP.KrIYx9ASy8oVdZHEJDzyhgHaHa?pid=Api&P=0&h=220",
    },
  ];

  return (
    <section id="skills" className="skills">
      <h2 className="section-title">My skills</h2>
      <div className="scroll-container">
        <div className="scroll-content">
          {Skills.concat(Skills).map((skills, index) => (
            <div className="skills-card" key={index}>
              <img
                src={skills.imageUrl}
                alt={skills.title}
                className="skills-image"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
