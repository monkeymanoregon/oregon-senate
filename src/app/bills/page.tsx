import BillCard, { OregonMeasureFull } from "@/components/BillCard";
import Link from "next/link";

import { getRecentBills } from "@/lib/billsApi";

export default async function Bills() {
  const bills = await getRecentBills();

  return (
    <div style={{ paddingTop: '80px', minHeight: '80vh', backgroundColor: 'var(--bg-light)' }}>
      <section className="section-padding">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <h2 className="section-title">Vote on Live Bills</h2>
            <p className="section-subtitle">
              This is direct democracy in action. Below are live, active bills currently sitting on the Oregon Senate floor. 
              Click "Read Full Details" to educate yourself, then cast your vote. I will cast my vote exactly how the majority of you tell me to.
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
