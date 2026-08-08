import Link from "next/link";
import { issuesData } from "@/data/issues";
import { jsonLd, pageMetadata, SITE_URL } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Oregon Senate District 3: Communities, Issues & 2026 Election",
  description: "A practical guide to Oregon Senate District 3: communities in the district, current representation, 2026 election dates, major Southern Oregon issues, and official sources.",
  path: "/oregon-senate-district-3",
});

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/oregon-senate-district-3#page`,
      url: `${SITE_URL}/oregon-senate-district-3`,
      name: "Oregon Senate District 3: Communities, Issues & 2026 Election",
      dateModified: "2026-08-08",
      about: { "@type": "AdministrativeArea", name: "Oregon State Senate District 3" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Oregon Senate District 3", item: `${SITE_URL}/oregon-senate-district-3` },
      ],
    },
  ],
};

export default function OregonSenateDistrict3() {
  return (
    <div style={{ paddingTop: "80px" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(structuredData) }} />
      <section className="section-padding">
        <div className="container">
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <h1 className="section-title left-align">Oregon Senate District 3</h1>
            <p className="section-subtitle left-align" style={{ marginBottom: "1rem" }}>
              A plain-language guide to the communities, election dates, issues and official information that matter to voters in Southern Oregon&apos;s Senate District 3.
            </p>
            <p style={{ color: "var(--text-muted)", marginBottom: "3rem" }}>Last reviewed August 8, 2026.</p>

            <div className="issues-grid" style={{ marginBottom: "3rem" }}>
              <div className="issue-card">
                <h2 className="issue-title">Communities in District 3</h2>
                <p className="issue-desc">
                  The Oregon Legislature&apos;s current District 3 page says the district includes Medford, Phoenix, Talent, Ashland, Jacksonville, Ruch and the Applegate Valley.
                </p>
                <a href="https://www.oregonlegislature.gov/golden" target="_blank" rel="noreferrer" style={{ color: "var(--primary)", fontWeight: 600 }}>
                  Oregon Legislature source &rarr;
                </a>
              </div>

              <div className="issue-card">
                <h2 className="issue-title">Current State Senator</h2>
                <p className="issue-desc">
                  The Oregon Legislature lists Jeff Golden, Democrat of Ashland, as the current senator for District 3.
                </p>
                <a href="https://www.oregonlegislature.gov/senate/pages/senatorsall.aspx" target="_blank" rel="noreferrer" style={{ color: "var(--primary)", fontWeight: 600 }}>
                  Current Oregon senators &rarr;
                </a>
              </div>

              <div className="issue-card">
                <h2 className="issue-title">2026 General Election</h2>
                <p className="issue-desc">
                  Oregon&apos;s general election is November 3, 2026. The voter-registration deadline is October 13, and ballots begin mailing October 14.
                </p>
                <a href="https://sos.oregon.gov/elections/pages/current-election.aspx" target="_blank" rel="noreferrer" style={{ color: "var(--primary)", fontWeight: 600 }}>
                  Oregon Secretary of State &rarr;
                </a>
              </div>
            </div>

            <section style={{ marginBottom: "3.5rem" }}>
              <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>What District 3 voters are dealing with</h2>
              <p style={{ fontSize: "1.05rem", lineHeight: 1.75, marginBottom: "1.5rem" }}>
                This site organizes the district conversation by topic instead of asking voters to fit into a party label. Each issue page lays out competing perspectives, local context, related Oregon legislation when the data closely matches, and a way to share feedback.
              </p>
              <div className="issues-grid">
                {issuesData.map((issue) => (
                  <Link key={issue.id} href={`/issues/${issue.id}`} className="issue-card" style={{ textDecoration: "none", color: "inherit" }}>
                    <h3 className="issue-title">{issue.title}</h3>
                    <p className="issue-desc">Explore Southern Oregon context, key tradeoffs and resident feedback.</p>
                    <span style={{ color: "var(--accent)", fontWeight: 700 }}>Explore this issue &rarr;</span>
                  </Link>
                ))}
              </div>
            </section>

            <section style={{ background: "var(--bg-light)", padding: "2rem", borderRadius: "8px", marginBottom: "3rem" }}>
              <h2 style={{ marginBottom: "0.75rem" }}>What&apos;s happening now?</h2>
              <p style={{ lineHeight: 1.7, marginBottom: "1rem" }}>
                For election deadlines, transportation funding, drought and other time-sensitive developments, use the District 3 updates page. Each entry is dated and links to its underlying source.
              </p>
              <Link href="/district-3-updates" className="btn btn-primary">See District 3 updates</Link>
            </section>

            <section aria-labelledby="district-sources">
              <h2 id="district-sources" style={{ fontSize: "1.4rem", marginBottom: "1rem" }}>Primary sources</h2>
              <ul style={{ paddingLeft: "1.25rem", lineHeight: 1.8 }}>
                <li><a href="https://www.oregonlegislature.gov/golden" target="_blank" rel="noreferrer">Oregon Legislature: Senator Jeff Golden, District 3</a></li>
                <li><a href="https://www.oregonlegislature.gov/senate/pages/senatorsall.aspx" target="_blank" rel="noreferrer">Oregon Legislature: current senators</a></li>
                <li><a href="https://sos.oregon.gov/elections/pages/current-election.aspx" target="_blank" rel="noreferrer">Oregon Secretary of State: 2026 general election dates</a></li>
              </ul>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
