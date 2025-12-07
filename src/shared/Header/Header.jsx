import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';
import './Header.css';

function Header() {
  const { user, logout } = useAuth();
  const { cart } = useCart();

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">ZooMarket Pro</Link>
      </div>
      <nav className="nav">
        <Link to="/animals">Animals</Link>
        <Link to="/foster">Foster</Link>
        <Link to="/free-give">Free Give</Link>
        <Link to="/donations">Donations</Link>
        <Link to="/vet-clinics">Vet Clinics</Link>
        <Link to="/equipments">Equipments</Link>
        {user ? (
          <>
            <Link to="/profile">Profile</Link>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
        <Link to="/cart">Cart ({cart.length})</Link>
      </nav>
    </header>
  );
}

export default Header;
