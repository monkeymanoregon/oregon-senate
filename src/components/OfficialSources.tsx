import type { OfficialSource } from "@/data/officialSources";

export default function OfficialSources({ sources }: { sources: OfficialSource[] }) {
  if (sources.length === 0) return null;

  return (
    <aside
      aria-labelledby="official-sources-heading"
      style={{
        borderTop: "1px solid var(--border-color)",
        paddingTop: "1.5rem",
        marginBottom: "3rem",
      }}
    >
      <h3 id="official-sources-heading" style={{ fontSize: "1.15rem", marginBottom: "0.75rem" }}>
        Official sources and data
      </h3>
      <ul style={{ paddingLeft: "1.25rem", lineHeight: 1.7 }}>
        {sources.map((source) => (
          <li key={source.url}>
            <a href={source.url} target="_blank" rel="noreferrer" style={{ color: "var(--primary)" }}>
              {source.label}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
