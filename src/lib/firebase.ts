import { initializeApp, getApps } from "firebase/app";
import { 
  getFirestore, 
  doc, 
  getDoc, 
  setDoc, 
  increment,
  Firestore,
  collection,
  addDoc,
  getDocs,
  query,
  orderBy
} from "firebase/firestore";

// Read Firebase configurations from Next.js public environment variables
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Check if Firebase keys are fully set
const isFirebaseEnabled = 
  !!firebaseConfig.apiKey && 
  !!firebaseConfig.projectId;

let app;
let db: Firestore | null = null;

if (isFirebaseEnabled) {
  try {
    app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
    db = getFirestore(app);
    console.log("Firebase Firestore initialized successfully.");
  } catch (err) {
    console.error("Failed to initialize Firebase SDK:", err);
  }
} else {
  console.warn("Firebase credentials missing. Running in local simulation mode.");
}

// ==========================================
// 1. BILL VOTING LOGIC
// ==========================================

export interface BillVoteData {
  yes: number;
  no: number;
  undecided: number;
}

export async function submitBillVote(
  billId: string, 
  vote: "yes" | "no" | "undecided"
): Promise<void> {
  if (db) {
    try {
      const voteRef = doc(db, "votes", billId);
      await setDoc(
        voteRef, 
        { [vote]: increment(1) }, 
        { merge: true }
      );
    } catch (err) {
      console.error("Error writing vote to Firestore:", err);
    }
  } else {
    // Local storage simulation
    const votesKey = `mock_votes_${billId}`;
    const raw = localStorage.getItem(votesKey);
    const votes: BillVoteData = raw ? JSON.parse(raw) : { yes: 15, no: 5, undecided: 2 };
    votes[vote] += 1;
    localStorage.setItem(votesKey, JSON.stringify(votes));
  }
}

export async function getBillVotes(billId: string): Promise<BillVoteData> {
  // Setup baseline mock values so new bills start with realistic counts
  const defaultMockVotes: BillVoteData = {
    yes: 24 + Math.floor(Math.random() * 20),
    no: 8 + Math.floor(Math.random() * 10),
    undecided: 5 + Math.floor(Math.random() * 5),
  };

  if (db) {
    try {
      const voteRef = doc(db, "votes", billId);
      const snap = await getDoc(voteRef);
      if (snap.exists()) {
        const data = snap.data();
        return {
          yes: data.yes || 0,
          no: data.no || 0,
          undecided: data.undecided || 0,
        };
      }
    } catch (err) {
      console.error("Error reading votes from Firestore:", err);
    }
  }

  // Local storage simulation / default fallback
  const votesKey = `mock_votes_${billId}`;
  if (typeof window !== "undefined") {
    const raw = localStorage.getItem(votesKey);
    if (raw) return JSON.parse(raw);
  }
  return defaultMockVotes;
}

// ==========================================
// 2. BUDGET ALLOCATOR LOGIC
// ==========================================

export interface BudgetAllocation {
  housing: number;
  wildfire: number;
  education: number;
  safety: number;
  roads: number;
}

const DEFAULT_BUDGET_AVG: BudgetAllocation = {
  housing: 28,
  wildfire: 24,
  education: 20,
  safety: 15,
  roads: 13,
};

export async function submitBudget(allocation: BudgetAllocation): Promise<void> {
  if (db) {
    try {
      const budgetRef = doc(db, "aggregates", "budget_totals");
      await setDoc(
        budgetRef,
        {
          count: increment(1),
          housing_sum: increment(allocation.housing),
          wildfire_sum: increment(allocation.wildfire),
          education_sum: increment(allocation.education),
          safety_sum: increment(allocation.safety),
          roads_sum: increment(allocation.roads),
        },
        { merge: true }
      );
    } catch (err) {
      console.error("Error writing budget totals to Firestore:", err);
    }
  } else {
    // Local storage simulation
    const key = "mock_budget_totals";
    const raw = localStorage.getItem(key);
    const data = raw ? JSON.parse(raw) : { count: 32, housing_sum: 896, wildfire_sum: 768, education_sum: 640, safety_sum: 480, roads_sum: 416 };
    
    data.count += 1;
    data.housing_sum += allocation.housing;
    data.wildfire_sum += allocation.wildfire;
    data.education_sum += allocation.education;
    data.safety_sum += allocation.safety;
    data.roads_sum += allocation.roads;
    
    localStorage.setItem(key, JSON.stringify(data));
  }
}

