import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";




function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>ZooMarket Pro</h3>
          <p>Your trusted platform for animal care, adoption, and products. Connecting loving homes with animals in need.</p>
          <div className="social-links">
            <a href="#" title="Facebook"><FaFacebook /></a>
            <a href="#" title="Instagram"><FaInstagram /></a>
            <a href="#" title="Twitter"><FaTwitter /></a>
            <a href="#" title="YouTube"><FaYoutube /></a>
          </div>
        </div>
        
        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li><Link to="/animals">Buy Animals</Link></li>
            <li><Link to="/foster">Foster Care</Link></li>
            <li><Link to="/free-give">Free Adoption</Link></li>
            <li><Link to="/equipments">Pet Supplies</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Support</h4>
          <ul>
            <li><Link to="/donations">Make Donations</Link></li>
            <li><Link to="/vet-clinics">Find Vets</Link></li>
            <li><a href="#help">Help Center</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Contact Info</h4>
          <p><strong>Email:</strong> info@zoomarketpro.com</p>
          <p><strong>Phone:</strong> +998 90 123 4567</p>
          <p><strong>Address:</strong> Tashkent, Uzbekistan</p>
          <p><strong>Hours:</strong> 24/7 Support</p>
        </div>
      </div>
      
      <div className="newsletter">
        <h4>Stay Updated</h4>
        <p>Get the latest news about animal welfare and platform updates.</p>
        <form className="newsletter-form">
          <input type="email" placeholder="Enter your email" required />
          <button type="submit">Subscribe</button>
        </form>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 <strong>ZooMarket Pro</strong>. All rights reserved. Made with ❤️ for animals.</p>
      </div>
    </footer>
  );
}

export default Footer;
