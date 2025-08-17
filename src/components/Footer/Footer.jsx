import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <h2 className="footer-name">Prahlad Pallav</h2>
          
          <p className="footer-copyright">
            Made with <span className="heart">❤️</span> © {currentYear} copyright all right reserved
          </p>
          
          <p className="footer-credit">
            Designed & Developed by <span className="highlight">PRAHLAD PALLAV</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 