export async function getBudgetAverages(): Promise<BudgetAllocation> {
  if (db) {
    try {
      const budgetRef = doc(db, "aggregates", "budget_totals");
      const snap = await getDoc(budgetRef);
      if (snap.exists()) {
        const data = snap.data();
        const count = data.count || 0;
        if (count > 0) {
          return {
            housing: Math.round((data.housing_sum || 0) / count),
            wildfire: Math.round((data.wildfire_sum || 0) / count),
            education: Math.round((data.education_sum || 0) / count),
            safety: Math.round((data.safety_sum || 0) / count),
            roads: Math.round((data.roads_sum || 0) / count),
          };
        }
      }
    } catch (err) {
      console.error("Error reading budget averages from Firestore:", err);
    }
  }

  // Local storage simulation / default fallback
  if (typeof window !== "undefined") {
    const raw = localStorage.getItem("mock_budget_totals");
    if (raw) {
      const data = JSON.parse(raw);
      const count = data.count || 0;
      if (count > 0) {
        return {
          housing: Math.round(data.housing_sum / count),
          wildfire: Math.round(data.wildfire_sum / count),
          education: Math.round(data.education_sum / count),
          safety: Math.round(data.safety_sum / count),
          roads: Math.round(data.roads_sum / count),
        };
      }
    }
  }

  return DEFAULT_BUDGET_AVG;
}

// ==========================================
// 3. PRIORITY RANKING LOGIC
// ==========================================

export interface PriorityAverages {
  housing: number;
  wildfire: number;
  cost_of_living: number;
  safety: number;
  education: number;
  healthcare: number;
  transit: number;
}

const DEFAULT_PRIORITY_AVG: PriorityAverages = {
  wildfire: 94,
  housing: 89,
  cost_of_living: 85,
  safety: 78,
  education: 76,
  healthcare: 72,
  transit: 65,
};

export async function submitPriorities(rankedIds: string[]): Promise<void> {
  // Map index to points (7 points for 1st place, down to 1 for 7th place)
  const points: { [key: string]: number } = {};
  rankedIds.forEach((id, index) => {
    points[`${id}_sum`] = 7 - index;
  });

  if (db) {
    try {
      const priorityRef = doc(db, "aggregates", "priority_totals");
      const updatePayload: { [key: string]: any } = {
        count: increment(1)
      };
      Object.keys(points).forEach((key) => {
        updatePayload[key] = increment(points[key]);
      });
      await setDoc(priorityRef, updatePayload, { merge: true });
    } catch (err) {
      console.error("Error writing priority totals to Firestore:", err);
    }
  } else {
    // Local storage simulation
    const key = "mock_priority_totals";
    const raw = localStorage.getItem(key);
    const data = raw ? JSON.parse(raw) : { 
      count: 45, 
      housing_sum: 280, 
      wildfire_sum: 300, 
      cost_of_living_sum: 250, 
      safety_sum: 210, 
      education_sum: 200, 
      healthcare_sum: 180, 
      transit_sum: 150 
    };

    data.count += 1;
    rankedIds.forEach((id, index) => {
      const field = `${id}_sum`;
      if (data[field] !== undefined) {
        data[field] += (7 - index);
      } else {
        data[field] = (7 - index);
      }
    });

    localStorage.setItem(key, JSON.stringify(data));
  }
}

export async function getPriorityAverages(): Promise<PriorityAverages> {
  if (db) {
    try {
      const priorityRef = doc(db, "aggregates", "priority_totals");
      const snap = await getDoc(priorityRef);
      if (snap.exists()) {
        const data = snap.data();
        const count = data.count || 0;
        if (count > 0) {
          const maxPointsPerSubmission = 7;
          const getScore = (sumField: string) => 
            Math.round(((data[sumField] || 0) / (count * maxPointsPerSubmission)) * 100);

          return {
            housing: getScore("housing_sum"),
            wildfire: getScore("wildfire_sum"),
            cost_of_living: getScore("cost_of_living_sum"),
            safety: getScore("safety_sum"),
            education: getScore("education_sum"),
            healthcare: getScore("healthcare_sum"),
            transit: getScore("transit_sum"),
          };
        }
      }
    } catch (err) {
      console.error("Error reading priority averages from Firestore:", err);
    }
  }

  // Local storage simulation / default fallback
  if (typeof window !== "undefined") {
    const raw = localStorage.getItem("mock_priority_totals");
    if (raw) {
      const data = JSON.parse(raw);
      const count = data.count || 0;
      if (count > 0) {
        const maxPointsPerSubmission = 7;
        const getScore = (field: string) => 
          Math.round((data[field] / (count * maxPointsPerSubmission)) * 100);

        return {
          housing: getScore("housing_sum"),
          wildfire: getScore("wildfire_sum"),
          cost_of_living: getScore("cost_of_living_sum"),
          safety: getScore("safety_sum"),
          education: getScore("education_sum"),
          healthcare: getScore("healthcare_sum"),
          transit: getScore("transit_sum"),
        };
      }
    }
  }

  return DEFAULT_PRIORITY_AVG;
}

// ==========================================
// 4. SOLUTION FEEDBACK LOGIC
// ==========================================

