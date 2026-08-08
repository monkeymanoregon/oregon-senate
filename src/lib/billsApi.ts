import { OregonMeasureFull } from "@/components/BillCard";

const apiKey = process.env.LEGISCAN_API_KEY || "35b7ef169631ba28c9591d26c4c69238";

interface LegiScanBill {
  bill_id: number;
  number?: string;
  title?: string;
  description?: string;
  last_action?: string;
  last_action_date?: string;
  status_date?: string;
  url?: string;
}

interface LegiScanMasterListResponse {
  status?: string;
  alert?: { message?: string };
  masterlist?: Record<string, LegiScanBill | unknown>;
}

/**
 * Fetches the master list of bills for Oregon from the LegiScan API.
 * Uses Next.js cache revalidation to limit API requests.
 */
async function fetchMasterList(): Promise<LegiScanBill[]> {
  try {
    const url = `https://api.legiscan.com/?key=${apiKey}&op=getMasterList&state=OR`;
    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (!res.ok) {
      console.error("Failed to fetch LegiScan master list:", res.statusText);
      return [];
    }
    const data = (await res.json()) as LegiScanMasterListResponse;
    if (!data) {
      console.error("No data returned from LegiScan API");
      return [];
    }
    if (data.status === "ERROR" || !data.masterlist) {
      console.error("Invalid response structure from LegiScan API:", data);
      return [];
    }
    const masterlist = data.masterlist;
    // Filter out metadata elements like "session" and keep only objects with a bill_id
    return Object.keys(masterlist)
      .map((k) => masterlist[k])
      .filter((bill): bill is LegiScanBill => {
        if (!bill || typeof bill !== "object") return false;
        return "bill_id" in bill && typeof (bill as { bill_id?: unknown }).bill_id === "number";
      });
  } catch (error) {
    console.error("Error fetching master list from LegiScan:", error);
    return [];
  }
}

function truncateText(text: string, maxLength: number): string {
  if (!text) return "";
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + "...";
}

function normalizeForMatching(text: string): string {
  return text
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function containsWholeKeyword(text: string, keyword: string): boolean {
  const normalizedText = ` ${normalizeForMatching(text)} `;
  const normalizedKeyword = normalizeForMatching(keyword);
  if (!normalizedKeyword) return false;
  return normalizedText.includes(` ${normalizedKeyword} `);
}

/**
 * Maps a LegiScan bill object to the OregonMeasureFull structure required by the UI components.
 */
function mapLegiScanBill(bill: LegiScanBill): OregonMeasureFull {
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
    LatestAction: bill.last_action || "No recent action reported",
    RelatingTo: bill.title || "",
    FiscalImpact: null,
    RevenueImpact: null,
    StatusDate: bill.status_date || bill.last_action_date || null,
    ModifiedDate: bill.last_action_date || null,
    SourceUrl: bill.url || null,
    FiscalDocumentUrl: null,
    RevenueDocumentUrl: null,
  };
}

export async function getRecentBills(limit = 6): Promise<OregonMeasureFull[]> {
  const bills = await fetchMasterList();
  if (bills.length === 0) return [];

  // Sort by last_action_date descending
  const sorted = bills.sort((a, b) => {
    const dateA = a.last_action_date ? new Date(a.last_action_date).getTime() : 0;
    const dateB = b.last_action_date ? new Date(b.last_action_date).getTime() : 0;
    return dateB - dateA;
  });

  return sorted.slice(0, limit).map(mapLegiScanBill);
}

export async function getBillsByKeywords(keywords: string[], limit = 3): Promise<OregonMeasureFull[]> {
  if (!keywords || keywords.length === 0) return [];

  const bills = await fetchMasterList();
  if (bills.length === 0) return [];

  // Match complete words or phrases only. Raw substring matching caused false
  // positives such as "cte" inside unrelated words and "road" in "broadband".
  const filtered = bills.filter((bill) => {
    const text = `${bill.title || ""} ${bill.description || ""}`;
    return keywords.some((keyword) => containsWholeKeyword(text, keyword));
  });

  // Sort by last_action_date descending
  const sorted = filtered.sort((a, b) => {
    const dateA = a.last_action_date ? new Date(a.last_action_date).getTime() : 0;
    const dateB = b.last_action_date ? new Date(b.last_action_date).getTime() : 0;
    return dateB - dateA;
  });

  return sorted.slice(0, limit).map(mapLegiScanBill);
}
