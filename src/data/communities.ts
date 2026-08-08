export interface CommunityData {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  background: string[];
  priorityIssues: {
    title: string;
    description: string;
    issueHref: string;
  }[];
  officialSources: {
    label: string;
    url: string;
  }[];
}

export const communitiesData: CommunityData[] = [
  {
    id: "medford",
    name: "Medford",
    shortName: "Medford",
    tagline: "Economic & Regional Core of Southern Oregon",
    description: "As the largest city in Jackson County and the economic hub of District 3, Medford faces unique challenges around housing affordability, downtown safety, infrastructure, and retail theft.",
    background: [
      "Medford serves as the commercial and healthcare engine for the entire Rogue Valley. With a growing population, the city has experienced rising housing demand, leading to tight vacancy rates and rising rental costs.",
      "Local business owners and residents frequently voice concerns regarding public safety, retail crime, and emergency services capacity. At the same time, Medford's transportation network requires ongoing investment to maintain key corridors like Interstate 5, Highway 99, and Highway 62."
    ],
    priorityIssues: [
      {
        title: "Housing & Homelessness Affordability",
        description: "Zoning reform, transitional shelter capacity, and expanding workforce housing stock across Medford.",
        issueHref: "/issues/housing-homelessness-affordability",
      },
      {
        title: "Retail Theft & Public Safety",
        description: "Supporting local enforcement, prosecution resources, and small business crime prevention.",
        issueHref: "/issues/public-safety-justice",
      },
      {
        title: "Road Maintenance & Traffic Infrastructure",
        description: "Funding key arterial roads, freeway interchanges, and transit routes connecting Medford to surrounding towns.",
        issueHref: "/issues/transportation-infrastructure/road-funding-gas-tax",
      },
    ],
    officialSources: [
      {
        label: "City of Medford Official Website",
        url: "https://www.medfordoregon.gov",
      },
      {
        label: "Medford Urban Renewal Agency (MURA)",
        url: "https://www.medfordurbanrenewal.org",
      },
    ],
  },
  {
    id: "ashland",
    name: "Ashland",
    shortName: "Ashland",
    tagline: "Culture, Education & Natural Beauty",
    description: "Home to Southern Oregon University and the Oregon Shakespeare Festival, Ashland balances cultural tourism, environmental stewardship, wildfire readiness, and municipal water supply.",
    background: [
      "Ashland is known statewide for its arts, culture, and outdoor recreation. However, summer wildfire smoke seasons pose ongoing risks to local outdoor theater, tourism revenues, and public health.",
      "The community places a high emphasis on forest health, watershed management, and wildfire prevention. Residents also navigate high housing costs and local property tax rates."
    ],
    priorityIssues: [
      {
        title: "Wildfire Readiness & Forest Management",
        description: "Fuel reduction, prescribed burns, and protecting the Ashland Watershed and surrounding wildland-urban interface.",
        issueHref: "/issues/wildfire-drought-water",
      },
      {
        title: "Education & University Funding",
        description: "Supporting Southern Oregon University (SOU) and public school funding across the Rogue Valley.",
        issueHref: "/issues/education-youth-workforce",
      },
      {
        title: "Water Conservation & Drought",
        description: "Ensuring long-term drinking water supply security and municipal water infrastructure.",
        issueHref: "/issues/wildfire-drought-water/water-rights-drought",
      },
    ],
    officialSources: [
      {
        label: "City of Ashland Official Website",
        url: "https://www.ashland.or.us",
      },
      {
        label: "Ashland Fire & Rescue Wildfire Resiliency",
        url: "https://www.ashland.or.us/SectionIndex.asp?SectionID=477",
      },
    ],
  },
  {
    id: "talent-phoenix",
    name: "Talent & Phoenix",
    shortName: "Talent & Phoenix",
    tagline: "Resilience & Post-Fire Rebuilding",
    description: "Disrupted by the devastating 2020 Almeda Fire, Talent and Phoenix showcase community resilience as rebuilding manufactured housing and commercial centers remains top of mind.",
    background: [
      "The Almeda Drive Fire destroyed over 2,500 residential units in September 2020, primarily affecting manufactured home parks in Talent and Phoenix that provided crucial affordable housing.",
      "Years later, community non-profits, city leaders, and state agencies continue working to restore affordable housing stock, replace lost infrastructure, and keep displaced families in Southern Oregon."
    ],
    priorityIssues: [
      {
        title: "Post-Fire Rebuilding & Affordable Housing",
        description: "Accelerating manufactured park redevelopment and permanent affordable housing in Talent and Phoenix.",
        issueHref: "/issues/housing-homelessness-affordability",
      },
      {
        title: "Small Business Grants & Commercial Recovery",
        description: "Restoring local commercial corridors along Highway 99 damaged in the 2020 fire.",
        issueHref: "/issues/cost-of-living-taxes",
      },
    ],
    officialSources: [
      {
        label: "City of Talent Official Website",
        url: "https://www.cityoftalent.org",
      },
      {
        label: "City of Phoenix Official Website",
        url: "https://www.phoenixoregon.gov",
      },
    ],
  },
  {
    id: "applegate-valley",
    name: "Applegate Valley & Ruch",
    shortName: "Applegate & Ruch",
    tagline: "Agriculture, Rural Communities & Water Rights",
    description: "Featuring historic farmland, vineyards, and small rural communities like Ruch and Jacksonville, the Applegate Valley focuses on agricultural water rights, drought, and rural transportation costs.",
    background: [
      "The Applegate Valley is a vibrant agricultural region known for wineries, farms, and timberlands. Long-distance commuting to Medford means fuel taxes and potential per-mile road charges heavily impact rural household budgets.",
      "Drought emergency declarations and water allocation disputes make water rights, irrigation district management, and groundwater protection primary concerns for local growers and property owners."
    ],
    priorityIssues: [
      {
        title: "Water Rights & Drought Emergency Management",
        description: "Fair agricultural water allocation, irrigation district support, and drought relief for Jackson County farmers.",
        issueHref: "/issues/wildfire-drought-water/water-rights-drought",
      },
      {
        title: "Rural Transportation & Gas Tax Fairness",
        description: "Protecting long-distance rural commuters from unfair per-mile fees and maintaining rural highways like Hwy 238.",
        issueHref: "/issues/transportation-infrastructure/road-funding-gas-tax",
      },
    ],
    officialSources: [
      {
        label: "Jackson County Official Website",
        url: "https://jacksoncountyor.gov",
      },
      {
        label: "Oregon Water Resources Department: Jackson County",
        url: "https://www.oregon.gov/owrd/pages/index.aspx",
      },
    ],
  },
];

export function getCommunity(slug: string): CommunityData | undefined {
  return communitiesData.find((c) => c.id === slug);
}
