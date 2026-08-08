import Link from "next/link";
import { issuesData } from "@/data/issues";
import PriorityRanking from "@/components/PriorityRanking";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Oregon Senate District 3 Issues | Jackson County & Rogue Valley",
  description: "Explore Oregon Senate District 3 issues affecting Medford, Ashland, Phoenix, Talent, Jacksonville, Ruch and the Applegate Valley, then share your priorities.",
  path: "/issues",
});

export default function IssuesIndex() {
  return (
    <div style={{ paddingTop: '80px' }}>
      <section className="section-padding">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <h1 className="section-title">Oregon Issues Library</h1>
            <p className="section-subtitle" style={{ maxWidth: '800px', margin: '0 auto', marginBottom: '1.5rem' }}>
              Explore the factual background and current legislative bills for key issues facing Jackson County. 
              Review what our communities are dealing with, and let me know how you think each issue should be solved.
            </p>
            <p style={{ margin: 0 }}>
              <Link href="/oregon-senate-district-3" style={{ color: 'var(--primary)', fontWeight: 600, marginRight: '1rem' }}>
                District 3 guide
              </Link>
              <Link href="/district-3-updates" style={{ color: 'var(--primary)', fontWeight: 600 }}>
                What&apos;s happening in District 3
              </Link>
            </p>
          </div>

          <PriorityRanking />

          <div style={{ borderTop: '2px solid var(--border-color)', paddingTop: '4rem', marginTop: '4rem' }}>
            <div className="text-center" style={{ marginBottom: '3rem' }}>
              <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Explore Specific Issues</h2>
              <p style={{ color: 'var(--text-muted)' }}>Click into any topic below to view localized factual context and live bills.</p>
            </div>

            <div className="issues-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              {issuesData.map((issue) => (
                <Link key={issue.id} href={`/issues/${issue.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div className="issue-card" style={{ height: '100%', display: 'flex', flexDirection: 'column', transition: 'transform 0.2s', cursor: 'pointer' }}>
                    <h3 className="issue-title" style={{ fontSize: '1.4rem', marginBottom: '1rem', color: 'var(--primary)' }}>
                      {issue.title}
                    </h3>
                    <p className="issue-desc" style={{ flexGrow: 1, fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                      {issue.background?.[0] 
                        ? (issue.background[0].length > 150 
                            ? `${issue.background[0].substring(0, 150)}...` 
                            : issue.background[0])
                        : issue.purpose}
                    </p>
                    <div style={{ marginTop: '1.5rem', fontWeight: 'bold', color: 'var(--accent)' }}>
                      Share Your Solution &rarr;
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
