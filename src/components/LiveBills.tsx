import { getBillsByKeywords } from "@/lib/billsApi";
import BillCard from "./BillCard";

export default async function LiveBills({ keywords }: { keywords?: string[] }) {
  if (!keywords || keywords.length === 0) return null;

  const bills = await getBillsByKeywords(keywords, 4);

  if (!bills || bills.length === 0) {
    return (
      <div style={{ backgroundColor: 'var(--bg-light)', padding: '2rem', borderRadius: '8px', marginBottom: '4rem', textAlign: 'center' }}>
        <h3 style={{ marginBottom: '1rem', color: 'var(--primary)', fontSize: '1.5rem' }}>Live Legislation</h3>
        <p style={{ color: 'var(--text-muted)' }}>
          There are currently no active bills on the Senate floor directly related to these keywords.
        </p>
      </div>
    );
  }

  return (
    <div style={{ marginBottom: '4rem' }}>
      <div style={{ marginBottom: '2rem', borderBottom: '2px solid var(--border-color)', paddingBottom: '0.5rem' }}>
        <h3 style={{ color: 'var(--primary)', fontSize: '1.5rem', marginBottom: '0.5rem' }}>Live Legislation</h3>
        <p style={{ color: 'var(--text-muted)' }}>
          These are real bills currently moving through the Oregon Senate related to this issue. Read the details and cast your vote below.
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
