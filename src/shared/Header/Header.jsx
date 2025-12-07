import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';
import { FaPaw, FaShoppingCart, FaBars, FaTimes, FaUser } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import './Header.css';

function Header() {
  const { user, logout } = useAuth();
  const { cart } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeAllDropdowns = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <motion.header 
      className={`header ${showHeader ? "header--visible" : "header--hidden"}`}
      initial={{ y: 0 }}
      animate={{ y: showHeader ? 0 : -100 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <div className="header__nav-container">
        <Link to="/" className="header__logo-div" onClick={closeAllDropdowns}>
          <FaPaw className="header__logo" />
          <div className="header__logo-text">
            <span>ZooMarket</span>
            <span>Pro</span>
          </div>
        </Link>
        
        <button className="header__mobile-menu-btn" onClick={toggleMenu} ref={menuRef}>
          <AnimatePresence mode="wait" initial={false}>
            {menuOpen ? (
              <motion.div
                key="close"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.3 }}
              >
                <FaTimes size={24} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ opacity: 0, rotate: 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -90 }}
                transition={{ duration: 0.3 }}
              >
                <FaBars size={24} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
        
        <nav className="header__desktop-menu">
          <ul className="header__nav-links">
            <li><Link to="/animals" onClick={closeAllDropdowns}>Animals</Link></li>
            <li><Link to="/add-animal" onClick={closeAllDropdowns}>Add Animal</Link></li>
            <li><Link to="/foster" onClick={closeAllDropdowns}>Foster</Link></li>
            <li><Link to="/free-give" onClick={closeAllDropdowns}>Free Give</Link></li>
            <li><Link to="/donations" onClick={closeAllDropdowns}>Donations</Link></li>
            <li><Link to="/vet-clinics" onClick={closeAllDropdowns}>Vet Clinics</Link></li>
            <li><Link to="/equipments" onClick={closeAllDropdowns}>Equipments</Link></li>
          </ul>
          
          <div className="header__nav-right-section">
            {user ? (
              <>
                <Link to="/profile" className="profile-btn" onClick={closeAllDropdowns}>
                  <div className="user-avatar">
                    <FaUser />
                  </div>
                  <span>Profile</span>
                </Link>
                <button onClick={() => { logout(); closeAllDropdowns(); }}>Logout</button>
              </>
            ) : (
              <Link to="/login" onClick={closeAllDropdowns}>Login</Link>
            )}
            <Link to="/cart" className="cart-link" data-count={cart.length} onClick={closeAllDropdowns}>
              <FaShoppingCart />
              <span>Cart</span>
            </Link>
          </div>
        </nav>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            className="header__mobile-sidebar header__mobile-sidebar--open"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
          >
            <ul>
              <li><Link to="/animals" onClick={closeAllDropdowns}>Animals</Link></li>
              <li><Link to="/add-animal" onClick={closeAllDropdowns}>Add Animal</Link></li>
              <li><Link to="/foster" onClick={closeAllDropdowns}>Foster</Link></li>
              <li><Link to="/free-give" onClick={closeAllDropdowns}>Free Give</Link></li>
              <li><Link to="/donations" onClick={closeAllDropdowns}>Donations</Link></li>
              <li><Link to="/vet-clinics" onClick={closeAllDropdowns}>Vet Clinics</Link></li>
              <li><Link to="/equipments" onClick={closeAllDropdowns}>Equipments</Link></li>
              {user ? (
                <>
                  <li><Link to="/profile" onClick={closeAllDropdowns}>Profile</Link></li>
                  <li><button onClick={() => { logout(); closeAllDropdowns(); }}>Logout</button></li>
                </>
              ) : (
                <li><Link to="/login" onClick={closeAllDropdowns}>Login</Link></li>
              )}
              <li>
                <Link to="/cart" onClick={closeAllDropdowns}>
                  Cart ({cart.length})
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Header;

