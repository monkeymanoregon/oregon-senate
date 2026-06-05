import BillCard, { OregonMeasureFull } from "@/components/BillCard";
import Link from "next/link";

async function getRecentBills() {
  try {
    const res = await fetch(
      "https://api.oregonlegislature.gov/odata/ODataService.svc/Measures?$filter=MeasurePrefix eq 'SB'&$orderby=CreatedDate desc&$top=6&$format=json",
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) {
      console.error("Failed to fetch bills");
      return [];
    }
    const data = await res.json();
    const bills: OregonMeasureFull[] = data.value;

    const enhancedBills = await Promise.all(bills.map(async (bill) => {
      let fiscalUrl = null;
      let revenueUrl = null;
      try {
        const docRes = await fetch(`https://api.oregonlegislature.gov/odata/ODataService.svc/MeasureAnalysisDocuments?$filter=MeasurePrefix eq '${bill.MeasurePrefix}' and MeasureNumber eq ${bill.MeasureNumber}&$format=json`, { next: { revalidate: 3600 } });
        if (docRes.ok) {
          const docData = await docRes.json();
          const docs = docData.value || [];
          
          const fiscalDocs = docs.filter((d: any) => d.DocumentType === 'Fiscal Impact Statement' || d.DocumentType === 'Budget Report').sort((a: any, b: any) => new Date(b.CreatedDate).getTime() - new Date(a.CreatedDate).getTime());
          if (fiscalDocs.length > 0) fiscalUrl = fiscalDocs[0].DocumentUrl;

          const revenueDocs = docs.filter((d: any) => d.DocumentType === 'Revenue Impact Statement').sort((a: any, b: any) => new Date(b.CreatedDate).getTime() - new Date(a.CreatedDate).getTime());
          if (revenueDocs.length > 0) revenueUrl = revenueDocs[0].DocumentUrl;
        }
      } catch (err) {
        console.error("Error fetching docs for bill", bill.MeasureNumber);
      }
      
      return {
        ...bill,
        FiscalDocumentUrl: fiscalUrl,
        RevenueDocumentUrl: revenueUrl
      };
    }));

    return enhancedBills;
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
            <Link href="/issues" className="btn btn-outline">
              See how I vote on your behalf
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
