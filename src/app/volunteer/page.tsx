"use client";

import { useState } from "react";

export default function Volunteer() {
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

  return (
    <div style={{ paddingTop: '80px', minHeight: '80vh' }}>
      <section className="volunteer section-padding">
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
    </div>
  );
}
