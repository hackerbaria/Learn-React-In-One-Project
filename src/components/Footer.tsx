import React from "react";
import "../css/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Made with ❤️ by MovieExplorer</p>
        <div className="footer-links">
          <a href="https://github.com/hackerbaria" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer">
            Powered by TMDb
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} MovieExplorer. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;