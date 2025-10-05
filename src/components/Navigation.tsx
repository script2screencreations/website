import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Camera, Video, Menu, X } from 'lucide-react';
import '../styles/Navigation.css';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { path: '/team', label: 'Team' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-content">
          {/* Logo */}
          <Link to="/" className="logo-link">
            <div className="logo-wrapper">
              <div className="logo-icon">
                <div className="logo-icons">
                  <Camera className="w-4 h-4 text-white" />
                  <Video className="w-4 h-4 text-white" />
                </div>
              </div>
              <motion.div
                className="logo-hover-effect"
                initial={{ scale: 1, opacity: 0 }}
                whileHover={{ scale: 1.1, opacity: 0.3 }}
                transition={{ duration: 0.2 }}
              />
            </div>
            <div>
              <h2 className="brand-name">
                S2S Creations
              </h2>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="desktop-nav">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="nav-item"
              >
                <span
                  className={`nav-link ${
                    location.pathname === item.path
                      ? 'active'
                      : ''
                  }`}
                >
                  {item.label}
                </span>
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="activeTab"
                    className="active-indicator"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="mobile-menu-button"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mobile-menu"
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`mobile-nav-link ${
                  location.pathname === item.path
                    ? 'active'
                    : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;