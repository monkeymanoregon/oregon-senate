"use client";

import { useState } from "react";

export default function Donate() {
  const [activeAmount, setActiveAmount] = useState<number | string>(100);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [donationSubmitted, setDonationSubmitted] = useState<boolean>(false);
  const donationAmounts = [10, 25, 50, 100, 250, 500];

  const handleDonationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDonationSubmitted(true);
    setTimeout(() => setDonationSubmitted(false), 5000);
  };

  return (
    <div style={{ paddingTop: '80px', minHeight: '80vh' }}>
      <section className="donation section-padding">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">Support The Community</h2>
            <p className="section-subtitle">
              All campaign contributions will go directly back into the community. I will take zero money from this campaign, and every dollar donated will fund community projects, town halls, and local advocacy.
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
    </div>
  );
}
