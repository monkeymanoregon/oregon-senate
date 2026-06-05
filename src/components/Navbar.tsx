"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="navbar-header">
      <div className="container navbar-container">
        <Link href="/" className="navbar-logo" onClick={() => setMobileMenuOpen(false)}>
          TYSAN<span>.</span>
        </Link>
        <button 
          className="mobile-menu-btn" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="mobile-menu-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {mobileMenuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </>
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </>
            )}
          </svg>
        </button>
        <nav>
          <ul className={`navbar-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <li><Link href="/about" className="navbar-link" onClick={() => setMobileMenuOpen(false)}>About Tysan</Link></li>
            <li><Link href="/platform" className="navbar-link" onClick={() => setMobileMenuOpen(false)}>The Platform</Link></li>
            <li><Link href="/bills" className="navbar-link" onClick={() => setMobileMenuOpen(false)}>Vote on Bills</Link></li>
            <li><Link href="/issues" className="navbar-link" onClick={() => setMobileMenuOpen(false)}>Issues</Link></li>
            <li><Link href="/how-it-works" className="navbar-link" onClick={() => setMobileMenuOpen(false)}>How it Works</Link></li>
            <li><Link href="/volunteer" className="navbar-link" onClick={() => setMobileMenuOpen(false)}>Volunteer</Link></li>
            <li><Link href="/donate" className="navbar-link" onClick={() => setMobileMenuOpen(false)}>Donate</Link></li>
            <li>
              <Link href="/donate" className="btn btn-nav-donate" onClick={() => setMobileMenuOpen(false)}>
                Support The Community
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
