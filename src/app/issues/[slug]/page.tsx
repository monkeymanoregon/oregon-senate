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
            <p className="section-subtitle" style={{ margin: 0, textAlign: 'left', maxWidth: '800px' }}>
              Residents disagree on the best solution for this issue. I want to know what you actually want represented.
            </p>
          </div>

          <div className="issue-views-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
            <div className="view-card" style={{ padding: '2rem', backgroundColor: 'var(--bg-white)', borderLeft: '4px solid var(--primary)', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
              <h3 style={{ marginBottom: '1rem', color: 'var(--primary)' }}>Perspective A</h3>
              <p>{issue.viewA}</p>
            </div>
            
            <div className="view-card" style={{ padding: '2rem', backgroundColor: 'var(--bg-white)', borderLeft: '4px solid var(--accent)', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
              <h3 style={{ marginBottom: '1rem', color: 'var(--accent)' }}>Perspective B</h3>
              <p>{issue.viewB}</p>
            </div>
          </div>

          <div style={{ backgroundColor: 'var(--bg-light)', padding: '2rem', borderRadius: '8px', marginBottom: '4rem' }}>
            <h3 style={{ marginBottom: '1rem' }}>Key Tradeoffs</h3>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>{issue.tradeoffs}</p>
          </div>

          <div className="feedback-container" id="feedback">
            <div className="text-center" style={{ marginBottom: '2rem' }}>
              <h2 className="section-title">Weigh In</h2>
              <p className="section-subtitle" style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--primary)', fontWeight: '600' }}>
                {issue.feedbackPrompt}
              </p>
            </div>
            <InteractiveFeedback initialCategory={issue.categoryMap} />
          </div>
        </div>
      </section>
    </div>
  );
}
