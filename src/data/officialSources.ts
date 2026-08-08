export interface OfficialSource {
  label: string;
  url: string;
}

const sources: Record<string, OfficialSource[]> = {
  "housing-homelessness-affordability": [
    {
      label: "Oregon Housing and Community Services: housing data and analysis",
      url: "https://www.oregon.gov/ohcs/development/pages/housing-data-analysis.aspx",
    },
  ],
  "healthcare-mental-health-addiction": [
    {
      label: "Oregon Health Authority: opioid overdose and fentanyl information",
      url: "https://www.oregon.gov/oha/ph/preventionwellness/substanceuse/opioids/pages/index.aspx",
    },
  ],
  "public-safety-justice": [
    {
      label: "Oregon Public Defense Commission: unrepresented persons resources",
      url: "https://www.oregon.gov/opdc/general/pages/unrepresented.aspx",
    },
  ],
  "transportation-infrastructure": [
    {
      label: "Oregon Department of Transportation: transportation funding",
      url: "https://www.oregon.gov/odot/about/pages/transportation-funding.aspx",
    },
  ],
  "road-funding-gas-tax": [
    {
      label: "ODOT: current Oregon fuel tax rates",
      url: "https://www.oregon.gov/odot/ftg/pages/current%20fuel%20tax%20rates.aspx",
    },
    {
      label: "ODOT: House Bill 3991 and Measure 120 update",
      url: "https://www.oregon.gov/odot/pages/hb3991.aspx",
    },
  ],
  "wildfire-drought-water": [
    {
      label: "Oregon Water Resources Department: 2026 drought information",
      url: "https://www.oregon.gov/owrd/pages/index.aspx",
    },
    {
      label: "State of Oregon: Jackson County drought emergency information",
      url: "https://apps.oregon.gov/oregon-newsroom/OR/GOV/Posts/Post/governor-kotek-declares-drought-emergency-in-crook-grant-jackson-jefferson-morrow-and-wallowa-counties",
    },
  ],
  "water-rights-drought": [
    {
      label: "Oregon Water Resources Department: 2026 drought information",
      url: "https://www.oregon.gov/owrd/pages/index.aspx",
    },
  ],
  "addiction-services": [
    {
      label: "Oregon Health Authority: fentanyl facts",
      url: "https://www.oregon.gov/oha/ph/preventionwellness/substanceuse/opioids/pages/fentanylfacts.aspx",
    },
  ],
};

export function getOfficialSources(id: string, parentId?: string): OfficialSource[] {
  return sources[id] ?? (parentId ? sources[parentId] ?? [] : []);
}
