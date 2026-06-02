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
              <li><a href="#about" className="navbar-link">About</a></li>
              <li><a href="#issues" className="navbar-link">Issues</a></li>
              <li><a href="#volunteer" className="navbar-link">Volunteer</a></li>
              <li><a href="#donate" className="navbar-link">Donate</a></li>
              <li>
                <a href="#donate" className="btn btn-nav-donate">
                  Donate Now
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
              Oregon State Senate Candidate
            </span>
            <h1 className="hero-title">
              A Strong Voice for <span>Oregon's Future</span>
            </h1>
            <p className="hero-description">
              As a dedicated community advocate and pragmatic problem solver, I am running for the Oregon State Senate to deliver real, sensible results. Together, we can foster local economic opportunity, elevate our public schools, and protect our communities.
            </p>
            <div className="hero-ctas">
              <a href="#volunteer" className="btn btn-primary">Join the Campaign</a>
              <a href="#about" className="btn btn-outline">Read the Vision</a>
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
            <div className="stat-label">Oregon Focused</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">Grassroots</div>
            <div className="stat-label">Funded & Driven</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">Pragmatic</div>
            <div className="stat-label">Solutions First</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">Unified</div>
            <div className="stat-label">Community Action</div>
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
            <h2 className="section-title left-align">Meet Tysan</h2>
            <p style={{ marginTop: '1.5rem' }}>
              Oregon has always been a state built on resilience, forward-thinking, and strong local communities. But today, many Oregonians feel their voices are drowned out by partisan division and political gridlock.
            </p>
            <p>
              I am running for the Oregon State Senate to bridge that gap. With a professional background rooted in practical engineering, digital innovation, and business operations, I know how to look at complex systems, find the inefficiencies, and build real solutions that work for everyday people.
            </p>
            <div className="about-quote">
              "We don't need ideological battles. We need practical leadership that focuses on measurable outcomes—improving our schools, helping small businesses grow, and keeping our neighborhoods safe."
            </div>
            <p>
              I believe in transparent governance, fiscal responsibility, and ensuring that our state policies directly reflect the needs and values of the communities we represent. I invite you to join me on this journey as we work to build a stronger, more prosperous Oregon.
            </p>
          </div>
        </div>
      </section>

      {/* Core Issues Section */}
      <section id="issues" className="issues section-padding">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">Core Campaign Issues</h2>
            <p className="section-subtitle">
              A comprehensive platform tailored to tackle Oregon's most pressing challenges.
            </p>
          </div>

          <div className="issues-grid">
            <div className="issue-card">
              <div className="issue-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="1" x2="12" y2="23"></line>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <h3 className="issue-title">Economic Stability & Growth</h3>
              <p className="issue-desc">
                Supporting local Oregon businesses and families by reducing regulatory bottlenecks, promoting workforce training programs, and creating a tax structure that rewards innovation and job creation.
              </p>
            </div>

            <div className="issue-card">
              <div className="issue-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                </svg>
              </div>
              <h3 className="issue-title">Empowering Education</h3>
              <p className="issue-desc">
                Ensuring our schools have the resources, curriculum, and technology needed to prepare pupils for the modern global economy. We will prioritize direct classroom funding and career-technical education.
              </p>
            </div>

            <div className="issue-card">
              <div className="issue-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              </div>
              <h3 className="issue-title">Safe & Resilient Communities</h3>
              <p className="issue-desc">
                Investing in local infrastructure, improving emergency response capabilities, and supporting community policing initiatives that build trust, reduce crime, and keep our neighborhoods secure.
              </p>
            </div>

            <div className="issue-card">
              <div className="issue-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <h3 className="issue-title">Accessible Healthcare</h3>
              <p className="issue-desc">
                Enhancing healthcare options in both rural and urban Oregon, expanding mental health support systems, and introducing measures to lower the out-of-pocket costs of life-saving prescriptions.
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
              Change starts in our own backyard. Sign up today to help us build a better Oregon.
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
              Your financial support keeps us competitive and helps us spread our message across the entire district.
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
                Pragmatic leadership focused on positive, measurable improvements in public safety, local economic opportunities, and public education. Let's make Oregon work for everyone.
              </p>
            </div>
            <div className="footer-links">
              <h4>Quick Links</h4>
              <ul className="footer-links-list">
                <li><a href="#">Back to Top</a></li>
                <li><a href="#about">Meet the Candidate</a></li>
                <li><a href="#issues">Campaign Issues</a></li>
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

