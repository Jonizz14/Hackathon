import React from 'react';
import { Link } from 'react-router-dom';
import { FaPaw, FaHeart, FaHandHoldingHeart, FaClinicMedical, FaShoppingCart } from 'react-icons/fa';
import './Home.css';

function Home() {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <FaPaw className="hero-icon" />
              Welcome to ZooMarket Pro
            </h1>
            <p className="hero-subtitle">
              Your trusted platform for animal care, adoption, and premium pet products.
              Connecting loving homes with animals in need since 2024.
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">Animals Adopted</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">1000+</span>
                <span className="stat-label">Happy Customers</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Partner Shelters</span>
              </div>
            </div>
            <div className="hero-buttons">
              <Link to="/animals" className="btn-primary">
                <FaShoppingCart />
                Shop Animals
              </Link>
              <Link to="/donations" className="btn-secondary">
                <FaHeart />
                Make a Donation
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-image-placeholder">
              <FaPaw className="hero-main-icon" />
            </div>
          </div>
        </div>
      </section>
      <section className="services-section">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">Everything you need for your beloved pets</p>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <FaShoppingCart />
              </div>
              <h3>Premium Animals</h3>
              <p>Find your perfect companion from our carefully selected collection of healthy, vaccinated animals.</p>
              <Link to="/animals" className="service-link">Browse Animals →</Link>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <FaHandHoldingHeart />
              </div>
              <h3>Foster Care</h3>
              <p>Provide temporary care for animals in need. Make a difference in an animal's life today.</p>
              <Link to="/foster" className="service-link">Become a Foster →</Link>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <FaHeart />
              </div>
              <h3>Free Adoption</h3>
              <p>Give homeless animals a loving home. All our free adoption animals are spayed/neutered and vaccinated.</p>
              <Link to="/free-give" className="service-link">Adopt Now →</Link>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <FaClinicMedical />
              </div>
              <h3>Veterinary Care</h3>
              <p>Find trusted veterinary clinics in your area. Professional care for your pet's health needs.</p>
              <Link to="/vet-clinics" className="service-link">Find Clinics →</Link>
            </div>
          </div>
        </div>
      </section>
      <section className="features-section">
        <div className="container">
          <div className="features-content">
            <div className="features-text">
              <h2>Why Choose ZooMarket Pro?</h2>
              <div className="features-list">
                <div className="feature-item">
                  <div className="feature-check">✓</div>
                  <div>
                    <h4>Verified Animals</h4>
                    <p>All animals are health-checked and come with certificates</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-check">✓</div>
                  <div>
                    <h4>24/7 Support</h4>
                    <p>Our team is always ready to help with your questions</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-check">✓</div>
                  <div>
                    <h4>Safe Transactions</h4>
                    <p>Secure payment processing and guaranteed satisfaction</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-check">✓</div>
                  <div>
                    <h4>Community Driven</h4>
                    <p>Join thousands of animal lovers making a difference</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="features-image">
              <div className="features-placeholder">
                <FaPaw className="features-icon" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Find Your New Best Friend?</h2>
            <p>Join our community of animal lovers and make a difference today.</p>
            <div className="cta-buttons">
              <Link to="/animals" className="btn-primary">
                Start Shopping
              </Link>
              <Link to="/donations" className="btn-outline">
                Support Shelters
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
