import BillVoter from "@/components/BillVoter";
import Link from "next/link";

interface OregonMeasure {
  MeasurePrefix: string;
  MeasureNumber: number;
  CatchLine: string;
  CurrentLocation: string;
  RelatingTo: string;
}

async function getRecentBills() {
  // We fetch the 6 most recent Senate Bills from the open Oregon Legislature OData API
  try {
    const res = await fetch(
      "https://api.oregonlegislature.gov/odata/ODataService.svc/Measures?$filter=MeasurePrefix eq 'SB'&$orderby=CreatedDate desc&$top=6&$format=json",
      { next: { revalidate: 3600 } } // Revalidate every hour
    );
    if (!res.ok) {
      console.error("Failed to fetch bills");
      return [];
    }
    const data = await res.json();
    return data.value as OregonMeasure[];
  } catch (error) {
    console.error("Error fetching bills:", error);
    return [];
  }
}

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
              Cast your vote, and I will vote exactly in accordance with the district's majority consensus.
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
                return (
                  <div key={billId} className="bill-card">
                    <div className="bill-header">
                      <h3>{bill.MeasurePrefix} {bill.MeasureNumber}</h3>
                      <span className="bill-status">{bill.CurrentLocation}</span>
                    </div>
                    <div className="bill-content">
                      <p className="bill-summary">{bill.CatchLine}</p>
                      {bill.RelatingTo && (
                        <p className="bill-relating"><strong>Relating to:</strong> {bill.RelatingTo}</p>
                      )}
                    </div>
                    <div className="bill-footer">
                      <BillVoter billId={billId} />
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          <div className="text-center" style={{ marginTop: '4rem' }}>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              Want to dive deeper into how this process works?
            </p>
            <Link href="/issues" className="btn btn-outline">
              Learn How We Execute Your Will
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
