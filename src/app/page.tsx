"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [activeAmount, setActiveAmount] = useState<number | string>(100);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [donationSubmitted, setDonationSubmitted] = useState<boolean>(false);
  const [volunteerSubmitted, setVolunteerSubmitted] = useState<boolean>(false);

  const [volunteerData, setVolunteerData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    yardSign: false,
    phoneBank: false,
    hostEvent: false,
  });

  const handleDonationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDonationSubmitted(true);
    setTimeout(() => setDonationSubmitted(false), 5000);
  };

  const handleVolunteerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setVolunteerSubmitted(true);
    setTimeout(() => {
      setVolunteerSubmitted(false);
      setVolunteerData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        yardSign: false,
        phoneBank: false,
        hostEvent: false,
      });
    }, 5000);
  };

  const donationAmounts = [25, 50, 100, 250, 500];

  return (
    <>
      {/* Navbar */}
      <header className="navbar-header">
        <div className="container navbar-container">
          <a href="#" className="navbar-logo">
            TYSAN<span>.</span>
          </a>
          <nav>
            <ul className="navbar-links">
              <li><a href="#about" className="navbar-link">About the Platform</a></li>
              <li><a href="#issues" className="navbar-link">How it Works</a></li>
              <li><a href="#volunteer" className="navbar-link">Volunteer</a></li>
              <li><a href="#donate" className="navbar-link">Donate</a></li>
              <li>
                <a href="#donate" className="btn btn-nav-donate">
                  Support the Campaign
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

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
              <a href="#volunteer" className="btn btn-primary">Join the Campaign</a>
              <a href="#about" className="btn btn-outline">Read the Promise</a>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <div className="hero-image-bg"></div>
            <div className="hero-image-container">
              <Image
                src="/candidate_portrait.png"
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

      {/* About Tysan Section */}
      <section id="about" className="about section-padding">
        <div className="container about-grid">
          <div className="hero-image-wrapper">
            <div className="hero-image-bg" style={{ transform: 'rotate(3deg)', background: 'linear-gradient(135deg, rgba(185, 28, 28, 0.1) 0%, rgba(30, 58, 138, 0.1) 100%)' }}></div>
            <div className="hero-image-container" style={{ border: '4px solid var(--bg-white)' }}>
              <Image
                src="/candidate_portrait.png"
                alt="Tysan Campaign Headshot"
                width={400}
                height={400}
                className="hero-image"
              />
            </div>
          </div>
          <div className="about-text">
            <h2 className="section-title left-align">The Promise of Representation</h2>
            <p style={{ marginTop: '1.5rem' }}>
              For too long, politicians have entered office to push their own agendas, follow party lines, or spend their time dialing for dollars. They vote based on backroom deals rather than the actual will of their constituents.
            </p>
            <p>
              I believe a representative's job is to represent, not to dictate. That's why I'm running on a unique platform: my personal opinion doesn't matter. My votes in the Senate will be determined directly by the majority of the people I represent.
            </p>
            <div className="about-quote">
              "A politician's job shouldn't be about raising money or forcing a personal agenda. It should be about listening to the majority and casting votes accordingly. That is how a real democracy should work."
            </div>
            <p>
              We will utilize secure, modern online tools alongside classic, face-to-face town halls to ensure every voter has a direct say on upcoming bills. I won't make my time in office about fundraising or campaign posturing. I will spend it listening to you.
            </p>
          </div>
        </div>
      </section>

      {/* Core Issues Section */}
      <section id="issues" className="issues section-padding">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">How Direct Representation Works</h2>
            <p className="section-subtitle">
              A modern, citizen-first approach to state governance that returns power to the voter.
            </p>
          </div>

          <div className="issues-grid">
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
                My votes on the Senate floor are yours to command. For every major bill, I will survey the district to see exactly where the majority stands. That majority vote will dictate exactly how I vote on the Senate floor.
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
              <h3 className="issue-title">Modern Digital Democracy</h3>
              <p className="issue-desc">
                We will build secure, transparent online feedback portals. You'll be able to view upcoming bills, read simple summaries, and vote in real-time on how you want our district represented.
              </p>
            </div>

            <div className="issue-card">
              <div className="issue-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>
                </svg>
              </div>
              <h3 className="issue-title">Fundraising Boycott</h3>
              <p className="issue-desc">
                I will not spend my time in office dialing for dollars or hosting exclusive lobbyist dinners. My service will be completely grassroots. I am there to represent you, not political action committees.
              </p>
            </div>

            <div className="issue-card">
              <div className="issue-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </div>
              <h3 className="issue-title">In-Person Town Halls</h3>
              <p className="issue-desc">
                Digital polls are just one piece. I will regularly travel the district to host open, face-to-face town halls, listening to your stories and discussing local challenges directly with you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section id="volunteer" className="volunteer section-padding">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">Join the Movement</h2>
            <p className="section-subtitle">
              Help us prove that a true representation model works. Sign up today to volunteer.
            </p>
          </div>

          <div className="volunteer-card">
            {volunteerSubmitted ? (
              <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '1.5rem', animation: 'fadeIn 0.5s ease' }}>
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <h3 style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>Thank You for Signing Up!</h3>
                <p style={{ color: 'var(--text-muted)' }}>We appreciate your support. A campaign coordinator will reach out to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleVolunteerSubmit}>
                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label" htmlFor="firstName">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      required
                      value={volunteerData.firstName}
                      onChange={(e) => setVolunteerData({ ...volunteerData, firstName: e.target.value })}
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="lastName">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      required
                      value={volunteerData.lastName}
                      onChange={(e) => setVolunteerData({ ...volunteerData, lastName: e.target.value })}
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={volunteerData.email}
                      onChange={(e) => setVolunteerData({ ...volunteerData, email: e.target.value })}
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={volunteerData.phone}
                      onChange={(e) => setVolunteerData({ ...volunteerData, phone: e.target.value })}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="checkbox-group">
                  <span className="form-label" style={{ marginBottom: '0.5rem', display: 'block' }}>How would you like to support the campaign?</span>
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      checked={volunteerData.yardSign}
                      onChange={(e) => setVolunteerData({ ...volunteerData, yardSign: e.target.checked })}
                    />
                    I want a campaign yard sign
                  </label>
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      checked={volunteerData.phoneBank}
                      onChange={(e) => setVolunteerData({ ...volunteerData, phoneBank: e.target.checked })}
                    />
                    I can help make phone calls or knock on doors
                  </label>
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      checked={volunteerData.hostEvent}
                      onChange={(e) => setVolunteerData({ ...volunteerData, hostEvent: e.target.checked })}
                    />
                    I would like to host a meet-and-greet in my community
                  </label>
                </div>

                <button type="submit" className="btn btn-primary btn-submit">
                  Submit Signup
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section id="donate" className="donation section-padding">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">Support the Campaign</h2>
            <p className="section-subtitle">
              Grassroots support keeps us independent. Every dollar helps us reach more Oregonians.
            </p>
          </div>

          <div className="donation-card">
            {donationSubmitted ? (
              <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '1.5rem', animation: 'fadeIn 0.5s ease' }}>
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
                <h3 style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>Thank You for Your Support!</h3>
                <p style={{ color: 'var(--text-muted)' }}>
                  Your contribution of <strong>${customAmount || activeAmount}</strong> makes a massive difference. 
                  Together, we are fighting for Oregon's future.
                </p>
              </div>
            ) : (
              <form onSubmit={handleDonationSubmit}>
                <div className="donation-grid">
                  {donationAmounts.map((amount) => (
                    <button
                      key={amount}
                      type="button"
                      onClick={() => {
                        setActiveAmount(amount);
                        setCustomAmount("");
                      }}
                      className={`donation-amount-btn ${activeAmount === amount && !customAmount ? "active" : ""}`}
                    >
                      ${amount}
                    </button>
                  ))}
                  <button
                    type="button"
                    onClick={() => {
                      setActiveAmount("custom");
                      if (document.getElementById("custom-input")) {
                        document.getElementById("custom-input")?.focus();
                      }
                    }}
                    className={`donation-amount-btn ${activeAmount === "custom" ? "active" : ""}`}
                  >
                    Custom
                  </button>
                </div>

                {activeAmount === "custom" && (
                  <div className="donation-custom animate-fade-in">
                    <span className="donation-custom-symbol">$</span>
                    <input
                      id="custom-input"
                      type="number"
                      placeholder="Enter amount"
                      required
                      value={customAmount}
                      onChange={(e) => setCustomAmount(e.target.value)}
                      className="donation-custom-input"
                      min="5"
                    />
                  </div>
                )}

                <button type="submit" className="btn btn-primary btn-submit" style={{ backgroundColor: 'var(--accent)', animation: 'pulseBorder 2s infinite' }}>
                  Contribute ${customAmount || activeAmount}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <div className="disclaimer-box">
              Paid for by the Committee to Elect Tysan
            </div>
          </div>
          
          <div className="footer-grid">
            <div className="footer-about">
              <h3>Tysan for Senate</h3>
              <p>
                Pragmatic, direct democracy leadership focused entirely on voting in accordance with the will of Oregon's district citizens.
              </p>
            </div>
            <div className="footer-links">
              <h4>Quick Links</h4>
              <ul className="footer-links-list">
                <li><a href="#">Back to Top</a></li>
                <li><a href="#about">Platform Promise</a></li>
                <li><a href="#issues">How It Works</a></li>
              </ul>
            </div>
            <div className="footer-links">
              <h4>Get Involved</h4>
              <ul className="footer-links-list">
                <li><a href="#volunteer">Volunteer Today</a></li>
                <li><a href="#donate">Contribute Safely</a></li>
                <li><a href="mailto:tysanseo@gmail.com">Contact the Campaign</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Tysan for Oregon State Senate. All rights reserved. Built with pride for Oregon.</p>
          </div>
        </div>
      </footer>
    </>
  );
}


