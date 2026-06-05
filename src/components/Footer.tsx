import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div className="disclaimer-box">
            Paid for by me
          </div>
        </div>
        
        <div className="footer-grid">
          <div className="footer-about">
            <h3>Tysan for Senate</h3>
            <p>
              Pragmatic, direct democracy leadership focused entirely on voting in accordance with the will of the citizens of Oregon's District 3.
            </p>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul className="footer-links-list">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Tysan</Link></li>
              <li><Link href="/platform">Platform Promise</Link></li>
              <li><Link href="/bills">Vote on Bills</Link></li>
              <li><Link href="/issues">How It Works</Link></li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Get Involved</h4>
            <ul className="footer-links-list">
              <li><Link href="/volunteer">Volunteer Today</Link></li>
              <li><Link href="/donate">Contribute Safely</Link></li>
              <li><a href="mailto:tysanseo@gmail.com">Contact the Campaign</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Tysan for Oregon State Senate District 3. All rights reserved. Built with pride for Oregon.</p>
        </div>
      </div>
    </footer>
  );
}
