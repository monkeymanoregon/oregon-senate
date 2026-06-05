export default function Issues() {
  return (
    <div style={{ paddingTop: '80px' }}>
      <section className="issues section-padding">
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
              <h3 className="issue-title">Fundraising Boycott & Reinvestment</h3>
              <p className="issue-desc">
                I will take zero money from this campaign, and zero lobbyist cash. 100% of campaign donations will go directly back into local grassroots community projects, charity initiatives, and community engagement.
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
    </div>
  );
}
