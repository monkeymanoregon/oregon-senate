import { OregonMeasureFull } from "@/components/BillCard";

const apiKey = process.env.LEGISCAN_API_KEY || "35b7ef169631ba28c9591d26c4c69238";

/**
 * Fetches the master list of bills for Oregon from the LegiScan API.
 * Uses Next.js cache revalidation to limit API requests.
 */
async function fetchMasterList(): Promise<any[]> {
  try {
    const url = `https://api.legiscan.com/?key=${apiKey}&op=getMasterList&state=OR`;
    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (!res.ok) {
      console.error("Failed to fetch LegiScan master list:", res.statusText);
      return [];
    }
    const data = await res.json();
    if (!data) {
      console.error("No data returned from LegiScan API");
      return [];
    }
    if (data.status === "ERROR") {
      console.error("LegiScan API error:", data.alert?.message || "Unknown error");
      return [];
    }
    if (!data.masterlist) {
      console.error("Invalid response structure from LegiScan API:", data);
      return [];
    }
    // Filter out metadata elements like "session" and keep only objects with a bill_id
    return Object.keys(data.masterlist)
      .map((k) => data.masterlist[k])
      .filter((b) => b && typeof b === "object" && b.bill_id);
  } catch (error) {
    console.error("Error fetching master list from LegiScan:", error);
    return [];
  }
}

/**
 * Helper to truncate text to a specified maximum length with an ellipsis.
 */
function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + "...";
}

/**
 * Maps a LegiScan bill object to the OregonMeasureFull structure required by the UI components.
 */
function mapLegiScanBill(bill: any): OregonMeasureFull {
  const numberStr = bill.number || "";
  const match = numberStr.match(/^([A-Za-z]+)(\d+)$/);
  const MeasurePrefix = match ? match[1] : "HB";
  const MeasureNumber = match ? parseInt(match[2], 10) : 0;
  const description = bill.description || bill.title || "";

  return {
    MeasurePrefix,
    MeasureNumber,
    CatchLine: truncateText(description, 140),
    MeasureSummary: description,
    CurrentLocation: bill.last_action || "Unknown",
    RelatingTo: bill.title || "",
    FiscalImpact: null,
    RevenueImpact: null,
    EffectiveDate: bill.status_date || null,
    ModifiedDate: bill.last_action_date || null,
    FiscalDocumentUrl: bill.url || null,
    RevenueDocumentUrl: null,
  };
}

/**
 * Gets recent bills sorted by the last action date descending.
 */
export async function getRecentBills(limit = 6): Promise<OregonMeasureFull[]> {
  const bills = await fetchMasterList();
  if (bills.length === 0) return [];

  // Sort by last_action_date descending
  const sorted = bills.sort((a, b) => {
    const dateA = new Date(a.last_action_date || "1970-01-01").getTime();
    const dateB = new Date(b.last_action_date || "1970-01-01").getTime();
    return dateB - dateA;
  });

  return sorted.slice(0, limit).map(mapLegiScanBill);
}

/**
 * Gets bills filtered by keywords in the title or description, sorted by last action date.
 */
export async function getBillsByKeywords(keywords: string[], limit = 3): Promise<OregonMeasureFull[]> {
  if (!keywords || keywords.length === 0) return [];

  const bills = await fetchMasterList();
  if (bills.length === 0) return [];

  // Filter bills in memory matching any keyword (case-insensitive)
  const filtered = bills.filter((bill) => {
    const text = `${bill.title || ""} ${bill.description || ""}`.toLowerCase();
    return keywords.some((kw) => text.includes(kw.toLowerCase()));
  });

  // Sort by last_action_date descending
  const sorted = filtered.sort((a, b) => {
    const dateA = new Date(a.last_action_date || "1970-01-01").getTime();
    const dateB = new Date(b.last_action_date || "1970-01-01").getTime();
    return dateB - dateA;
  });

  return sorted.slice(0, limit).map(mapLegiScanBill);
}
