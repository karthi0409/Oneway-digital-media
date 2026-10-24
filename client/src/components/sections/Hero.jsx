import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiPhone, FiMapPin, FiTrendingUp, FiBarChart2, FiCheck } from 'react-icons/fi';
import Ribbon from '../ui/Ribbon.jsx';
import { company } from '../../data/company.js';

export default function Hero() {
  const heroRef = useRef(null);
  const audiences = [
    'Startups & Innovators',
    'Local SMBs & Clinics',
    'D2C & E-Commerce',
    'Real Estate & B2B',
  ];

  return (
    <>
      <section
        ref={heroRef}
        className="hero-section"
        aria-label="Hero Introduction"
        onPointerMove={(event) => {
          if (
            event.pointerType === 'touch' ||
            window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
            !heroRef.current
          ) return;
          const bounds = heroRef.current.getBoundingClientRect();
          const x = (event.clientX - bounds.left) / bounds.width - 0.5;
          const y = (event.clientY - bounds.top) / bounds.height - 0.5;
          heroRef.current.style.setProperty('--visual-x', `${(x * 12).toFixed(2)}px`);
          heroRef.current.style.setProperty('--visual-y', `${(y * 12).toFixed(2)}px`);
          heroRef.current.style.setProperty('--orb-one-x', `${(x * -26).toFixed(2)}px`);
          heroRef.current.style.setProperty('--orb-one-y', `${(y * -20).toFixed(2)}px`);
          heroRef.current.style.setProperty('--orb-two-x', `${(x * 34).toFixed(2)}px`);
          heroRef.current.style.setProperty('--orb-two-y', `${(y * 26).toFixed(2)}px`);
        }}
        onPointerLeave={() => {
          heroRef.current?.style.setProperty('--visual-x', '0px');
          heroRef.current?.style.setProperty('--visual-y', '0px');
          heroRef.current?.style.setProperty('--orb-one-x', '0px');
          heroRef.current?.style.setProperty('--orb-one-y', '0px');
          heroRef.current?.style.setProperty('--orb-two-x', '0px');
          heroRef.current?.style.setProperty('--orb-two-y', '0px');
        }}
      >
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-orb hero-orb-one" aria-hidden="true" />
        <div className="hero-orb hero-orb-two" aria-hidden="true" />
        <div className="container">
          <div className="hero-content">
            <div className="hero-copy">
              <div className="hero-badge">
                <FiTrendingUp />
                <span>Digital Growth Partner</span>
              </div>

              <h1 className="hero-title">
                <span className="title-line">Digital that</span>
                <span className="title-line lime-word">moves business</span>
                <span className="title-line">forward.</span>
              </h1>

              <p className="hero-pillars">
                Strategy <span>•</span> Content <span>•</span> Advertising <span>•</span> Technology
              </p>

              <p className="hero-lead">
                We bring strategy, creativity and performance together to build your brand, reach the right people and turn attention into sustainable growth.
              </p>

              <div className="hero-actions">
                <Link to="/services" className="btn btn-primary btn-lg">
                  <span>Explore Our Services</span>
                  <FiArrowRight />
                </Link>
                <Link to="/contact#enquiry" className="btn btn-outline btn-lg">
                  <span>Let’s Talk</span>
                </Link>
              </div>
            </div>

            <div className="hero-visual" aria-hidden="true">
              <div className="growth-card glass-card">
                <div className="growth-card-header">
                  <div>
                    <span className="growth-eyebrow">THE GROWTH LOOP</span>
                    <h2>Make every move count.</h2>
                  </div>
                  <span className="growth-icon"><FiBarChart2 /></span>
                </div>
                <div className="growth-chart" aria-hidden="true">
                  <span style={{ height: '36%' }} />
                  <span style={{ height: '52%' }} />
                  <span style={{ height: '44%' }} />
                  <span style={{ height: '68%' }} />
                  <span style={{ height: '60%' }} />
                  <span style={{ height: '82%' }} />
                  <span style={{ height: '100%' }} />
                </div>
                <div className="growth-card-footer">
                  <span><i /> Strategy-led. Data-backed.</span>
                  <span className="growth-status"><FiCheck /> Ready to grow</span>
                </div>
              </div>
              <div className="growth-note glass-card">
                <span className="growth-note-icon"><FiTrendingUp /></span>
                <span><strong>One team.</strong><small>From first click to real growth.</small></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lime Ribbon */}
      <Ribbon text="Strategy • Content • Advertising • Technology" />

      {/* Hero Bottom Audience Bar */}
      <div className="hero-bottom-strip">
        <div className="container">
          <div className="hero-audiences">
            {audiences.map((aud, index) => (
              <span key={index} className="hero-audience-tag">
                {aud}
              </span>
            ))}
          </div>
          <div className="hero-location-contact">
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
              <FiMapPin style={{ color: 'var(--lime)' }} />
              {company.address}
            </span>
            <a href={`tel:${company.phone}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
              <FiPhone style={{ color: 'var(--lime)' }} />
              Contact: {company.phone}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
