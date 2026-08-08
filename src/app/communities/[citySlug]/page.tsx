import { notFound } from "next/navigation";
import Link from "next/link";
import { communitiesData, getCommunity } from "@/data/communities";
import { jsonLd, pageMetadata, SITE_URL } from "@/lib/seo";
import type { Metadata } from "next";

export function generateStaticParams() {
  return communitiesData.map((c) => ({
    citySlug: c.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ citySlug: string }>;
}): Promise<Metadata> {
  const { citySlug } = await params;
  const community = getCommunity(citySlug);
  if (!community) return {};

  return pageMetadata({
    title: `${community.name} Oregon | District 3 Issues & Community Guide`,
    description: community.description,
    path: `/communities/${community.id}`,
    type: "article",
  });
}

export default async function CommunityPage({
  params,
}: {
  params: Promise<{ citySlug: string }>;
}) {
  const { citySlug } = await params;
  const community = getCommunity(citySlug);

  if (!community) {
    notFound();
  }

  const canonicalUrl = `${SITE_URL}/communities/${community.id}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${canonicalUrl}#page`,
        url: canonicalUrl,
        name: `${community.name} Oregon | District 3 Issues & Community Guide`,
        description: community.description,
        about: {
          "@type": "AdministrativeArea",
          name: `${community.name}, Oregon`,
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Communities", item: `${SITE_URL}/communities` },
          { "@type": "ListItem", position: 3, name: community.name, item: canonicalUrl },
        ],
      },
    ],
  };

  return (
    <div style={{ paddingTop: '80px' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(structuredData) }}
      />
      <section className="section-padding">
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <nav aria-label="Breadcrumb" style={{ marginBottom: '1.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            <Link href="/" style={{ color: 'var(--primary)', textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 0.5rem' }}>/</span>
            <Link href="/communities" style={{ color: 'var(--primary)', textDecoration: 'none' }}>Communities</Link>
            <span style={{ margin: '0 0.5rem' }}>/</span>
            <span>{community.name}</span>
          </nav>

          <h1 className="section-title left-align">{community.name}</h1>
          <p className="section-subtitle left-align" style={{ color: 'var(--accent)', fontWeight: 600, marginBottom: '2rem' }}>
            {community.tagline}
          </p>

          {community.background.map((p, idx) => (
            <p key={idx} style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.5rem', color: 'var(--text-dark)' }}>
              {p}
            </p>
          ))}

          <section style={{ marginTop: '3rem', marginBottom: '3.5rem' }}>
            <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>
              Key Issues Facing {community.shortName} Residents
            </h2>
            <div className="issues-grid">
              {community.priorityIssues.map((issue) => (
                <div key={issue.title} className="issue-card">
                  <h3 className="issue-title" style={{ fontSize: '1.3rem' }}>{issue.title}</h3>
                  <p className="issue-desc" style={{ lineHeight: 1.7 }}>{issue.description}</p>
                  <Link href={issue.issueHref} style={{ color: 'var(--accent)', fontWeight: 600 }}>
                    Explore topic &rarr;
                  </Link>
                </div>
              ))}
            </div>
          </section>

          <section style={{ borderTop: '1px solid var(--border-color)', paddingTop: '2rem' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Local Official Resources</h3>
            <ul style={{ paddingLeft: '1.25rem', lineHeight: 1.8 }}>
              {community.officialSources.map((source) => (
                <li key={source.url}>
                  <a href={source.url} target="_blank" rel="noreferrer" style={{ color: 'var(--primary)', fontWeight: 500 }}>
                    {source.label} &rarr;
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </section>
    </div>
  );
}
