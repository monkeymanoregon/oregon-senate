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

// Pre-generate static routes for all known spokes during build
export function generateStaticParams() {
  const params: { slug: string; spokeSlug: string }[] = [];
  
  issuesData.forEach((hub) => {
    if (hub.spokes) {
      hub.spokes.forEach((spoke) => {
        params.push({
          slug: hub.id,
          spokeSlug: spoke.id,
        });
      });
    }
  });

  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; spokeSlug: string }>;
}): Promise<Metadata> {
  const { slug, spokeSlug } = await params;
  const hub = issuesData.find((item) => item.id === slug);
  const spoke = hub?.spokes?.find((item) => item.id === spokeSlug);
  if (!hub || !spoke) return {};

  return pageMetadata({
    title: issueSeoTitle(spoke.id, spoke.title),
    description: issueDescription(spoke.title),
    path: `/issues/${hub.id}/${spoke.id}`,
    type: "article",
  });
}

export default async function SpokePage({ params }: { params: Promise<{ slug: string; spokeSlug: string }> }) {
  const { slug, spokeSlug } = await params;
  
  const hub = issuesData.find((i) => i.id === slug);
  if (!hub || !hub.spokes) {
    notFound();
  }

  const spoke = hub.spokes.find((s) => s.id === spokeSlug);
  if (!spoke) {
    notFound();
  }

  const canonicalUrl = `${SITE_URL}/issues/${hub.id}/${spoke.id}`;
  const officialSources = getOfficialSources(spoke.id, hub.id);
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: issueSeoTitle(spoke.id, spoke.title),
        description: issueDescription(spoke.title),
        datePublished: ISSUE_PUBLISHED_DATE,
        dateModified: SEO_REVIEW_DATE,
        mainEntityOfPage: canonicalUrl,
        author: { "@type": "Person", name: CANDIDATE_NAME, url: `${SITE_URL}/about` },
        publisher: { "@type": "Organization", name: "Tysan for Oregon State Senate District 3", url: SITE_URL },
        about: { "@type": "Thing", name: spoke.title },
        citation: officialSources.map((source) => source.url),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Issues", item: `${SITE_URL}/issues` },
          { "@type": "ListItem", position: 3, name: hub.title, item: `${SITE_URL}/issues/${hub.id}` },
          { "@type": "ListItem", position: 4, name: spoke.title, item: canonicalUrl },
        ],
      },
    ],
  };

  return (
    <div style={{ paddingTop: '80px' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(structuredData) }} />
      <section className="section-padding">
        <div className="container">
          <Link href={`/issues/${hub.id}`} style={{ display: 'inline-block', marginBottom: '2rem', color: 'var(--primary)', textDecoration: 'none', fontWeight: '500' }}>
            &larr; Back to {hub.title}
          </Link>

          <div style={{ marginBottom: '4rem' }}>
            <h1 className="section-title left-align" style={{ marginBottom: '1rem' }}>{spoke.title}</h1>
            <p className="section-subtitle" style={{ margin: 0, textAlign: 'left', maxWidth: '800px', marginBottom: '2rem', color: 'var(--text-muted)' }}>
              Factual background and legislative updates on this specific area of concern.
            </p>
            {spoke.background && spoke.background.map((paragraph, idx) => (
              <p key={idx} style={{ fontSize: '1.1rem', color: 'var(--text-dark)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                {paragraph}
              </p>
            ))}
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '1rem' }}>
              Last reviewed August 8, 2026.
            </p>
          </div>

          <LiveBills keywords={spoke.searchKeywords || hub.searchKeywords} />
          <OfficialSources sources={officialSources} />

        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: 'var(--bg-light)', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          <SolutionFeedback issueId={hub.id} spokeId={spoke.id} />
        </div>
      </section>
    </div>
  );
}
