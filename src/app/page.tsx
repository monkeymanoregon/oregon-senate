import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-content animate-fade-in-up">
            <span className="hero-badge">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px' }}>
                <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
                <line x1="4" y1="22" x2="4" y2="15"></line>
              </svg>
              A True Representative Democracy
            </span>
            <h1 className="hero-title">
              The Candidate Whose <span>Opinion Doesn't Matter</span>
            </h1>
            <p className="hero-description">
              I am running for the Oregon State Senate on a simple promise: I will vote based on what you actually want, not my own opinions. No special interests, no fundraising distractions—just pure representation of our community's majority.
            </p>
            <div className="hero-ctas">
              <Link href="/volunteer" className="btn btn-primary">Join the Campaign</Link>
              <Link href="/about" className="btn btn-outline">Read the Promise</Link>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <div className="hero-image-bg"></div>
            <div className="hero-image-container">
              <Image
                src="/candidate_hero.jpg"
                alt="Tysan - Candidate for Oregon State Senate"
                width={400}
                height={400}
                className="hero-image"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Tag Banner */}
      <section className="stats-banner">
        <div className="container stats-grid">
          <div className="stat-item">
            <div className="stat-number">100%</div>
            <div className="stat-label">Constituent Guided</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">$0</div>
            <div className="stat-label">Special Interest Cash</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">Real-Time</div>
            <div className="stat-label">Feedback Forums</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">True</div>
            <div className="stat-label">Direct Representation</div>
          </div>
        </div>
      </section>
    </>
  );
}
