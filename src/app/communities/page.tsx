import Link from "next/link";
import { communitiesData } from "@/data/communities";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Communities of Oregon Senate District 3 | Rogue Valley Hubs",
  description: "Explore localized guides for District 3 communities: Medford, Ashland, Talent & Phoenix, and Applegate Valley & Ruch.",
  path: "/communities",
});

export default function CommunitiesIndex() {
  return (
    <div style={{ paddingTop: '80px' }}>
      <section className="section-padding">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <h1 className="section-title">District 3 Community Hubs</h1>
            <p className="section-subtitle" style={{ maxWidth: '800px', margin: '0 auto' }}>
              Explore specific issues, local context, and constituent feedback opportunities tailored to each community in Oregon Senate District 3.
            </p>
          </div>

          <div className="issues-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {communitiesData.map((community) => (
              <Link key={community.id} href={`/communities/${community.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="issue-card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '0.85rem', color: 'var(--accent)', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                    {community.tagline}
                  </span>
                  <h2 className="issue-title" style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--primary)' }}>
                    {community.name}
                  </h2>
                  <p className="issue-desc" style={{ flexGrow: 1, fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                    {community.description}
                  </p>
                  <div style={{ marginTop: '1.5rem', fontWeight: 'bold', color: 'var(--primary)' }}>
                    View {community.shortName} Guide &rarr;
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
