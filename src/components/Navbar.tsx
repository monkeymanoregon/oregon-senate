"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const links = [
  { href: "/about", label: "About" },
  { href: "/platform", label: "Platform" },
  { href: "/issues", label: "Issues" },
  { href: "/bills", label: "Bills" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/volunteer", label: "Volunteer" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMobileMenuOpen(false); }, [pathname]);

  return (
    <header className={`navbar-header${scrolled ? " navbar-scrolled" : ""}`}>
      <div className="container navbar-container">
        <Link href="/" className="navbar-logo">
          TYSAN<span>.</span>
        </Link>

        <nav>
          <ul className={`navbar-links ${mobileMenuOpen ? "mobile-open" : ""}`}>
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`navbar-link${pathname.startsWith(href) ? " navbar-link-active" : ""}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/donate"
                className="btn btn-nav-donate"
                onClick={() => setMobileMenuOpen(false)}
              >
                Donate
              </Link>
            </li>
          </ul>
        </nav>

        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          <span className={`hamburger${mobileMenuOpen ? " hamburger-open" : ""}`}>
            <span />
            <span />
            <span />
          </span>
        </button>
      </div>
    </header>
  );
}
