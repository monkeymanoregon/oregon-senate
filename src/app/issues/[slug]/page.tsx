import { notFound } from "next/navigation";
import { issuesData } from "@/data/issues";
import SolutionFeedback from "@/components/SolutionFeedback";
import Link from "next/link";
import LiveBills from "@/components/LiveBills";
import OfficialSources from "@/components/OfficialSources";
import { getOfficialSources } from "@/data/officialSources";
import {
  CANDIDATE_NAME,
  ISSUE_PUBLISHED_DATE,
  issueDescription,
  issueSeoTitle,
  jsonLd,
  pageMetadata,
  SEO_REVIEW_DATE,
  SITE_URL,
} from "@/lib/seo";
import type { Metadata } from "next";

// Pre-generate static routes for all known issues during build
export function generateStaticParams() {
  return issuesData.map((issue) => ({
    slug: issue.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const issue = issuesData.find((item) => item.id === slug);
  if (!issue) return {};

  return pageMetadata({
    title: issueSeoTitle(issue.id, issue.title),
    description: issueDescription(issue.title),
    path: `/issues/${issue.id}`,
    type: "article",
  });
}

export default async function IssuePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const issue = issuesData.find((i) => i.id === slug);

  if (!issue) {
    notFound();
  }

  const canonicalUrl = `${SITE_URL}/issues/${issue.id}`;
  const description = issueDescription(issue.title);
  const officialSources = getOfficialSources(issue.id);
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: issueSeoTitle(issue.id, issue.title),
        description,
        datePublished: ISSUE_PUBLISHED_DATE,
        dateModified: SEO_REVIEW_DATE,
        mainEntityOfPage: canonicalUrl,
        author: { "@type": "Person", name: CANDIDATE_NAME, url: `${SITE_URL}/about` },
        publisher: { "@type": "Organization", name: "Tysan for Oregon State Senate District 3", url: SITE_URL },
        about: { "@type": "Thing", name: issue.title },
        citation: officialSources.map((source) => source.url),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Issues", item: `${SITE_URL}/issues` },
          { "@type": "ListItem", position: 3, name: issue.title, item: canonicalUrl },
        ],
      },
    ],
  };

  return (
    <div style={{ paddingTop: '80px' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(structuredData) }} />
      <section className="section-padding">
        <div className="container">
          <Link href="/issues" style={{ display: 'inline-block', marginBottom: '2rem', color: 'var(--primary)', textDecoration: 'none', fontWeight: '500' }}>
            &larr; Back to Issues Library
          </Link>

          <div style={{ marginBottom: '4rem' }}>
            <h1 className="section-title left-align" style={{ marginBottom: '1rem' }}>{issue.title}</h1>
            <p className="section-subtitle" style={{ margin: 0, textAlign: 'left', maxWidth: '800px', marginBottom: '2rem', color: 'var(--text-muted)' }}>
              Factual background and legislative updates on key issues facing Jackson County.
            </p>
            {issue.background && issue.background.map((paragraph, idx) => (
              <p key={idx} style={{ fontSize: '1.1rem', color: 'var(--text-dark)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                {paragraph}
              </p>
            ))}
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '1rem' }}>
              Last reviewed August 8, 2026.
            </p>
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
          
          <LiveBills keywords={issue.searchKeywords} />
          <OfficialSources sources={officialSources} />

        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: 'var(--bg-light)', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          <SolutionFeedback issueId={issue.id} />
        </div>
      </section>
    </div>
  );
}
