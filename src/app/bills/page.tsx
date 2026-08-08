import BillCard from "@/components/BillCard";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { getRecentBills } from "@/lib/billsApi";

export const metadata = pageMetadata({
  title: "Recent Oregon Legislation | Senate District 3",
  description: "Review recent Oregon legislation, see the latest reported action, and share how you want Oregon Senate District 3 represented.",
  path: "/bills",
});

export default async function Bills() {
  const bills = await getRecentBills();

  return (
    <div style={{ paddingTop: '80px', minHeight: '80vh', backgroundColor: 'var(--bg-light)' }}>
      <section className="section-padding">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <h1 className="section-title">Recent Oregon Legislation</h1>
            <p className="section-subtitle">
              These are recent bills from the Oregon legislative data feed, with the latest reported action shown on each card.
              Review the details, then tell me how you want District 3 represented on issues like these.
            </p>
          </div>

          {bills.length === 0 ? (
            <div className="text-center">
              <p>Loading live legislative data or the legislative session is currently out of session.</p>
            </div>
          ) : (
            <div className="bills-grid">
              {bills.map((bill) => {
                const billId = `${bill.MeasurePrefix}${bill.MeasureNumber}`;
                return <BillCard key={billId} bill={bill} />;
              })}
            </div>
          )}

          <div className="text-center" style={{ marginTop: '4rem' }}>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              Want to dive deeper into how this process works?
            </p>
            <Link href="/how-it-works" className="btn btn-outline">
              See how I vote on your behalf
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
