import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav
      aria-label="Breadcrumb"
      style={{
        marginBottom: '2rem',
        fontSize: '0.9rem',
        color: 'var(--text-muted)',
      }}
    >
      <Link href="/" style={{ color: 'var(--primary)', textDecoration: 'none' }}>
        Home
      </Link>
      {items.map((item, idx) => (
        <span key={idx}>
          <span style={{ margin: '0 0.5rem' }}>/</span>
          {item.href ? (
            <Link href={item.href} style={{ color: 'var(--primary)', textDecoration: 'none' }}>
              {item.label}
            </Link>
          ) : (
            <span>{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
