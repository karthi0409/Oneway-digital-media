import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Brand Logo component with PNG and inline/SVG fallback
 * @param {{ height?: number, showLink?: boolean, className?: string }} props
 */
export default function Logo({ height = 46, showLink = true, className = '' }) {
  const content = (
    <div className={`brand-logo-wrap ${className}`} style={{ minHeight: height }}>
      <img
        src="/brand/logo.svg"
        alt="One Way Digital Media"
        className="brand-logo-svg-fallback"
        style={{ height }}
      />
    </div>
  );

  if (showLink) {
    return (
      <Link to="/" aria-label="One Way Digital Media - Home">
        {content}
      </Link>
    );
  }

  return content;
}
