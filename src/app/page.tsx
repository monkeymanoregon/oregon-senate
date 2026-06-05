import Image from "next/image";
import Link from "next/link";
import InteractiveFeedback from "@/components/InteractiveFeedback";

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
              I am running to represent District 3 in the Oregon State Senate on a simple promise: I will vote based on what you actually want, not my own opinions. No special interests, no fundraising distractions—just pure representation. I will vote exactly how you tell me to.
            </p>
            <div className="hero-ctas" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%', maxWidth: '400px' }}>
              <Link href="/bills" className="btn btn-primary" style={{ width: '100%', fontSize: '1.1rem', padding: '1rem' }}>
                Vote on Live Senate Bills
              </Link>
              <div style={{ display: 'flex', gap: '1rem', width: '100%' }}>
                <Link href="/about" className="btn btn-outline" style={{ flex: 1, padding: '0.75rem', textAlign: 'center' }}>Read the Promise</Link>
                <Link href="/volunteer" className="btn btn-outline" style={{ flex: 1, padding: '0.75rem', textAlign: 'center' }}>Volunteer</Link>
              </div>
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

      {/* Platform Summary Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-white)' }}>
        <div className="container text-center">
          <h2 className="section-title">The Promise of Representation</h2>
          <p className="section-subtitle">
            A modern, citizen-first approach to state governance that returns power to the voter. I will vote based on district consensus, not my personal opinion.
          </p>
          
          <div className="issues-grid" style={{ marginBottom: '3rem', textAlign: 'left' }}>
            <div className="issue-card">
              <div className="issue-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="issue-title">Constituent-Led Voting</h3>
              <p className="issue-desc">
                My votes on the Senate floor are yours to command. The district majority vote dictates exactly how I vote on every major bill.
              </p>
            </div>

            <div className="issue-card">
              <div className="issue-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </div>
              <h3 className="issue-title">Digital Democracy</h3>
              <p className="issue-desc">
                View upcoming bills, read simple summaries, and vote in real-time through secure online portals on how you want our district represented.
              </p>
            </div>
          </div>
          
          <Link href="/about" className="btn btn-outline" style={{ display: 'inline-flex', margin: '0 auto' }}>
            Read the Full Platform
          </Link>
        </div>
      </section>

      {/* Interactive Feedback Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-light)' }}>
        <div className="container text-center">
          <h2 className="section-title">Let me know what you think</h2>
          <p className="section-subtitle">
            Your voice drives this campaign. Let me know what issues are important to you and what I should be paying attention to in District 3.
          </p>
          <div style={{ marginTop: '2rem' }}>
            <InteractiveFeedback />
          </div>
        </div>
      </section>

      {/* Support CTA Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-light)', borderTop: '1px solid var(--border-color)' }}>
        <div className="container text-center">
          <h2 className="section-title">Support The Community</h2>
          <p className="section-subtitle">
            I will take zero money from this campaign, and zero lobbyist cash. 100% of campaign donations will go directly back into local grassroots community projects and engagement.
          </p>
          <div style={{ marginTop: '2rem' }}>
            <Link href="/donate" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
              Donate Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
