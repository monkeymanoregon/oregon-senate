import Link from "next/link";
import { jsonLd, pageMetadata, SITE_URL } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "District 3 Updates: What's Happening in Southern Oregon",
  description: "Dated, sourced updates for Oregon Senate District 3 voters on the 2026 election, road funding, Jackson County drought, public defense and other Southern Oregon issues.",
  path: "/district-3-updates",
  type: "article",
});

const updates = [
  {
    date: "August 8, 2026",
    isoDate: "2026-08-08",
    title: "The 2026 general election is November 3",
    summary: "Oregon's voter-registration deadline is October 13. Ballots begin mailing October 14, and Election Day is November 3. Mailed ballots must be postmarked by Election Day; official drop-box ballots must be received by 8 p.m.",
    sourceLabel: "Oregon Secretary of State",
    sourceUrl: "https://sos.oregon.gov/elections/pages/current-election.aspx",
    relatedHref: "/oregon-senate-district-3",
    relatedLabel: "District 3 election guide",
  },
  {
    date: "August 8, 2026",
    isoDate: "2026-08-08",
    title: "Oregon road funding is still unsettled after Measure 120",
    summary: "ODOT says voters rejected most of HB 3991's tax and fee increases in Measure 120. The 2026 Legislature addressed a $297 million maintenance-and-operations shortfall through the end of the current budget cycle, but ODOT says the long-term State Highway Fund challenge remains unresolved.",
    sourceLabel: "Oregon Department of Transportation",
    sourceUrl: "https://www.oregon.gov/odot/pages/hb3991.aspx",
    relatedHref: "/issues/transportation-infrastructure/road-funding-gas-tax",
    relatedLabel: "Oregon gas tax & road funding explainer",
  },
  {
    date: "July 13, 2026",
    isoDate: "2026-07-13",
    title: "Jackson County is part of Oregon's 2026 drought emergency picture",
    summary: "Jackson County was included in an April 2026 drought emergency declaration. By July 13, the state reported that 21 of Oregon's 36 counties had received 2026 drought emergency declarations as dry conditions persisted across much of the state.",
    sourceLabel: "State of Oregon newsroom",
    sourceUrl: "https://apps.oregon.gov/oregon-newsroom/OR/GOV/Posts/Post/governor-kotek-declares-drought-emergency-in-curry-and-union-counties",
    relatedHref: "/issues/wildfire-drought-water/water-rights-drought",
    relatedLabel: "Jackson County drought & water explainer",
  },
  {
    date: "July 15, 2026",
    isoDate: "2026-07-15",
    title: "Oregon's public-defense shortage remains an active issue",
    summary: "The Oregon Public Defense Commission reported 1,036 unrepresented people statewide as of June 30. The commission continues to track capacity and assignments as Oregon works through the constitutional public-defense shortage.",
    sourceLabel: "Oregon Public Defense Commission",
    sourceUrl: "https://www.oregon.gov/opdc/commission/SiteAssets/Lists/Commission%20Meeting%20Accordion/AllItems/OPDC%20July%2015%2C%202026%20Commission%20Meeting%20Slideshows.pdf",
    relatedHref: "/issues/public-safety-justice",
    relatedLabel: "Public safety & justice in District 3",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${SITE_URL}/district-3-updates#page`,
  url: `${SITE_URL}/district-3-updates`,
  name: "District 3 Updates: What's Happening in Southern Oregon",
  dateModified: "2026-08-08",
  about: { "@type": "AdministrativeArea", name: "Oregon State Senate District 3" },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: updates.map((update, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Article",
        headline: update.title,
        dateModified: update.isoDate,
        url: `${SITE_URL}/district-3-updates#update-${index + 1}`,
      },
    })),
  },
};

export default function District3Updates() {
  return (
    <div style={{ paddingTop: "80px" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(structuredData) }} />
      <section className="section-padding">
        <div className="container">
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <h1 className="section-title left-align">What&apos;s Happening in District 3</h1>
            <p className="section-subtitle left-align" style={{ marginBottom: "0.75rem" }}>
              Dated, source-linked updates on Southern Oregon issues that affect voters in Oregon Senate District 3.
            </p>
            <p style={{ color: "var(--text-muted)", marginBottom: "1rem" }}>Last reviewed August 8, 2026.</p>
            <p style={{ lineHeight: 1.7, marginBottom: "3rem" }}>
              This is an information layer, not a generic campaign blog. Each update answers three questions: what happened, what it means for the issue, and where to verify it.
            </p>

            <div style={{ display: "grid", gap: "1.5rem", marginBottom: "3rem" }}>
              {updates.map((update, index) => (
                <article id={`update-${index + 1}`} key={update.title} className="issue-card">
                  <time dateTime={update.isoDate} style={{ display: "block", color: "var(--text-muted)", fontSize: "0.9rem", marginBottom: "0.5rem" }}>
                    {update.date}
                  </time>
                  <h2 className="issue-title" style={{ fontSize: "1.45rem" }}>{update.title}</h2>
                  <p className="issue-desc" style={{ lineHeight: 1.75 }}>{update.summary}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                    <a href={update.sourceUrl} target="_blank" rel="noreferrer" style={{ color: "var(--primary)", fontWeight: 600 }}>
                      Source: {update.sourceLabel} &rarr;
                    </a>
                    <Link href={update.relatedHref} style={{ color: "var(--accent)", fontWeight: 600 }}>
                      {update.relatedLabel} &rarr;
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            <div style={{ background: "var(--bg-light)", padding: "2rem", borderRadius: "8px" }}>
              <h2 style={{ marginBottom: "0.75rem" }}>Start with the full District 3 guide</h2>
              <p style={{ lineHeight: 1.7, marginBottom: "1rem" }}>See the communities in the district, current representation, 2026 election dates and links into every major issue topic.</p>
              <Link href="/oregon-senate-district-3" className="btn btn-primary">Oregon Senate District 3 guide</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
