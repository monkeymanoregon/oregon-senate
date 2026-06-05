import { notFound } from "next/navigation";
import { issuesData } from "@/data/issues";
import InteractiveFeedback from "@/components/InteractiveFeedback";
import Link from "next/link";

// Pre-generate static routes for all known issues during build
export function generateStaticParams() {
  return issuesData.map((issue) => ({
    slug: issue.id,
  }));
}

export default async function IssuePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const issue = issuesData.find((i) => i.id === slug);

  if (!issue) {
    notFound();
  }

  return (
    <div style={{ paddingTop: '80px' }}>
      <section className="section-padding">
        <div className="container">
          <Link href="/issues" style={{ display: 'inline-block', marginBottom: '2rem', color: 'var(--primary)', textDecoration: 'none', fontWeight: '500' }}>
            &larr; Back to Issues Library
          </Link>

          <div style={{ marginBottom: '4rem' }}>
            <h1 className="section-title left-align" style={{ marginBottom: '1rem' }}>{issue.title}</h1>
            <p className="section-subtitle" style={{ margin: 0, textAlign: 'left', maxWidth: '800px', marginBottom: '2rem' }}>
              Residents disagree on the best solution for this issue. I want to know what you actually want represented.
            </p>
            {issue.background && issue.background.map((paragraph, idx) => (
              <p key={idx} style={{ fontSize: '1.1rem', color: 'var(--text-dark)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                {paragraph}
              </p>
            ))}
          </div>

          <div style={{ backgroundColor: 'var(--bg-white)', padding: '2.5rem', borderRadius: '8px', boxShadow: 'var(--shadow-md)', border: '1px solid var(--border-color)', marginBottom: '3rem' }}>
            <h3 style={{ marginBottom: '1.5rem', color: 'var(--primary)', fontSize: '1.4rem' }}>Community Perspectives</h3>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-dark)', marginBottom: '1rem', lineHeight: '1.7' }}>
              When I speak with residents across District 3, I hear a wide range of thoughtful ideas and valid concerns. {issue.viewA}
            </p>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-dark)', lineHeight: '1.7' }}>
              {issue.viewB}
            </p>
          </div>

          <div style={{ backgroundColor: 'var(--bg-light)', padding: '2rem', borderRadius: '8px', marginBottom: '4rem' }}>
            <h3 style={{ marginBottom: '1rem' }}>Key Tradeoffs</h3>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>{issue.tradeoffs}</p>
          </div>

          {issue.spokes && issue.spokes.length > 0 && (
            <div style={{ marginBottom: '4rem' }}>
              <h3 style={{ marginBottom: '1.5rem', color: 'var(--primary)', fontSize: '1.5rem', borderBottom: '2px solid var(--border-color)', paddingBottom: '0.5rem' }}>Deep Dives & Specific Topics</h3>
              <p style={{ marginBottom: '1.5rem', color: 'var(--text-muted)' }}>
                This is a broad issue. Select a specific topic below to explore the details and share your feedback on that specific area:
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1.5rem' }}>
                {issue.spokes.map((spoke) => (
                  <Link 
                    key={spoke.id} 
                    href={`/issues/${issue.id}/${spoke.id}`}
                    style={{ 
                      display: 'block', 
                      padding: '1.5rem', 
                      backgroundColor: 'var(--bg-white)', 
                      border: '1px solid var(--border-color)',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      color: 'inherit',
                      boxShadow: 'var(--shadow-sm)',
                      transition: 'transform 0.2s'
                    }}
                    className="spoke-card"
                  >
                    <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem', fontSize: '1.1rem' }}>{spoke.title}</h4>
                    <span style={{ color: 'var(--accent)', fontWeight: '600', fontSize: '0.9rem' }}>Read More &rarr;</span>
                  </Link>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: 'var(--bg-light)' }}>
        <div className="container text-center">
          <h2 className="section-title">Weigh In</h2>
          <p className="section-subtitle" style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--primary)', fontWeight: '600' }}>
            {issue.feedbackPrompt}
          </p>
          <div style={{ marginTop: '2rem' }}>
            <InteractiveFeedback initialCategory={issue.categoryMap} />
          </div>
        </div>
      </section>
    </div>
  );
}
