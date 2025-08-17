import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      // Update navbar background on scroll
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (path) => {
    setIsMenuOpen(false);
    
    if (location.pathname === '/' && path.startsWith('/#')) {
      // Handle smooth scroll for home page sections
      const element = document.querySelector(path.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (path.startsWith('/#')) {
      // Navigate to home page first, then scroll
      navigate('/', { replace: true });
      setTimeout(() => {
        const element = document.querySelector(path.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    if (path.startsWith('/#')) {
      return location.pathname === '/' && location.hash === path.substring(1);
    }
    return location.pathname === path;
  };

  const navItems = [
    { path: '/', icon: 'fa-home', label: 'Home' },
    { path: '/about', icon: 'fa-user', label: 'About' },
    { path: '/projects', icon: 'fa-code', label: 'Projects' },
    { path: '/skills', icon: 'fa-tools', label: 'Skills' },
    { path: '/resume', icon: 'fa-file-alt', label: 'Resume' },
    { path: '/contact', icon: 'fa-envelope', label: 'Contact' }
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-brand">
          <Link to="/" onClick={() => handleLinkClick('/')}>
            <span className="brand-text">PP</span>
          </Link>
        </div>

        <button 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} 
          onClick={handleMenuClick}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            {navItems.map(({ path, icon, label }) => (
              <li key={path}>
                <Link
                  to={path}
                  className={isActive(path) ? 'active' : ''}
                  onClick={() => handleLinkClick(path)}
                >
                  <i className={`fas ${icon}`}></i>
                  <span>{label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 