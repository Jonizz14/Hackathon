import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-page">
      <section className="hero-banner">
        <div className="hero-content">
          <h1>Welcome to ZooMarket Pro</h1>
          <p>Your ultimate platform for animal care, adoption, and products.</p>
          <Link to="/animals" className="cta-button">Explore Animals</Link>
        </div>
      </section>

      <section className="features">
        <div className="feature-card">
          <h3>🐾 Buy Animals</h3>
          <p>Find your perfect companion from our wide selection of pets.</p>
          <Link to="/animals">Shop Now</Link>
        </div>
        <div className="feature-card">
          <h3>❤️ Foster Animals</h3>
          <p>Help animals in need by providing temporary care.</p>
          <Link to="/foster">Learn More</Link>
        </div>
        <div className="feature-card">
          <h3>🎁 Free Adoptions</h3>
          <p>Give a home to animals looking for loving families.</p>
          <Link to="/free-give">Adopt Now</Link>
        </div>
      </section>

      <section className="donations-preview">
        <h2>Support Animal Shelters</h2>
        <p>Make a difference by donating to local shelters.</p>
        <Link to="/donations" className="donate-button">Donate Today</Link>
      </section>

      <section className="vet-preview">
        <h2>Find Veterinary Clinics</h2>
        <p>Locate nearby vet clinics with our interactive map.</p>
        <Link to="/vet-clinics" className="map-button">View Map</Link>
      </section>
    </div>
  );
}

export default Home;