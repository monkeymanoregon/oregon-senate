import Link from "next/link";

export default function Navbar() {
  return (
    <header className="navbar-header">
      <div className="container navbar-container">
        <Link href="/" className="navbar-logo">
          TYSAN<span>.</span>
        </Link>
        <nav>
          <ul className="navbar-links">
            <li><Link href="/about" className="navbar-link">About Tysan</Link></li>
            <li><Link href="/platform" className="navbar-link">The Platform</Link></li>
            <li><Link href="/bills" className="navbar-link">Vote on Bills</Link></li>
            <li><Link href="/issues" className="navbar-link">How it Works</Link></li>
            <li><Link href="/volunteer" className="navbar-link">Volunteer</Link></li>
            <li><Link href="/donate" className="navbar-link">Donate</Link></li>
            <li>
              <Link href="/donate" className="btn btn-nav-donate">
                Support The Community
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
