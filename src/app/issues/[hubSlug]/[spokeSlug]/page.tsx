import { notFound } from "next/navigation";
import { issuesData } from "@/data/issues";
import InteractiveFeedback from "@/components/InteractiveFeedback";
import Link from "next/link";
import LiveBills from "@/components/LiveBills";
import PublicSentimentChart from "@/components/PublicSentimentChart";

// Pre-generate static routes for all known spokes during build
export function generateStaticParams() {
  const params: { hubSlug: string; spokeSlug: string }[] = [];
  
  issuesData.forEach((hub) => {
    if (hub.spokes) {
      hub.spokes.forEach((spoke) => {
        params.push({
          hubSlug: hub.id,
          spokeSlug: spoke.id,
        });
      });
    }
  });

  return params;
}

export default async function SpokePage({ params }: { params: Promise<{ hubSlug: string; spokeSlug: string }> }) {
  const { hubSlug, spokeSlug } = await params;
  
  const hub = issuesData.find((i) => i.id === hubSlug);
  if (!hub || !hub.spokes) {
    notFound();
  }

  const spoke = hub.spokes.find((s) => s.id === spokeSlug);
  if (!spoke) {
    notFound();
  }

  return (
    <div style={{ paddingTop: '80px' }}>
      <section className="section-padding">
        <div className="container">
          <Link href={`/issues/${hub.id}`} style={{ display: 'inline-block', marginBottom: '2rem', color: 'var(--primary)', textDecoration: 'none', fontWeight: '500' }}>
            &larr; Back to {hub.title}
          </Link>

          <div style={{ marginBottom: '4rem' }}>
            <h1 className="section-title left-align" style={{ marginBottom: '1rem' }}>{spoke.title}</h1>
            <p className="section-subtitle" style={{ margin: 0, textAlign: 'left', maxWidth: '800px', marginBottom: '2rem' }}>
              This is a critical part of the larger conversation around {hub.title.toLowerCase()}. I want to hear directly from you on this specific topic.
            </p>
            {spoke.background && spoke.background.map((paragraph, idx) => (
              <p key={idx} style={{ fontSize: '1.1rem', color: 'var(--text-dark)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                {paragraph}
              </p>
            ))}
          </div>

          <div style={{ backgroundColor: 'var(--bg-white)', padding: '2.5rem', borderRadius: '8px', boxShadow: 'var(--shadow-md)', border: '1px solid var(--border-color)', marginBottom: '3rem' }}>
            <h3 style={{ marginBottom: '1.5rem', color: 'var(--primary)', fontSize: '1.4rem' }}>Community Perspectives</h3>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-dark)', marginBottom: '1rem', lineHeight: '1.7' }}>
              When I speak with residents across District 3 about this, I hear a wide range of thoughtful ideas and valid concerns. {spoke.viewA}
            </p>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-dark)', lineHeight: '1.7' }}>
              {spoke.viewB}
            </p>
          </div>

          <div style={{ backgroundColor: 'var(--bg-light)', padding: '2rem', borderRadius: '8px', marginBottom: '4rem' }}>
            <h3 style={{ marginBottom: '1rem' }}>Key Tradeoffs</h3>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>{spoke.tradeoffs}</p>
          </div>

          <PublicSentimentChart issueId={spoke.id} />
          
          <LiveBills keywords={spoke.searchKeywords || hub.searchKeywords} />

        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: 'var(--bg-light)' }}>
        <div className="container text-center">
          <h2 className="section-title">Weigh In</h2>
          <p className="section-subtitle" style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--primary)', fontWeight: '600' }}>
            {spoke.feedbackPrompt}
          </p>
          <div style={{ marginTop: '2rem' }}>
            <InteractiveFeedback initialCategory={hub.categoryMap} />
          </div>
        </div>
      </section>
    </div>
  );
}
