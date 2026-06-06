import Link from "next/link";
import { issuesData } from "@/data/issues";
import PriorityRanking from "@/components/PriorityRanking";

export default function IssuesIndex() {
  return (
    <div style={{ paddingTop: '80px' }}>
      <section className="section-padding">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <h1 className="section-title">Oregon Issues Library</h1>
            <p className="section-subtitle" style={{ maxWidth: '800px', margin: '0 auto', marginBottom: '1.5rem' }}>
              These issues matter to Oregonians, but residents disagree on the best solutions. 
              As your State Senator for District 3, I want to know what you actually want represented.
            </p>
          </div>

          <PriorityRanking />

          <div style={{ borderTop: '2px solid var(--border-color)', paddingTop: '4rem', marginTop: '4rem' }}>
            <div className="text-center" style={{ marginBottom: '3rem' }}>
              <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Explore Specific Issues</h2>
              <p style={{ color: 'var(--text-muted)' }}>Click into any topic below to view localized context, neighborhood perspectives, and live bills.</p>
            </div>

            <div className="issues-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              {issuesData.map((issue) => (
                <Link key={issue.id} href={`/issues/${issue.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div className="issue-card" style={{ height: '100%', display: 'flex', flexDirection: 'column', transition: 'transform 0.2s', cursor: 'pointer' }}>
                    <h3 className="issue-title" style={{ fontSize: '1.4rem', marginBottom: '1rem', color: 'var(--primary)' }}>
                      {issue.title}
                    </h3>
                    <p className="issue-desc" style={{ flexGrow: 1 }}>
                      {issue.viewA} {issue.viewB}
                    </p>
                    <div style={{ marginTop: '1.5rem', fontWeight: 'bold', color: 'var(--accent)' }}>
                      Weigh In &rarr;
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
