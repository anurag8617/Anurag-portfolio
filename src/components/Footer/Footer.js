import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          <p>© {new Date().getFullYear()} Anurag Sharma | All rights reserved.</p>
          <div className="footer-links">
            <a
              href="https://github.com/anurag8617"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/anurag-sharma-581700324/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="anuragsharma32004@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
