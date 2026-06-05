import { OregonMeasureFull } from "@/components/BillCard";

async function enhanceBills(bills: OregonMeasureFull[]): Promise<OregonMeasureFull[]> {
  return await Promise.all(bills.map(async (bill) => {
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
}

export async function getRecentBills(limit = 6): Promise<OregonMeasureFull[]> {
  try {
    const res = await fetch(
      `https://api.oregonlegislature.gov/odata/ODataService.svc/Measures?$filter=MeasurePrefix eq 'SB'&$orderby=CreatedDate desc&$top=${limit}&$format=json`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) {
      console.error("Failed to fetch bills");
      return [];
    }
    const data = await res.json();
    const bills: OregonMeasureFull[] = data.value || [];
    return enhanceBills(bills);
  } catch (error) {
    console.error("Error fetching bills:", error);
    return [];
  }
}

export async function getBillsByKeywords(keywords: string[], limit = 3): Promise<OregonMeasureFull[]> {
  if (!keywords || keywords.length === 0) return [];

  try {
    // Construct OData filter string using substringof
    // Example: (substringof('housing', tolower(RelatingTo)) or substringof('homeless', tolower(RelatingTo)))
    const keywordFilters = keywords.map(kw => `substringof('${kw.toLowerCase()}', tolower(RelatingTo)) or substringof('${kw.toLowerCase()}', tolower(CatchLine))`);
    const filterString = `(${keywordFilters.join(' or ')})`;
    
    const url = `https://api.oregonlegislature.gov/odata/ODataService.svc/Measures?$filter=MeasurePrefix eq 'SB' and ${filterString}&$orderby=CreatedDate desc&$top=${limit}&$format=json`;

    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (!res.ok) {
      console.error("Failed to fetch bills by keywords");
      return [];
    }
    const data = await res.json();
    const bills: OregonMeasureFull[] = data.value || [];
    return enhanceBills(bills);
  } catch (error) {
    console.error("Error fetching bills by keyword:", error);
    return [];
  }
}
