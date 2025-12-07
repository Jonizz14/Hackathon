import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>ZooMarket Pro</h3>
          <p>Your trusted platform for animal care and products.</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/animals">Animals</a></li>
            <li><a href="/foster">Foster</a></li>
            <li><a href="/donations">Donations</a></li>
            <li><a href="/vet-clinics">Vet Clinics</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: info@zoomarketpro.com</p>
          <p>Phone: +998 90 123 4567</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">Twitter</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 ZooMarket Pro. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
