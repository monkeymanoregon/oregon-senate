export interface SpokeData {
  id: string;
  title: string;
  background: string[];
  viewA: string;
  viewB: string;
  tradeoffs: string;
  feedbackPrompt: string;
  searchKeywords?: string[];
}

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
  background?: string[];
  spokes?: SpokeData[];
  searchKeywords?: string[];
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
    viewA: "Some residents want more state and local action: managed shelters, post-fire recovery assistance, affordable housing initiatives, and mental health/addiction services.",
    viewB: "Others worry about high taxpayer costs, program accountability, neighborhood impacts of public campgrounds, and removing land-use protections.",
    tradeoffs: "Housing supply vs land preservation; compassion vs public order; state funding vs local control; tenant protection vs landlord/property-owner costs.",
    feedbackPrompt: "What should we prioritize in District 3: more managed shelter beds, long-term affordable housing, stricter public camping rules, or zoning/land use reform?",
    categoryMap: "Housing & Infrastructure",
    searchKeywords: ["housing", "homeless", "rent", "tenant", "landlord"],
    background: [
      "Senate District 3—including Medford, Ashland, Jacksonville, Talent, and Phoenix—is facing one of the most severe housing and affordability crises in Oregon. Over the last decade, housing production in the Rogue Valley has lagged behind population growth, resulting in a dramatic spike in home prices and rental rates. This has been worsened by the loss of thousands of residential units during the 2020 Almeda Fire, which placed unprecedented strain on the local housing market.",
      "In response, cities across the Rogue Valley have taken different approaches to managed campgrounds, emergency shelter funding, and public camping regulations. These local policies frequently ignite debates over municipal control, property rights, and the balance between providing compassionate services and maintaining public spaces. Finding a consensus requires listening to all perspectives, from local renters and unhoused individuals to homeowners and business operators.",
      "As our communities look to the future, we must decide where to direct state and local resources. Should the focus be on expanding permanent supportive housing, enforcing stricter camping regulations, or removing regulatory barriers to accelerate private residential construction in the valley?"
    ],
    spokes: [
      {
        id: "urban-growth-boundary",
        title: "Urban Growth Boundaries & Land Use",
        background: [
          "Oregon's land-use planning system mandates that every city maintain an Urban Growth Boundary (UGB) to control urban sprawl and protect surrounding farm and forest lands. While this system has successfully preserved the Rogue Valley's natural beauty and agricultural heritage, it is increasingly cited as a barrier to housing development.",
          "As populations have grown, cities like Medford have struggled to find buildable land within their boundaries to meet the demand for new homes. Expanding a UGB requires a complex, multi-year approval process involving state oversight and local governments. In District 3, this friction pits housing developers and municipal leaders looking to build against conservation groups and rural agricultural landowners."
        ],
        viewA: "Some residents argue that we must simplify and accelerate UGB expansions in the Medford and Ashland areas to build more housing, lower real estate prices, and accommodate local families.",
        viewB: "Others believe we must protect the Rogue Valley's fertile agricultural lands and vineyards from permanent development, preferring policies that increase urban density within existing boundaries instead.",
        tradeoffs: "Housing supply and affordability vs. preserving farmland; lower-density suburban expansion vs. high-density urban infill; local development autonomy vs. statewide environmental goals.",
        feedbackPrompt: "Should we make it easier for cities in District 3 to expand their Urban Growth Boundaries to build more housing, or should we prioritize protecting farm and forest lands by building denser communities within current city limits?",
        searchKeywords: ["urban growth", "zoning", "land use", "development"]
      },
      {
        id: "emergency-shelters-housing",
        title: "Emergency Shelters vs. Permanent Housing",
        background: ["With limited state funding available (such as Project Turnkey, which funded motel-to-shelter conversions in Medford and Ashland), local communities constantly debate the most effective way to help the unhoused. Some funding goes toward immediately acquiring hotels or building managed emergency shelter communities. Other funding is dedicated to long-term affordable housing construction, which takes years to complete but offers permanent stability."],
        viewA: "Some believe the immediate crisis in our towns requires us to spend heavily on emergency shelters, managed campgrounds, and transitional villages to get people off the streets quickly and provide localized services.",
        viewB: "Others argue that emergency shelters are just a temporary band-aid, and we must focus our resources entirely on building permanent, low-income housing so families in the Rogue Valley have long-term stability.",
        tradeoffs: "Immediate short-term relief vs. permanent long-term stability; high operational costs for managed shelters vs. high upfront construction costs for apartments.",
        feedbackPrompt: "When allocating funds to address homelessness in District 3, should we prioritize building emergency shelters for immediate relief, or long-term permanent affordable housing?",
        searchKeywords: ["shelter", "turnkey", "affordable housing", "transitional", "village"]
      }
    ]
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
    feedbackPrompt: "To address rising household costs in District 3, should state lawmakers prioritize tax and fee cuts, or protect funding for local public services like schools and infrastructure?",
    categoryMap: "Economy & Jobs",
    searchKeywords: ["tax", "fee", "cost of living", "budget", "revenue"],
    background: [
      "Household affordability is a major concern for families across District 3. The combination of inflation, rising utility costs, increased insurance premiums, and high property and income taxes has placed a significant strain on family budgets in Jackson County. Many residents feel that their paychecks are no longer keeping pace with the everyday costs of living, from groceries to gas.",
      "The debate over how to address this issue is highly polarized. On one hand, there is a strong push to lower taxes, reduce state fees, and roll back regulations to leave more money in residents' pockets and stimulate economic growth. Proponents of this view argue that the tax burden is uncompetitive and disproportionately harms working-class families and local small businesses in the Rogue Valley.",
      "On the other hand, reducing revenue means making difficult cuts to essential public services. Many residents argue that taxes and fees are necessary to fund critical public infrastructure, education, healthcare, and safety-net programs that vulnerable citizens rely on. Finding the right balance between household tax relief and adequately funding local public services is one of the most pressing challenges facing our state representatives."
    ],
    spokes: [
      {
        id: "property-taxes",
        title: "Property Taxes & Local Levies",
        background: [
          "Oregon's property tax system is governed by constitutional limits (Measure 5 and Measure 50) established in the 1990s to protect homeowners from sudden tax spikes. However, over the decades, this system has created significant inequities between neighbors and left local school districts and municipal services in Jackson County heavily reliant on voter-approved local option levies and bonds.",
          "For fixed-income homeowners in historic communities like Ashland and Jacksonville, property tax bills and local levies represent a growing threat to housing stability. Conversely, local public libraries, fire districts, and public schools argue they cannot maintain adequate staffing levels without local voter support."
        ],
        viewA: "Some residents feel that the constant barrage of local levies and bonds has made homeownership in the Rogue Valley unaffordable, and want stricter caps on property tax burdens.",
        viewB: "Others argue the current system is outdated, starves local communities of necessary resources for schools and emergency services, and needs to be overhauled to ensure equitable funding.",
        tradeoffs: "Homeowner financial stability vs. funding for local services; predictable tax caps vs. tax equity between neighbors; reliance on base taxes vs. reliance on voter-approved levies.",
        feedbackPrompt: "How should we handle property taxes in our community: strictly cap them to protect homeowners from rising costs, or overhaul the system so that local services have reliable funding?",
        searchKeywords: ["property tax", "levy", "assessment", "bond"]
      },
      {
        id: "small-business-regulations",
        title: "Small Business Regulations & Taxes",
        background: ["Rogue Valley businesses—ranging from Medford retail shops to local vineyards and Ashland tourism services—must navigate several state regulations, including the Corporate Activities Tax (CAT), Paid Leave Oregon, and minimum wage increases. While these policies offer benefits to the workforce and public systems, many local business owners report that the combined administrative and financial burden is stifling their ability to stay open or hire local employees."],
        viewA: "Some argue that these regulations and taxes are necessary to ensure corporations pay their fair share, workers are protected, and vital public services are properly funded.",
        viewB: "Others believe the sheer volume of state mandates is crushing family-owned small businesses in District 3, forcing them to raise prices or shut their doors, and we must roll back these burdens.",
        tradeoffs: "Worker protections and public revenue vs. small business viability and economic growth; state mandates vs. free-market flexibility.",
        feedbackPrompt: "Should the state prioritize maintaining strong worker benefits and corporate taxes, or should we reduce regulations and taxes to help local Rogue Valley small businesses survive and grow?",
        searchKeywords: ["small business", "corporate activities tax", "paid leave", "minimum wage", "regulation"]
      }
    ]
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
    feedbackPrompt: "What should we prioritize in District 3: expanding local treatment facilities, supporting regional hospitals, implementing county deflection programs, or controlling healthcare costs?",
    categoryMap: "Healthcare",
    searchKeywords: ["health", "medical", "addiction", "fentanyl", "treatment", "medicaid"],
    background: [
      "Our region is grappling with multiple, intersecting healthcare crises: a severe behavioral health workforce shortage, a fentanyl epidemic, and ongoing challenges in delivering accessible care, particularly in rural parts of District 3. While regional providers like Asante Health System and Providence Medford Medical Center serve a large portion of the valley, ensuring that patients can actually access providers—particularly for mental health and addiction treatment—remains a massive challenge.",
      "The fentanyl crisis has hit Jackson County particularly hard, leading to a rise in overdoses and public safety concerns. In response to state policy shifts, Jackson County has worked to establish 'deflection' programs under HB 4002, which aim to steer individuals arrested for drug possession into local treatment and recovery programs rather than jail.",
      "The core tension lies in finding the right balance between a public health approach and public safety. Should the state focus its resources strictly on expanding treatment beds, recovery programs, and local prevention, or should there be a stronger emphasis on accountability and consequences for drug-related offenses in our communities?"
    ],
    spokes: [
      {
        id: "addiction-services",
        title: "Addiction Services & Fentanyl Crisis",
        background: [
          "The fentanyl crisis has heavily impacted families across the Rogue Valley, exposing severe shortages in detox beds, residential treatment facilities, and outpatient recovery programs in Jackson County.",
          "With the passage of HB 4002, which modified Measure 110, Jackson County is implementing local deflection programs. The goal is to coordinate law enforcement, public defenders, and healthcare providers to offer individuals a direct path to treatment. However, debates persist over whether the local treatment capacity is sufficient to handle the volume of individuals redirected from the criminal justice system."
        ],
        viewA: "Some residents emphasize the urgent need to rapidly build more treatment centers and recovery housing in the Medford area, arguing that we cannot solve a medical crisis through the jail system.",
        viewB: "Others prioritize immediate public safety, advocating for strict enforcement of public drug use laws and mandatory treatment programs as a condition of avoiding incarceration.",
        tradeoffs: "Voluntary treatment programs vs. court-mandated rehabilitation; immediate public order vs. long-term healthcare infrastructure; spending on law enforcement vs. spending on medical facilities.",
        feedbackPrompt: "When addressing the fentanyl crisis, what is the best approach for District 3: strictly enforcing laws to clear public spaces, investing heavily in voluntary treatment facilities, or mandating treatment through the court system?",
        searchKeywords: ["fentanyl", "addiction", "drug", "substance", "overdose"]
      },
      {
        id: "rural-healthcare-access",
        title: "Rural Healthcare Access",
        background: ["In the outlying and rural areas of District 3, residents face a severe shortage of primary care doctors and specialists. Regional clinics face staffing hurdles, and patients frequently have to drive long distances to Medford or even out of the region to receive specialized care or urgent mental health services."],
        viewA: "Some residents argue the state must step in with financial incentives, tuition forgiveness, and targeted funding subsidies to attract and retain doctors in rural Southern Oregon.",
        viewB: "Others believe we should reduce licensing regulations, expand telehealth capabilities, and allow nurse practitioners and physician assistants to provide more care independently to solve the shortage naturally.",
        tradeoffs: "Direct state financial intervention vs. regulatory reform; maintaining high licensing standards vs. expanding the pool of available providers.",
        feedbackPrompt: "To solve the healthcare shortage in our rural communities, should the state focus on increasing financial subsidies to attract doctors, or should we reduce regulations and expand telehealth?",
        searchKeywords: ["rural health", "hospital", "maternity", "doctor shortage", "telehealth", "nursing"]
      }
    ]
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
    viewA: "Some residents want stronger enforcement, placeholder consequences, and more visible public safety.",
    viewB: "Others want prevention, treatment, accountability, civil-rights protections, and alternatives to incarceration when appropriate.",
    tradeoffs: "Public order vs civil liberties; enforcement vs treatment; victim support vs offender rehabilitation; police capacity vs police accountability.",
    feedbackPrompt: "What balance should we strike in District 3 between law enforcement resources, addiction treatment, and court capacity to improve public safety?",
    categoryMap: "Public Safety",
    searchKeywords: ["police", "crime", "justice", "public safety", "court"],
    background: [
      "Public safety and the administration of justice are fundamental local concerns. In the Rogue Valley, communities are navigating challenges related to property crime, public drug use, and domestic violence. Furthermore, Jackson County has faced pressure on jail capacity and backlogs in the local court system, which delays resolution for victims and the accused alike.",
      "A key part of the conversation is the state's ongoing public defense crisis. A shortage of public defenders in Southern Oregon has led to cases being dismissed or delayed, raising serious concerns about constitutional rights and public safety. At the same time, local police departments are focused on staffing, community outreach, and responding to behavioral health crises.",
      "The approach to public safety deeply divides local opinion. Some residents demand a return to stronger enforcement, stricter sentencing, and a more visible police presence to restore order. Others advocate for criminal justice reform, emphasizing the need for addiction treatment, mental health crisis response, and alternatives to incarceration that address the root causes of crime."
    ],
    spokes: [
      {
        id: "retail-theft-crime",
        title: "Retail Theft & Organized Crime",
        background: ["Local businesses in the Rogue Valley—from retail hubs in Medford to historic merchants in Jacksonville—have reported concerns over rising shoplifting and organized retail theft. This impact affects daily operations, consumer costs, and the safety of retail workers. The debate centers on how strictly to prosecute property crimes and what resources local police need to respond."],
        viewA: "Some believe we must crack down hard on retail theft by increasing penalties, funding specialized organized crime task forces, and fully prosecuting repeat offenders to protect our local businesses.",
        viewB: "Others argue that property theft is often a symptom of underlying poverty and addiction, and we should focus on addressing those root causes through social services rather than filling local jails.",
        tradeoffs: "Strict enforcement and protecting businesses vs. addressing root causes of poverty; spending on police and prisons vs. spending on social safety nets.",
        feedbackPrompt: "How should we address retail theft in District 3: by increasing criminal penalties and police funding, or by focusing resources on poverty and addiction treatment?",
        searchKeywords: ["theft", "retail", "organized crime", "property crime", "shoplifting"]
      }
    ]
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
    feedbackPrompt: "What should we prioritize in District 3: school funding, academic outcomes, teacher retention, vocational training, or parental involvement?",
    categoryMap: "Education",
    searchKeywords: ["school", "education", "student", "teacher", "curriculum"],
    background: [
      "Education is the cornerstone of our community's future. Local school districts—including Medford 549C, Ashland School District, and Phoenix-Talent School District—are navigating complex challenges around funding, student outcomes, and the well-being of both educators and youth. While recent investments have targeted early literacy and mental health, school boards are facing tough decisions over budget allocations and classroom resources.",
      "Teachers and administrators in the Rogue Valley are highlighting issues like class sizes, specialized education resource constraints, and educator burnout. Meanwhile, parents and local employers are focused on the relevance of the curriculum. There is a strong, growing push to expand Career and Technical Education (CTE) and apprenticeships to ensure that high school graduates who choose not to pursue a four-year college degree are still prepared for high-paying jobs in local trades.",
      "Debates over education policy frequently center on where to direct funding. Some argue that schools simply need more stable state funding to hire support staff, reduce class sizes, and raise teacher pay. Others contend that the primary issues are accountability, administrative overhead, and the need for greater curriculum transparency and parental involvement."
    ],
    spokes: [
      {
        id: "career-technical-education",
        title: "Career & Technical Education (CTE)",
        background: ["Our region faces a shortage of skilled tradespeople—electricians, plumbers, welders, and healthcare technicians. High schools across the Rogue Valley, in partnership with Rogue Community College (RCC), have begun expanding vocational programs to offer students direct pathways into these high-demand fields without requiring a four-year university degree."],
        viewA: "Some strongly advocate for expanding state and local funding for CTE programs and apprenticeships, arguing that schools must prepare students for guaranteed, high-paying jobs in the trades.",
        viewB: "Others caution that while vocational training is important, we must not track students away from advanced academic subjects or reduce funding for college-preparatory courses.",
        tradeoffs: "Funding vocational shops and equipment vs. funding traditional academic classrooms; pushing immediate workforce entry vs. encouraging university degrees.",
        feedbackPrompt: "Should we significantly shift education funding to prioritize Career and Technical Education (trades/vocational training) in District 3 high schools, or maintain a focus on preparing all students for a 4-year college?",
        searchKeywords: ["cte", "vocational", "trades", "apprenticeship", "career", "workforce"]
      }
    ]
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
    feedbackPrompt: "How should we address infrastructure funding in District 3: support dedicated taxes/fees for road maintenance, or find alternative funding models without raising costs?",
    categoryMap: "Housing & Infrastructure",
    searchKeywords: ["transportation", "road", "transit", "highway", "bridge"],
    background: [
      "Our region's transportation infrastructure is the foundation of the local economy. Regional road departments and the Oregon Department of Transportation (ODOT) face funding constraints to maintain key transit corridors like the I-5 corridor through Medford and Ashland, Highway 99, and Highway 62. As vehicles become more fuel-efficient and electric vehicle adoption increases, revenue from the traditional gas tax is declining.",
      "This funding gap impacts road repairs, bridge maintenance, and emergency evacuation route planning in the Rogue Valley. Additionally, local public transit systems, such as the Rogue Valley Transportation District (RVTD), must balance services between connecting outlying towns like Phoenix and Talent and servicing high-density routes in Medford.",
      "To address these shortfalls, state and local authorities have debated various solutions, including increasing the gas tax, implementing new vehicle registration fees, or exploring highway tolls. Many residents strongly oppose new fees, arguing that household budgets are already stretched too thin, while others argue that without new revenue, road safety and economic connectivity will deteriorate."
    ],
    spokes: [
      {
        id: "road-funding-gas-tax",
        title: "Road Funding & The Gas Tax",
        background: ["Oregon's roads are primarily funded by the gas tax. As cars become more efficient and electric vehicles (EVs) avoid the gas pump entirely, road funding is plummeting while maintenance costs skyrocket. The state is exploring alternatives, such as a per-mile road usage charge (OReGO) or increasing general registration fees, to make up the difference."],
        viewA: "Some residents support shifting to a per-mile usage fee or tolling system, arguing that those who drive the most (including heavy EV users) should pay their fair share for the wear and tear on the roads.",
        viewB: "Others fiercely oppose tracking mileage or adding tolls, arguing that these systems disproportionately hurt rural commuters in District 3 who have no choice but to drive long distances to work.",
        tradeoffs: "Fairness of pay-per-mile vs. privacy concerns of tracking mileage; steady revenue for road repair vs. increased financial burden on long-distance rural commuters.",
        feedbackPrompt: "As gas tax revenues decline, how should we fund road repairs: by implementing a per-mile driving charge, increasing flat registration fees, or tolling major highways?",
        searchKeywords: ["gas tax", "orego", "toll", "mileage", "registration fee", "road maintenance"]
      }
    ]
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
    feedbackPrompt: "How should state and local authorities balance water and wildfire resources in our valley between agricultural operations, residential safety, and environmental protection?",
    categoryMap: "Environment",
    searchKeywords: ["wildfire", "water", "drought", "forest", "environment", "climate"],
    background: [
      "The natural landscape of District 3 is both our greatest asset and our most complex management challenge. The devastating memory of the 2020 Almeda Drive Fire—which swept through Ashland, Talent, Phoenix, and Medford, destroying thousands of homes and businesses—underscores the urgent need for emergency resilience and effective wildfire management in the Rogue Valley.",
      "Furthermore, the Rogue Valley regularly experiences 'smoke seasons' in the summer, where smoke from regional wildfires settles in the basin, impacting air quality, local agriculture (such as vineyards), and the tourism economy, including the outdoor stage at the Oregon Shakespeare Festival in Ashland.",
      "Water rights and drought management present an equally difficult challenge in our region. With dry summers and low snowpacks, the Talent Irrigation District (TID) and other local water managers must constantly balance the competing needs of agricultural farmers, municipal drinking water supplies, and environmental regulations to protect native fish populations."
    ],
    spokes: [
      {
        id: "wildfires",
        title: "Wildfire Management & Forest Health",
        background: [
          "Catastrophic wildfires are a critical concern in Southern Oregon, threatening residential areas, public health, and local economies. Over a century of fire suppression, combined with changing climate conditions and prolonged droughts, has left local forests and public lands overstocked with highly combustible dry vegetation.",
          "The debate centers on how to protect communities. Traditional forest management approaches emphasize active logging, commercial thinning, and prescribed burns to reduce fuel loads. Alternatively, state agencies have recently pushed for 'home hardening' regulations, creating wildfire risk maps and requiring property owners in high-risk zones to clear defensible space and upgrade building materials."
        ],
        viewA: "Some residents strongly believe that the only way to stop catastrophic fires in Southern Oregon is to aggressively manage our forests through increased logging, clearing underbrush, and putting local timber workers back in the woods.",
        viewB: "Others argue that we cannot log our way out of the crisis, and should instead focus state funds on helping homeowners fireproof their properties and strengthening emergency response capabilities.",
        tradeoffs: "Commercial logging revenues vs. environmental conservation; state-funded forest clearing vs. mandates on private property owners; proactive landscape management vs. reactive suppression tactics.",
        feedbackPrompt: "To protect our communities from catastrophic wildfires, should the state prioritize aggressive logging and forest thinning, or focus on helping rural homeowners fireproof their properties?",
        searchKeywords: ["wildfire", "forest", "timber", "fire", "burn"]
      },
      {
        id: "water-rights-drought",
        title: "Water Rights & Drought",
        background: ["The Rogue River Basin and Southern Oregon frequently battle severe drought conditions. Water managers must allocate limited resources among agricultural farmers who need it for crops, municipalities that need it for drinking water, and environmental regulations that require water to be kept in rivers to protect endangered fish species."],
        viewA: "Some prioritize the agricultural industry and rural livelihoods, arguing that without secure water rights for farming in the Rogue Valley, our local food supply and rural economies will collapse.",
        viewB: "Others prioritize environmental and tribal obligations, arguing that we must maintain minimum river flows to prevent the extinction of native fish species and protect the long-term health of the ecosystem.",
        tradeoffs: "Economic survival of local farms vs. ecological survival of native fish; commercial water use vs. environmental conservation mandates.",
        feedbackPrompt: "During times of severe drought, how should we prioritize limited water resources in our valley: protecting agricultural farming operations or maintaining river flows for endangered fish and wildlife?",
        searchKeywords: ["water", "drought", "klamath", "agriculture", "farm", "fish"]
      }
    ]
  }
];
