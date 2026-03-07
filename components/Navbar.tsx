'use client';

import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="main-nav" id="main-nav">
      <div className="nav-inner">
        <a href="#" className="logo">
          <span className="logo-icon">
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="32" rx="6" fill="#963F36" />
              <path d="M16 6 L16 26 M6 16 L26 16" stroke="white" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </span>
          Dentiva
        </a>

        <button
          className={`hamburger${open ? ' active' : ''}`}
          id="hamburger"
          aria-label="Toggle navigation"
          onClick={() => setOpen(!open)}
        >
          <span></span><span></span><span></span>
        </button>

        <div className={`nav-pill${open ? ' open' : ''}`} id="nav-menu">
          <a href="#" className="dropdown" onClick={() => setOpen(false)}>ALL PAGES</a>
          <a href="#services" onClick={() => setOpen(false)}>SERVICES</a>
          <a href="#doctor-section" onClick={() => setOpen(false)}>DOCTOR</a>
          <a href="#" className="btn-primary" onClick={() => setOpen(false)}>BOOK AN APPOINTMENT</a>
        </div>
      </div>
    </nav>
  );
}
