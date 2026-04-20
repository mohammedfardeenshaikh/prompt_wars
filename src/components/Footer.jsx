import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="footer-content">
        <div className="footer-left">
          <span className="footer-brand text-gradient">ArenaPulse</span>
          <span className="footer-copyright">&copy; {new Date().getFullYear()} All rights reserved.</span>
        </div>
        <div className="footer-links">
          <Link to="#">Privacy Policy</Link>
          <Link to="#">Terms of Service</Link>
          <Link to="#">Support</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
