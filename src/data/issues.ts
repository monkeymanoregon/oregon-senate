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
    viewA: "Some residents want more state action: shelters, prevention, affordable housing, mental health/addiction services, rent relief, and faster construction.",
    viewB: "Others worry about cost, accountability, neighborhood impacts, public camping, land-use protections, and whether programs are producing visible results.",
    tradeoffs: "Housing supply vs land preservation; compassion vs public order; state funding vs local control; tenant protection vs landlord/property-owner costs.",
    feedbackPrompt: "What should Oregon prioritize most: more shelter beds, more affordable housing, stricter public camping rules, addiction/mental health services, rent relief, land use reform, or something else?",
    categoryMap: "Housing & Infrastructure",
    searchKeywords: ["housing", "homeless", "rent", "tenant", "landlord"],
    background: [
      "Oregon is currently facing one of the most severe housing and homelessness crises in the nation. Over the last decade, housing production has severely lagged behind population growth, resulting in a dramatic spike in home prices and rental rates across the state. This affordability gap has forced many families out of their homes and contributed to a visible increase in unsheltered homelessness in both urban centers and rural communities.",
      "In response, the state legislature has debated and passed various measures aimed at increasing housing supply, funding emergency shelters, and regulating public camping. However, these solutions often ignite fierce debates over local control, property rights, and the balance between providing compassionate services and maintaining public order. Zoning reforms, such as modifying the Urban Growth Boundary or changing single-family zoning laws, are equally controversial, pitting environmental conservationists against housing advocates.",
      "As we look to the future, the state must decide where to direct its limited resources. Should the focus be on expanding permanent supportive housing, enforcing stricter camping bans, or removing regulatory barriers to accelerate private construction? Finding a consensus requires listening to all perspectives, from renters and unhoused individuals to homeowners and local businesses."
    ],
    spokes: [
      {
        id: "urban-growth-boundary",
        title: "Urban Growth Boundaries & Land Use",
        background: [
          "Oregon's land-use planning system, established in 1973, mandates that every city maintain an Urban Growth Boundary (UGB) to control urban sprawl and protect surrounding farm and forest lands. While this system has successfully preserved the state's natural beauty and agricultural heritage, it is increasingly cited as a barrier to housing development.",
          "As populations have grown, cities like Medford have struggled to find buildable land within their boundaries. Expanding a UGB requires a complex, multi-year approval process that involves state oversight, local governments, and extensive public comment. This friction often pits housing developers and municipal leaders against conservation groups and rural landowners."
        ],
        viewA: "Some residents argue that we must simplify and accelerate UGB expansions to build more housing, lower real estate prices, and accommodate population growth.",
        viewB: "Others believe we must protect agricultural lands and natural spaces from permanent development, preferring policies that increase urban density within existing boundaries instead.",
        tradeoffs: "Housing supply and affordability vs. preserving farmland; lower-density suburban expansion vs. high-density urban infill; local development autonomy vs. statewide environmental goals.",
        feedbackPrompt: "Should Oregon make it easier for cities to expand their Urban Growth Boundaries to build more housing, or should we prioritize protecting farm and forest lands by building denser communities within current city limits?",
        searchKeywords: ["urban growth", "zoning", "land use", "development"]
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
    feedbackPrompt: "When Oregon faces a budget shortfall, should lawmakers prioritize cutting spending, raising revenue, reducing regulations to grow the economy, or restructuring existing programs?",
    categoryMap: "Economy & Jobs",
    searchKeywords: ["tax", "fee", "cost of living", "budget", "revenue"],
    background: [
      "Household affordability is a growing concern for families across Oregon. The combination of inflation, rising utility costs, increased insurance premiums, and high property and income taxes has placed a significant strain on family budgets. Many residents feel that their paychecks are no longer keeping pace with the everyday costs of living, from groceries to gas.",
      "The debate over how to address this issue is highly polarized. On one hand, there is a strong push to lower taxes, reduce state fees, and roll back regulations to leave more money in residents' pockets and stimulate economic growth. Proponents of this view argue that Oregon's tax burden is uncompetitive and disproportionately harms working-class families and small businesses.",
      "On the other hand, reducing revenue means making difficult cuts to essential state services. Many residents argue that taxes and fees are necessary to fund critical public infrastructure, education, healthcare, and safety-net programs that vulnerable Oregonians rely on. They worry that cutting the budget will lead to a decline in the quality of life and put further strain on local communities. Finding the right balance between household tax relief and adequately funding state services is one of the most pressing challenges facing the legislature."
    ],
    spokes: [
      {
        id: "property-taxes",
        title: "Property Taxes & Local Levies",
        background: [
          "Oregon's property tax system is famously complex, largely governed by two constitutional amendments passed in the 1990s: Measure 5 and Measure 50. These measures established rate limits and decoupled a property's assessed value from its real market value. The intention was to provide stability and protect homeowners from sudden tax spikes caused by a booming housing market.",
          "However, over the decades, this system has created significant inequities. Two identical houses in the same neighborhood can have vastly different tax bills depending on when they were built or sold. Furthermore, to make up for the limitations on base property taxes, local governments frequently rely on specialized bonds and local option levies to fund essential services like schools, fire departments, and libraries."
        ],
        viewA: "Some residents feel that the constant barrage of local levies and bonds has made homeownership unaffordable, and want stricter caps on overall property tax burdens.",
        viewB: "Others argue the current system is outdated, starves local communities of necessary resources for schools and emergency services, and needs to be completely overhauled to be more equitable.",
        tradeoffs: "Homeowner financial stability vs. funding for local services; predictable tax caps vs. tax equity between neighbors; reliance on base taxes vs. reliance on voter-approved levies.",
        feedbackPrompt: "How should we handle property taxes in Oregon: strictly cap them to protect homeowners from rising costs, or overhaul the system so that local communities have reliable funding for schools and emergency services?",
        searchKeywords: ["property tax", "levy", "assessment", "bond"]
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
    feedbackPrompt: "Should Oregon focus more on treatment access, law enforcement accountability, deflection programs, Medicaid stability, rural healthcare, or cost control?",
    categoryMap: "Healthcare",
    searchKeywords: ["health", "medical", "addiction", "fentanyl", "treatment", "medicaid"],
    background: [
      "Oregon's healthcare system is grappling with multiple, intersecting crises: a severe behavioral health workforce shortage, a fentanyl epidemic, and ongoing debates over how to best deliver accessible care, especially in rural areas. While the Oregon Health Plan (Medicaid) provides coverage to a large portion of the state, ensuring that patients can actually access providers—particularly for mental health and addiction treatment—remains a massive logistical hurdle.",
      "The passage and subsequent modification of Measure 110 placed Oregon at the center of a national debate on drug decriminalization and addiction treatment. The rollout of the measure faced significant criticism due to delays in funding for treatment centers and a perceived increase in public drug use. Recent legislative actions, such as HB 4002, have attempted to reintroduce certain criminal penalties while expanding 'deflection' programs aimed at steering individuals into treatment rather than jail.",
      "The core tension lies in finding the right balance between a public health approach and public safety. Should the state focus its resources strictly on expanding treatment beds, recovery programs, and prevention, or should there be a stronger emphasis on accountability and consequences for drug-related offenses? Additionally, rural communities face unique challenges, including hospital closures and a lack of specialty care, which require targeted state support and innovative healthcare delivery models."
    ],
    spokes: [
      {
        id: "addiction-services",
        title: "Addiction Services & Fentanyl Crisis",
        background: [
          "The fentanyl crisis has devastated communities across Oregon, claiming thousands of lives and visibly impacting public spaces. Fentanyl's extreme potency and low cost have overwhelmed the state's existing addiction infrastructure, exposing severe shortages in detox beds, residential treatment facilities, and outpatient recovery programs.",
          "Voters passed Measure 110 with the promise of shifting addiction from a criminal justice issue to a public health issue by decriminalizing user quantities of drugs and funneling marijuana tax revenue into treatment. However, the rollout was plagued by bureaucratic delays. In response to public outcry over open-air drug use and rising overdoses, the legislature passed HB 4002, which recriminalized certain drug possession while establishing 'deflection' programs aimed at offering treatment in lieu of jail time."
        ],
        viewA: "Some residents emphasize the urgent need to rapidly build more treatment centers and recovery housing, arguing that we cannot solve a medical crisis through the criminal justice system.",
        viewB: "Others prioritize immediate community safety, advocating for strict enforcement of public drug use laws and mandatory treatment programs as a condition of avoiding jail.",
        tradeoffs: "Voluntary treatment programs vs. court-mandated rehabilitation; immediate public order vs. long-term healthcare infrastructure; spending on law enforcement vs. spending on medical facilities.",
        feedbackPrompt: "When addressing the fentanyl crisis, what is the best approach for our community: strictly enforcing laws to clear public spaces, investing heavily in voluntary treatment facilities, or mandating treatment through the court system?",
        searchKeywords: ["fentanyl", "addiction", "drug", "substance", "overdose"]
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
    viewA: "Some residents want stronger enforcement, faster consequences, and more visible public safety.",
    viewB: "Others want prevention, treatment, accountability, civil-rights protections, and alternatives to incarceration when appropriate.",
    tradeoffs: "Public order vs civil liberties; enforcement vs treatment; victim support vs offender rehabilitation; police capacity vs police accountability.",
    feedbackPrompt: "What balance should Oregon strike between enforcement, treatment, prevention, victim support, police accountability, and court capacity?",
    categoryMap: "Public Safety",
    searchKeywords: ["police", "crime", "justice", "public safety", "court"],
    background: [
      "Public safety and the administration of justice are fundamental responsibilities of state government, yet Oregon's system is currently facing unprecedented strain. Communities across the state are concerned about rising rates of property crime, the visible impact of the fentanyl crisis on public spaces, and the ongoing challenges of domestic violence and human trafficking.",
      "Compounding these issues is a severe crisis in the state's public defense system, leading to court backlogs and instances where individuals accused of crimes are released without representation. This backlog frustrates victims seeking justice and undermines the constitutional rights of the accused. At the same time, debates continue over police staffing levels, law enforcement accountability, and the effectiveness of current probation and reentry programs.",
      "The approach to public safety deeply divides public opinion. Some Oregonians demand a return to stronger enforcement, stricter sentencing, and a more visible police presence to restore public order and deter crime. Others advocate for criminal justice reform, emphasizing the need for addiction treatment, mental health crisis response, police accountability, and alternatives to incarceration that address the root causes of crime without disproportionately impacting marginalized communities."
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
    feedbackPrompt: "What should Oregon prioritize first in education: funding, accountability, teacher retention, career training, student safety, parent involvement, or academic outcomes?",
    categoryMap: "Education",
    searchKeywords: ["school", "education", "student", "teacher", "curriculum"],
    background: [
      "Education is the cornerstone of Oregon's future, but the state's K-12 system is facing intense scrutiny over student outcomes, funding mechanisms, and the well-being of both educators and youth. Despite significant investments in recent years, Oregon continues to struggle with reading and math proficiency rates, chronic absenteeism, and a growing youth mental health crisis exacerbated by the pandemic.",
      "Educators are sounding the alarm on growing class sizes, inadequate special education resources, and burnout leading to severe teacher shortages. Meanwhile, parents and employers are increasingly focused on the relevance of the curriculum. There is a strong push to expand Career and Technical Education (CTE) and apprenticeships to ensure that high school graduates who choose not to pursue a four-year college degree are still prepared for high-paying, in-demand jobs in the trades and technology sectors.",
      "Debates over education policy frequently center on where to direct funding and how to measure success. Some argue that schools simply need more stable, increased funding to hire support staff, reduce class sizes, and raise teacher pay. Others contend that the primary issues are a lack of accountability, administrative bloat, and the need for greater curriculum transparency and parental involvement. Bridging the gap between these perspectives is essential for delivering the education our children deserve."
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
    feedbackPrompt: "Would you support higher transportation taxes or fees if they were dedicated to road maintenance, or should Oregon find another way to fund infrastructure?",
    categoryMap: "Housing & Infrastructure",
    searchKeywords: ["transportation", "road", "transit", "highway", "bridge"],
    background: [
      "Oregon's transportation infrastructure is the literal foundation of our economy, but it is currently facing a severe funding shortfall. The Oregon Department of Transportation (ODOT) and local county road departments are struggling to maintain existing roads, bridges, and emergency routes. As vehicles become more fuel-efficient and the adoption of electric vehicles increases, revenue from the traditional gas tax—the primary funding source for road maintenance—is steadily declining.",
      "This funding gap has real-world consequences: an increase in potholes, delayed seismic upgrades for critical bridges, and a lack of resources for improving rural roads and freight corridors. To address the shortfall, the legislature has debated various solutions, including increasing the gas tax, implementing new vehicle registration fees, or exploring alternative funding models like tolling or a per-mile road usage charge.",
      "These proposals are highly contentious. Many residents strongly oppose any new taxes or fees, arguing that household budgets are already stretched too thin and that state agencies must first demonstrate greater accountability and efficiency with existing funds. Conversely, others argue that without new revenue, the state's infrastructure will deteriorate to dangerous levels, jeopardizing public safety, economic growth, and the reliability of essential transit and freight networks."
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
    feedbackPrompt: "When water or wildfire resources are limited, how should Oregon balance farms, homes, forests, fish, cities, and rural communities?",
    categoryMap: "Environment",
    searchKeywords: ["wildfire", "water", "drought", "forest", "environment", "climate"],
    background: [
      "Oregon's natural landscape is both its greatest asset and its most complex management challenge. In recent years, the state has experienced increasingly severe and frequent wildfires, prolonged droughts, and critical water shortages. These compounding crises threaten lives, property, and the economic vitality of rural and agricultural communities, while also degrading air quality statewide.",
      "The debate over wildfire prevention is intense. Some advocate for aggressive forest management, including increased logging, fuel reduction, and prescribed burns to clear out the underbrush that fuels catastrophic fires. They emphasize the need to protect rural property owners and support the timber industry. Others prioritize climate resilience and ecosystem protections, arguing for stricter limits on development in fire-prone areas and focusing on home hardening rather than widespread logging.",
      "Water rights and drought management present an equally difficult challenge. In regions like the Klamath Basin, there simply isn't enough water to satisfy all demands. The state must constantly balance the competing needs of agricultural irrigation, municipal drinking water supplies, and the ecological requirements for endangered fish populations. How Oregon manages these limited natural resources will determine the long-term sustainability of our environment and our economy."
    ],
    spokes: [
      {
        id: "wildfires",
        title: "Wildfire Management & Forest Health",
        background: [
          "Wildfires are no longer just a summer threat in Oregon; they represent a year-round crisis that destroys homes, devastates the timber industry, and blankets the state in hazardous smoke. Over a century of aggressive fire suppression, combined with changing climate conditions and prolonged droughts, has left many of Oregon's forests overstocked with dry vegetation that acts as highly combustible fuel.",
          "The state is currently debating the most effective way to protect communities. Traditional forest management approaches emphasize active logging, commercial thinning, and prescribed burns to reduce fuel loads. However, implementing these strategies across millions of acres of state and federal land is incredibly expensive and highly regulated. Alternatively, state agencies have recently pushed for 'home hardening' regulations, creating wildfire risk maps and requiring property owners in high-risk zones to clear defensible space and upgrade building materials."
        ],
        viewA: "Some residents strongly believe that the only way to stop catastrophic fires is to aggressively manage our forests through increased logging, clearing underbrush, and putting local timber workers back in the woods.",
        viewB: "Others argue that we cannot log our way out of the crisis, and should instead focus state funds on helping homeowners fireproof their properties and strengthening emergency response capabilities.",
        tradeoffs: "Commercial logging revenues vs. environmental conservation; state-funded forest clearing vs. mandates on private property owners; proactive landscape management vs. reactive suppression tactics.",
        feedbackPrompt: "To protect our communities from catastrophic wildfires, should the state prioritize aggressive logging and forest thinning, or focus on helping rural homeowners fireproof their properties?",
        searchKeywords: ["wildfire", "forest", "timber", "fire", "burn"]
      }
    ]
  }
];
