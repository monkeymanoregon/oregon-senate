export interface IssueData {
  id: string;
  title: string;
  intent: string;
  purpose: string;
  subtopics: string[];
  viewA: string;
  viewB: string;
  tradeoffs: string;
  feedbackPrompt: string;
  categoryMap: string;
}

export const issuesData: IssueData[] = [
  {
    id: "housing-homelessness-affordability",
    title: "Housing, Homelessness & Affordability",
    intent: "Oregon homelessness, affordable housing, rent, shelter, zoning, land use",
    purpose: "Create the largest issue hub on the site; explain why housing and homelessness matter without taking a fixed position.",
    subtopics: [
      "Homelessness", "shelter capacity", "street camping", "transitional housing", 
      "permanent supportive housing", "rent prices", "evictions", "rental assistance", 
      "first-time homebuyers", "zoning reform", "urban growth boundaries", "manufactured housing", 
      "senior housing", "rural housing", "construction costs", "permitting", "short-term rentals", 
      "property taxes", "local vs state responsibility"
    ],
    viewA: "Some residents want more state action: shelters, prevention, affordable housing, mental health/addiction services, rent relief, and faster construction.",
    viewB: "Others worry about cost, accountability, neighborhood impacts, public camping, land-use protections, and whether programs are producing visible results.",
    tradeoffs: "Housing supply vs land preservation; compassion vs public order; state funding vs local control; tenant protection vs landlord/property-owner costs.",
    feedbackPrompt: "What should Oregon prioritize most: more shelter beds, more affordable housing, stricter public camping rules, addiction/mental health services, rent relief, land use reform, or something else?",
    categoryMap: "Housing & Infrastructure"
  },
  {
    id: "cost-of-living-taxes",
    title: "Cost of Living, Taxes & Household Affordability",
    intent: "Oregon cost of living, taxes, household bills, utility costs, fees",
    purpose: "Separate household affordability from the general economy so residents can speak directly about pressure on budgets.",
    subtopics: [
      "Groceries", "gas", "utilities", "auto insurance", "home insurance", "rent", 
      "mortgage pressure", "property taxes", "income taxes", "state fees", "gas taxes", 
      "vehicle fees", "Oregon kicker", "local taxes", "childcare", "healthcare costs", 
      "budget priorities", "government spending accountability"
    ],
    viewA: "Some residents want lower taxes, fewer fees, and reduced regulation to ease pressure on household budgets.",
    viewB: "Others want stable funding for schools, roads, healthcare, housing, and safety-net programs, even when that requires revenue.",
    tradeoffs: "Lower taxes vs program funding; short-term relief vs long-term services; spending cuts vs revenue increases.",
    feedbackPrompt: "When Oregon faces a budget shortfall, should lawmakers prioritize cutting spending, raising revenue, reducing regulations to grow the economy, or restructuring existing programs?",
    categoryMap: "Economy & Jobs"
  },
  {
    id: "healthcare-mental-health-addiction",
    title: "Healthcare, Mental Health & Addiction",
    intent: "Oregon healthcare, Medicaid, mental health, addiction treatment, fentanyl, Measure 110",
    purpose: "Unify healthcare access, behavioral health, treatment, and addiction policy while separating facts from opinion.",
    subtopics: [
      "Oregon Health Plan", "Medicaid", "healthcare affordability", "rural healthcare", 
      "hospitals", "provider shortages", "nursing shortages", "behavioral health workforce", 
      "crisis response", "treatment beds", "detox", "recovery", "fentanyl", "overdose prevention", 
      "Measure 110", "HB 4002", "deflection", "youth mental health", "suicide prevention", 
      "maternal health", "reproductive healthcare", "senior care", "long-term care", "insurance costs"
    ],
    viewA: "Some residents want more treatment access, prevention, Medicaid stability, crisis response, and rural healthcare support.",
    viewB: "Others emphasize cost control, program accountability, public disorder, uneven implementation, and whether treatment systems are producing measurable results.",
    tradeoffs: "Treatment vs enforcement; access vs cost; statewide standards vs county-level implementation; prevention vs consequences.",
    feedbackPrompt: "Should Oregon focus more on treatment access, law enforcement accountability, deflection programs, Medicaid stability, rural healthcare, or cost control?",
    categoryMap: "Healthcare"
  },
  {
    id: "public-safety-justice",
    title: "Public Safety, Justice & Community Trust",
    intent: "Oregon public safety, crime, police, courts, victims, public defense",
    purpose: "Connect safety, justice, addiction, law enforcement, courts, and civil liberties in a balanced issue hub.",
    subtopics: [
      "Property crime", "violent crime", "drug-related disorder", "fentanyl enforcement", 
      "deflection vs arrest", "police staffing", "police accountability", "jail capacity", 
      "public defense crisis", "court backlogs", "victim services", "domestic violence", 
      "juvenile justice", "reentry", "probation", "community violence prevention", 
      "emergency response", "fire/EMS", "school safety", "human trafficking", "hate crimes"
    ],
    viewA: "Some residents want stronger enforcement, faster consequences, and more visible public safety.",
    viewB: "Others want prevention, treatment, accountability, civil-rights protections, and alternatives to incarceration when appropriate.",
    tradeoffs: "Public order vs civil liberties; enforcement vs treatment; victim support vs offender rehabilitation; police capacity vs police accountability.",
    feedbackPrompt: "What balance should Oregon strike between enforcement, treatment, prevention, victim support, police accountability, and court capacity?",
    categoryMap: "Public Safety"
  },
  {
    id: "education-youth-workforce",
    title: "Education, Schools, Youth & Workforce Training",
    intent: "Oregon schools, education funding, student outcomes, workforce training",
    purpose: "Cover both education funding and results, while giving parents, teachers, students, and employers a voice.",
    subtopics: [
      "K-12 funding", "funding formula", "reading", "math", "graduation", "class sizes", 
      "teacher shortages", "teacher pay", "special education", "school safety", "student mental health", 
      "cell phones", "career and technical education", "apprenticeships", "community colleges", 
      "higher education affordability", "student debt", "rural schools", "transportation", 
      "nutrition", "after-school programs", "parent involvement", "curriculum transparency", 
      "early childhood education", "childcare", "pre-K"
    ],
    viewA: "Some residents believe schools need more stable funding, smaller classes, more teachers, and more support staff.",
    viewB: "Others believe the main issues are accountability, curriculum, administrative spending, transparency, or whether increased funding improves outcomes.",
    tradeoffs: "Funding vs accountability; state standards vs local control; parent input vs professional curriculum decisions; college pathways vs trades.",
    feedbackPrompt: "What should Oregon prioritize first in education: funding, accountability, teacher retention, career training, student safety, parent involvement, or academic outcomes?",
    categoryMap: "Education"
  },
  {
    id: "transportation-infrastructure",
    title: "Transportation, Roads & Infrastructure",
    intent: "Oregon transportation funding, road maintenance, gas tax, vehicle fees, ODOT",
    purpose: "Explain roads, bridges, fees, transportation funding, and local infrastructure in plain language.",
    subtopics: [
      "Road maintenance", "potholes", "State Highway Fund", "gas taxes", "vehicle fees", 
      "ODOT funding", "county roads", "rural roads", "bridges", "seismic upgrades", "transit", 
      "freight", "trucking", "bike/pedestrian safety", "school transportation", "EV charging", 
      "broadband", "water/sewer infrastructure", "ports", "rail", "airports", "emergency routes", 
      "infrastructure accountability"
    ],
    viewA: "Some residents want stable funding to maintain roads, bridges, transit, and emergency routes.",
    viewB: "Others oppose higher gas taxes and fees, especially while household costs are already rising.",
    tradeoffs: "Road maintenance vs tax/fee increases; urban transit vs rural roads; current maintenance vs future infrastructure; convenience vs cost.",
    feedbackPrompt: "Would you support higher transportation taxes or fees if they were dedicated to road maintenance, or should Oregon find another way to fund infrastructure?",
    categoryMap: "Housing & Infrastructure"
  },
  {
    id: "wildfire-drought-water",
    title: "Wildfire, Drought, Water & Emergency Resilience",
    intent: "Oregon wildfire, drought, water rights, snowpack, irrigation, emergency readiness",
    purpose: "Create a major hub for wildfire, water, drought, insurance, smoke, emergency response, and natural-resource conflict.",
    subtopics: [
      "Wildfire prevention", "forest management", "fuel reduction", "prescribed burns", 
      "suppression funding", "firefighter staffing", "home hardening", "insurance", "smoke", 
      "air quality", "evacuation", "disaster shelters", "rural fire districts", "drought declarations", 
      "snowpack", "irrigation", "water rights", "groundwater", "drinking water", "Klamath Basin", 
      "fish/farms/cities water conflicts", "emergency communication"
    ],
    viewA: "Some residents want more aggressive forest management, fuel reduction, and protection for rural property owners.",
    viewB: "Others want climate resilience, ecosystem protections, water conservation, and limits on risky development.",
    tradeoffs: "Farms vs fish vs cities; property protection vs ecosystem protection; prevention vs suppression; insurance cost vs risk exposure.",
    feedbackPrompt: "When water or wildfire resources are limited, how should Oregon balance farms, homes, forests, fish, cities, and rural communities?",
    categoryMap: "Environment"
  }
];