export interface SolutionFeedbackData {
  firstName: string;
  lastName: string;
  email: string;
  issueId: string;
  spokeId?: string;
  solution: string;
  createdAt?: string;
}

export async function submitSolutionFeedback(
  data: SolutionFeedbackData
): Promise<void> {
  if (db) {
    try {
      const colRef = collection(db, "constituent_solutions");
      await addDoc(colRef, {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        issueId: data.issueId,
        spokeId: data.spokeId || null,
        solution: data.solution,
        createdAt: new Date().toISOString()
      });
      console.log("Solution feedback written to Firestore successfully.");
    } catch (err) {
      console.error("Error writing solution feedback to Firestore:", err);
    }
  } else {
    // Local storage simulation
    const key = "mock_constituent_solutions";
    let list: any[] = [];
    if (typeof window !== "undefined") {
      const raw = localStorage.getItem(key);
      list = raw ? JSON.parse(raw) : [];
      list.push({
        ...data,
        createdAt: new Date().toISOString()
      });
      localStorage.setItem(key, JSON.stringify(list));
      console.log("Solution feedback saved in simulated LocalStorage:", list);
    }
  }
}

// ==========================================
// 5. ADMIN DASHBOARD DATA FETCHING
// ==========================================

export async function getAllSolutions(): Promise<SolutionFeedbackData[]> {
  if (db) {
    try {
      const colRef = collection(db, "constituent_solutions");
      const q = query(colRef, orderBy("createdAt", "desc"));
      const snap = await getDocs(q);
      const list: SolutionFeedbackData[] = [];
      snap.forEach((doc) => {
        const d = doc.data();
        list.push({
          firstName: d.firstName || "",
          lastName: d.lastName || "",
          email: d.email || "",
          issueId: d.issueId || "",
          spokeId: d.spokeId || undefined,
          solution: d.solution || "",
          createdAt: d.createdAt || ""
        });
      });
      return list;
    } catch (err) {
      console.error("Error getting all solutions from Firestore:", err);
      return [];
    }
  }

  // Local storage simulation
  if (typeof window !== "undefined") {
    const raw = localStorage.getItem("mock_constituent_solutions");
    if (raw) {
      return JSON.parse(raw);
    }
  }

  // Return some sample data so the dashboard is beautiful even in mock mode
  return [
    {
      firstName: "Sarah",
      lastName: "Jenkins",
      email: "sarah.j@example.com",
      issueId: "housing-homelessness-affordability",
      solution: "We need more modular housing projects in Medford. The current zoning laws prevent quick housing construction. State grants should incentivize cities to speed up zoning approvals.",
      createdAt: new Date(Date.now() - 3600000 * 2).toISOString()
    },
    {
      firstName: "David",
      lastName: "Miller",
      email: "dmiller@roguevalley.net",
      issueId: "wildfire-mitigation-drought",
      solution: "In Ashland, we need more clear-cut fire breaks near the city boundaries. The smoke mitigation programs should also provide free air filters to low-income senior citizens.",
      createdAt: new Date(Date.now() - 3600000 * 5).toISOString()
    },
    {
      firstName: "Maria",
      lastName: "Rodriguez",
      email: "maria.r@talentoregon.org",
      issueId: "cost-of-living-taxes",
      solution: "Reduce property taxes for families rebuilding after the Almeda fire. Phoenix and Talent still have vacant lots because of the high cost of construction and fees.",
      createdAt: new Date(Date.now() - 3600000 * 24).toISOString()
    }
  ];
}

// Fetch all bill vote counts
export interface BillVoteRecord {
  billId: string;
  yes: number;
  no: number;
  undecided: number;
}

export async function getAllVotes(): Promise<BillVoteRecord[]> {
  if (db) {
    try {
      const colRef = collection(db, "votes");
      const snap = await getDocs(colRef);
      const list: BillVoteRecord[] = [];
      snap.forEach((doc) => {
        const data = doc.data();
        list.push({
          billId: doc.id,
          yes: data.yes || 0,
          no: data.no || 0,
          undecided: data.undecided || 0
        });
      });
      return list;
    } catch (err) {
      console.error("Error getting all votes from Firestore:", err);
      return [];
    }
  }

  // Fallback to local storage/mock data
  const bills = ["sb-1502", "sb-1530", "hb-4002", "hb-4115", "sb-5701"];
  const list: BillVoteRecord[] = [];
  for (const billId of bills) {
    const votesKey = `mock_votes_${billId}`;
    if (typeof window !== "undefined") {
      const raw = localStorage.getItem(votesKey);
      if (raw) {
        const v = JSON.parse(raw);
        list.push({ billId, ...v });
        continue;
      }
    }
    list.push({
      billId,
      yes: 45 + Math.floor(Math.random() * 30),
      no: 15 + Math.floor(Math.random() * 20),
      undecided: 10 + Math.floor(Math.random() * 10)
    });
  }
  return list;
}

