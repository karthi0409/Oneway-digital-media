import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiArrowRight } from 'react-icons/fi';
import Logo from '../ui/Logo.jsx';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Packages', path: '/packages' },
  { label: 'Experience', path: '/experience' },
  { label: 'Projects', path: '/projects' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on page transition
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <header className="site-header" role="banner">
      <div className="container">
        <div className="nav-container">
          {/* Brand Logo */}
          <div className="nav-brand">
            <Logo height={56} />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="nav-links" role="navigation" aria-label="Main Navigation">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                end={item.path === '/'}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Header Action CTA & Mobile Trigger */}
          <div className="nav-actions">
            <Link
              to="/contact#enquiry"
              className="btn btn-primary btn-sm"
              style={{ display: 'none', minWidth: '170px' }}
              id="desktop-cta"
            >
              <span>Get Free Consultation</span>
              <FiArrowRight />
            </Link>

            <button
              type="button"
              className="menu-toggle"
              aria-label={mobileOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Backdrop */}
      <div
        className={`mobile-nav-backdrop ${mobileOpen ? 'open' : ''}`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Navigation Drawer */}
      <aside
        className={`mobile-nav-drawer ${mobileOpen ? 'open' : ''}`}
        aria-label="Mobile Navigation"
        aria-hidden={!mobileOpen}
      >
        <div className="mobile-drawer-header">
          <Logo height={42} />
          <button
            type="button"
            className="menu-toggle"
            aria-label="Close Navigation Menu"
            onClick={() => setMobileOpen(false)}
          >
            <FiX />
          </button>
        </div>

        <nav className="mobile-nav-links">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
              end={item.path === '/'}
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="mobile-drawer-footer">
          <Link
            to="/contact#enquiry"
            className="btn btn-primary btn-block"
            onClick={() => setMobileOpen(false)}
          >
            <span>Get Free Consultation</span>
            <FiArrowRight />
          </Link>
        </div>
      </aside>
    </header>
  );
}
