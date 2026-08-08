import { getBillsByKeywords } from "@/lib/billsApi";
import BillCard from "./BillCard";

export default async function LiveBills({ keywords }: { keywords?: string[] }) {
  if (!keywords || keywords.length === 0) return null;

  const bills = await getBillsByKeywords(keywords, 4);

  if (!bills || bills.length === 0) {
    return (
      <div style={{ backgroundColor: 'var(--bg-light)', padding: '2rem', borderRadius: '8px', marginBottom: '4rem', textAlign: 'center' }}>
        <h3 style={{ marginBottom: '1rem', color: 'var(--primary)', fontSize: '1.5rem' }}>Related Oregon Legislation</h3>
        <p style={{ color: 'var(--text-muted)' }}>
          No bills in the current Oregon legislative feed closely match this topic right now.
        </p>
      </div>
    );
  }

  return (
    <div style={{ marginBottom: '4rem' }}>
      <div style={{ marginBottom: '2rem', borderBottom: '2px solid var(--border-color)', paddingBottom: '0.5rem' }}>
        <h3 style={{ color: 'var(--primary)', fontSize: '1.5rem', marginBottom: '0.5rem' }}>Related Oregon Legislation</h3>
        <p style={{ color: 'var(--text-muted)' }}>
          These Oregon bills match this topic by complete words or phrases in their title or description. Each card shows the latest action reported by the legislative data feed.
        </p>
      </div>
      
      <div className="bills-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
        {bills.map((bill) => {
          const billId = `${bill.MeasurePrefix}${bill.MeasureNumber}`;
          return <BillCard key={billId} bill={bill} />;
        })}
      </div>
    </div>
  );
}
