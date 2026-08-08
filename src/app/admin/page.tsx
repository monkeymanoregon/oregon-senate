"use client";

import { useState, useEffect } from "react";
import { 
  getAllSolutions, 
  getAllVotes, 
  getBudgetAverages, 
  getPriorityAverages, 
  SolutionFeedbackData, 
  BillVoteRecord, 
  BudgetAllocation, 
  PriorityAverages 
} from "@/lib/firebase";

const ISSUE_LABELS: { [key: string]: string } = {
  "housing-homelessness-affordability": "Housing & Homelessness",
  "wildfire-mitigation-drought": "Wildfire & Drought",
  "cost-of-living-taxes": "Cost of Living & Taxes",
  "public-safety-justice": "Public Safety & Justice",
  "education-schools": "Education & Schools",
  "healthcare-mental-health-addiction": "Healthcare & Addiction",
  "transportation-infrastructure": "Transportation & Infrastructure"
};

const BILL_LABELS: { [key: string]: string } = {
  "sb-1502": "SB 1502 - Forest Management and Wildfire Resiliency",
  "sb-1530": "SB 1530 - Affordable Housing Infrastructure Funding",
  "hb-4002": "HB 4002 - Deflection Program Funding and Justice Reforms",
  "hb-4115": "HB 4115 - State Irrigation Water Rights Realignment",
  "sb-5701": "SB 5701 - Jackson County Road Maintenance Grant"
};

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [activeTab, setActiveTab] = useState<"solutions" | "votes" | "budget" | "priorities">("solutions");
  
  const [loading, setLoading] = useState(true);
  const [solutions, setSolutions] = useState<SolutionFeedbackData[]>([]);
  const [votes, setVotes] = useState<BillVoteRecord[]>([]);
  const [budget, setBudget] = useState<BudgetAllocation>({ housing: 28, wildfire: 24, education: 20, safety: 15, roads: 13 });
  const [priorities, setPriorities] = useState<PriorityAverages>({ housing: 89, wildfire: 94, cost_of_living: 85, safety: 78, education: 76, healthcare: 72, transit: 65 });
  
  const [searchTerm, setSearchTerm] = useState("");
  const [issueFilter, setIssueFilter] = useState("");

  const correctPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "democracy3";

  // Check session storage for existing authentication
  useEffect(() => {
    if (typeof window !== "undefined") {
      const auth = sessionStorage.getItem("admin_auth");
      if (auth === "true") {
        setIsAuthenticated(true);
      }
    }
  }, []);

  // Fetch data if authenticated
  useEffect(() => {
    if (!isAuthenticated) return;
    
    async function loadDashboardData() {
      setLoading(true);
      try {
        const [solsData, votesData, budgetData, prioritiesData] = await Promise.all([
          getAllSolutions(),
          getAllVotes(),
          getBudgetAverages(),
          getPriorityAverages()
        ]);
        setSolutions(solsData);
        setVotes(votesData);
        setBudget(budgetData);
        setPriorities(prioritiesData);
      } catch (err) {
        console.error("Error loading dashboard data:", err);
      } finally {
        setLoading(false);
      }
    }

    loadDashboardData();
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === correctPassword) {
      setIsAuthenticated(true);
      sessionStorage.setItem("admin_auth", "true");
      setLoginError("");
    } else {
      setLoginError("Invalid Access Code. Please try again.");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("admin_auth");
    setPassword("");
  };

  // Filter solutions
  const filteredSolutions = solutions.filter((sol) => {
    const matchesSearch = 
      sol.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sol.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sol.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sol.solution.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesIssue = !issueFilter || sol.issueId === issueFilter;
    
    return matchesSearch && matchesIssue;
  });

  if (!isAuthenticated) {
    return (
      <div style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "radial-gradient(circle at top, #0f172a, #020617)",
        fontFamily: "var(--font-sans)",
        padding: "1.5rem"
      }}>
        <div style={{
          backgroundColor: "#1e293b",
          border: "1px solid #334155",
          borderRadius: "12px",
          padding: "3rem 2rem",
          maxWidth: "420px",
          width: "100%",
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.5)",
          textAlign: "center",
          animation: "scaleUp 0.3s ease-out"
        }}>
          <div style={{
            color: "var(--accent)",
            fontSize: "2.5rem",
            marginBottom: "1rem"
          }}>
            🏛️
          </div>
          <h1 style={{
            color: "#f8fafc",
            fontSize: "1.6rem",
            fontWeight: "bold",
            marginBottom: "0.5rem"
          }}>
            District 3 Dashboard
          </h1>
          <p style={{
            color: "#94a3b8",
            fontSize: "0.9rem",
            marginBottom: "2rem"
          }}>
            Secure Campaign Console & Constituent Feedback
          </p>

          <form onSubmit={handleLogin}>
            <div style={{ marginBottom: "1.5rem", textAlign: "left" }}>
              <label htmlFor="accessCode" style={{
                color: "#cbd5e1",
                fontSize: "0.85rem",
                fontWeight: "600",
                display: "block",
                marginBottom: "0.5rem"
              }}>
                Enter Access Code
              </label>
              <input
                type="password"
                id="accessCode"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  borderRadius: "6px",
                  border: "1px solid #475569",
                  backgroundColor: "#0f172a",
                  color: "#ffffff",
                  fontSize: "1rem",
                  outline: "none"
                }}
              />
            </div>

            {loginError && (
              <p style={{
                color: "#f87171",
                fontSize: "0.85rem",
                marginBottom: "1.5rem"
              }}>
                {loginError}
              </p>
            )}

            <button
              type="submit"
              style={{
                width: "100%",
                padding: "0.75rem",
                borderRadius: "6px",
                border: "none",
                backgroundColor: "var(--accent)",
                color: "#0f172a",
                fontWeight: "bold",
                fontSize: "1rem",
                cursor: "pointer",
                transition: "background-color 0.2s"
              }}
            >
              Verify & Enter
            </button>
          </form>

          <div style={{ marginTop: "2rem" }}>
            <a 
              href="/"
              style={{
                color: "#94a3b8",
                fontSize: "0.8rem",
                textDecoration: "none"
              }}
            >
              ← Back to Homepage
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: "#f8fafc",
      color: "#0f172a",
      fontFamily: "var(--font-sans)",
      padding: "2rem 1.5rem"
    }}>
      {/* Dashboard Header */}
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto 2.5rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "1rem"
      }}>
        <div>
          <span style={{
            fontSize: "0.85rem",
            fontWeight: "bold",
            color: "var(--accent)",
            textTransform: "uppercase",
            letterSpacing: "0.05em"
          }}>
            District 3 Campaign Portal
          </span>
          <h1 style={{
            fontSize: "2rem",
            fontWeight: "800",
            color: "var(--primary)",
            margin: "0.25rem 0 0"
          }}>
            Tysan McClusky: Constituent Consensus Dashboard
          </h1>
        </div>

        <div style={{ display: "flex", gap: "0.75rem" }}>
          <a
            href="/"
            className="btn btn-outline"
            style={{
              padding: "0.5rem 1rem",
              fontSize: "0.85rem",
              minHeight: "auto",
              borderColor: "var(--primary)",
              color: "var(--primary)"
            }}
          >
            View Live Site
          </a>
          <button
            onClick={handleLogout}
            className="btn"
            style={{
              padding: "0.5rem 1rem",
              fontSize: "0.85rem",
              minHeight: "auto",
              backgroundColor: "#ef4444",
              color: "#ffffff"
            }}
          >
            Log Out
          </button>
        </div>
      </div>

      {/* Main Container */}
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "240px 1fr",
        gap: "2rem",
        alignItems: "start"
      }}>
        {/* Sidebar Navigation */}
        <div style={{
          backgroundColor: "#ffffff",
          border: "1px solid var(--border-color)",
          borderRadius: "8px",
          padding: "1rem",
          boxShadow: "var(--shadow-sm)"
        }}>
          <nav style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <button
              onClick={() => setActiveTab("solutions")}
              style={{
                textAlign: "left",
                padding: "0.75rem 1rem",
                borderRadius: "6px",
                border: "none",
                fontWeight: "600",
                fontSize: "0.9rem",
                backgroundColor: activeTab === "solutions" ? "rgba(5, 150, 105, 0.08)" : "transparent",
                color: activeTab === "solutions" ? "var(--accent)" : "var(--text-dark)",
                cursor: "pointer",
                transition: "all 0.2s"
              }}
            >
              💡 Constituent Solutions ({solutions.length})
            </button>
            <button
              onClick={() => setActiveTab("votes")}
              style={{
                textAlign: "left",
                padding: "0.75rem 1rem",
                borderRadius: "6px",
                border: "none",
                fontWeight: "600",
                fontSize: "0.9rem",
                backgroundColor: activeTab === "votes" ? "rgba(5, 150, 105, 0.08)" : "transparent",
                color: activeTab === "votes" ? "var(--accent)" : "var(--text-dark)",
                cursor: "pointer",
                transition: "all 0.2s"
              }}
            >
              🗳️ Bill Voting Metrics
            </button>
            <button
              onClick={() => setActiveTab("budget")}
              style={{
                textAlign: "left",
                padding: "0.75rem 1rem",
                borderRadius: "6px",
                border: "none",
                fontWeight: "600",
                fontSize: "0.9rem",
                backgroundColor: activeTab === "budget" ? "rgba(5, 150, 105, 0.08)" : "transparent",
                color: activeTab === "budget" ? "var(--accent)" : "var(--text-dark)",
                cursor: "pointer",
                transition: "all 0.2s"
              }}
            >
              💰 Budget Allocations
            </button>
            <button
              onClick={() => setActiveTab("priorities")}
              style={{
                textAlign: "left",
                padding: "0.75rem 1rem",
                borderRadius: "6px",
                border: "none",
                fontWeight: "600",
                fontSize: "0.9rem",
                backgroundColor: activeTab === "priorities" ? "rgba(5, 150, 105, 0.08)" : "transparent",
                color: activeTab === "priorities" ? "var(--accent)" : "var(--text-dark)",
                cursor: "pointer",
                transition: "all 0.2s"
              }}
            >
              📊 Issue Priorities
            </button>
          </nav>
        </div>

        {/* Dashboard Content */}
        <div style={{
          backgroundColor: "#ffffff",
          border: "1px solid var(--border-color)",
          borderRadius: "8px",
          padding: "2rem",
          boxShadow: "var(--shadow-md)",
          minHeight: "500px"
        }}>
          {loading ? (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "400px" }}>
              <div style={{ width: "40px", height: "40px", border: "4px solid rgba(5, 150, 105, 0.1)", borderTopColor: "var(--accent)", borderRadius: "50%", animation: "spin 1s infinite linear" }} />
              <p style={{ marginTop: "1rem", color: "var(--text-muted)" }}>Loading metrics from Firebase...</p>
            </div>
          ) : (
            <>
              {/* SOLUTIONS TAB */}
              {activeTab === "solutions" && (
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem", flexWrap: "wrap", gap: "1rem" }}>
                    <h2 style={{ fontSize: "1.4rem", fontWeight: "700", color: "var(--primary)", margin: 0 }}>
                      Constituent Ideas & Solutions
                    </h2>
                    
                    {/* Search and Filters */}
                    <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                      <input
                        type="text"
                        placeholder="Search submissions..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={{
                          padding: "0.4rem 0.75rem",
                          fontSize: "0.85rem",
                          borderRadius: "6px",
                          border: "1px solid var(--border-color)",
                          width: "220px"
                        }}
                      />
                      <select
                        value={issueFilter}
                        onChange={(e) => setIssueFilter(e.target.value)}
                        style={{
                          padding: "0.4rem 0.75rem",
                          fontSize: "0.85rem",
                          borderRadius: "6px",
                          border: "1px solid var(--border-color)",
                          backgroundColor: "#ffffff"
                        }}
                      >
                        <option value="">All Topics</option>
                        {Object.entries(ISSUE_LABELS).map(([key, label]) => (
                          <option key={key} value={key}>{label}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {filteredSolutions.length === 0 ? (
                    <div style={{ textAlign: "center", padding: "4rem 2rem", border: "1px dashed var(--border-color)", borderRadius: "8px" }}>
                      <p style={{ color: "var(--text-muted)", fontSize: "1rem", margin: 0 }}>
                        No constituent ideas found matching current criteria.
                      </p>
                    </div>
                  ) : (
                    <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                      {filteredSolutions.map((sol, index) => (
                        <div 
                          key={index} 
                          style={{
                            border: "1px solid var(--border-color)",
                            borderRadius: "8px",
                            padding: "1.5rem",
                            backgroundColor: "#fafafa",
                            boxShadow: "var(--shadow-sm)"
                          }}
                        >
                          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.75rem", flexWrap: "wrap", gap: "0.5rem" }}>
                            <div>
                              <strong style={{ fontSize: "1.1rem", color: "var(--primary)" }}>
                                {sol.firstName} {sol.lastName}
                              </strong>
                              <span style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginLeft: "0.75rem" }}>
                                ({sol.email})
                              </span>
                            </div>
                            <span style={{ 
                              fontSize: "0.75rem", 
                              fontWeight: "bold",
                              color: "var(--accent)", 
                              backgroundColor: "rgba(5, 150, 105, 0.08)", 
                              padding: "0.25rem 0.5rem",
                              borderRadius: "4px"
                            }}>
                              {ISSUE_LABELS[sol.issueId] || sol.issueId}
                            </span>
                          </div>
                          <p style={{ 
                            fontSize: "0.95rem", 
                            color: "var(--text-dark)", 
                            margin: 0,
                            lineHeight: "1.6",
                            whiteSpace: "pre-wrap"
                          }}>
                            "{sol.solution}"
                          </p>
                          {sol.createdAt && (
                            <div style={{ marginTop: "1rem", fontSize: "0.75rem", color: "var(--text-muted)", textAlign: "right" }}>
                              Submitted: {new Date(sol.createdAt).toLocaleString()}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* VOTES TAB */}
              {activeTab === "votes" && (
                <div>
                  <h2 style={{ fontSize: "1.4rem", fontWeight: "700", color: "var(--primary)", marginBottom: "1.5rem" }}>
                    Bill Voting Statistics
                  </h2>
                  <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                    {votes.map((item) => {
                      const total = item.yes + item.no + item.undecided;
                      const yesP = total > 0 ? Math.round((item.yes / total) * 100) : 0;
                      const noP = total > 0 ? Math.round((item.no / total) * 100) : 0;
                      const undP = total > 0 ? 100 - yesP - noP : 0;

                      return (
                        <div key={item.billId} style={{
                          border: "1px solid var(--border-color)",
                          borderRadius: "8px",
                          padding: "1.5rem"
                        }}>
                          <h4 style={{ margin: "0 0 1rem", fontSize: "1.1rem", fontWeight: "bold", color: "var(--primary)" }}>
                            {BILL_LABELS[item.billId] || item.billId.toUpperCase()}
                          </h4>
                          
                          {/* Segmented Bar */}
                          <div style={{ width: "100%", height: "24px", backgroundColor: "#e2e8f0", borderRadius: "12px", display: "flex", overflow: "hidden", marginBottom: "1rem" }}>
                            {item.yes > 0 && (
                              <div style={{ width: `${yesP}%`, backgroundColor: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center", color: "#0f172a", fontSize: "0.75rem", fontWeight: "bold" }}>
                                {yesP}% YES
                              </div>
                            )}
                            {item.no > 0 && (
                              <div style={{ width: `${noP}%`, backgroundColor: "#ef4444", display: "flex", alignItems: "center", justifyContent: "center", color: "#ffffff", fontSize: "0.75rem", fontWeight: "bold" }}>
                                {noP}% NO
                              </div>
                            )}
                            {item.undecided > 0 && (
                              <div style={{ width: `${undP}%`, backgroundColor: "#94a3b8", display: "flex", alignItems: "center", justifyContent: "center", color: "#ffffff", fontSize: "0.75rem", fontWeight: "bold" }}>
                                {undP}% UND
                              </div>
                            )}
                          </div>

                          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.85rem", color: "var(--text-muted)" }}>
                            <span>YES: <strong>{item.yes}</strong></span>
                            <span>NO: <strong>{item.no}</strong></span>
                            <span>UNDECIDED: <strong>{item.undecided}</strong></span>
                            <span>Total Votes: <strong>{total}</strong></span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* BUDGET TAB */}
              {activeTab === "budget" && (
                <div>
                  <h2 style={{ fontSize: "1.4rem", fontWeight: "700", color: "var(--primary)", marginBottom: "1rem" }}>
                    Consensus Budget Allocations
                  </h2>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", marginBottom: "2rem" }}>
                    This shows the average ratio (out of $100) that Jackson County residents recommend allocating to different state areas.
                  </p>

                  <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                    {[
                      { key: "housing", name: "Affordable Housing & Homelessness", color: "var(--accent)" },
                      { key: "wildfire", name: "Wildfire Mitigation & Forestry", color: "var(--secondary)" },
                      { key: "education", name: "Education & CTE Trades", color: "#3b82f6" },
                      { key: "safety", name: "Public Safety & Community Policing", color: "#f59e0b" },
                      { key: "roads", name: "Roads & Public Transit", color: "#8b5cf6" }
                    ].map((cat) => {
                      const value = budget[cat.key as keyof BudgetAllocation] ?? 20;
                      return (
                        <div key={cat.key}>
                          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.4rem", fontSize: "0.95rem" }}>
                            <strong>{cat.name}</strong>
                            <span style={{ fontWeight: "bold", color: cat.color }}>${value}</span>
                          </div>
                          <div style={{ width: "100%", height: "16px", backgroundColor: "#f1f5f9", borderRadius: "8px", overflow: "hidden" }}>
                            <div style={{ width: `${value}%`, height: "100%", backgroundColor: cat.color, borderRadius: "8px" }} />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* PRIORITIES TAB */}
              {activeTab === "priorities" && (
                <div>
                  <h2 style={{ fontSize: "1.4rem", fontWeight: "700", color: "var(--primary)", marginBottom: "1rem" }}>
                    Ranked Issue Priorities
                  </h2>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", marginBottom: "2rem" }}>
                    Aggregate score calculated based on the position constituents placed each issue (higher values mean the issue was consistently ranked near the top).
                  </p>

                  <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                    {[
                      { key: "wildfire", name: "Wildfire, Water & Drought" },
                      { key: "housing", name: "Affordable Housing & Homelessness" },
                      { key: "cost_of_living", name: "Cost of Living & Taxes" },
                      { key: "safety", name: "Public Safety & Justice" },
                      { key: "education", name: "Education & Schools" },
                      { key: "healthcare", name: "Healthcare & Addiction Services" },
                      { key: "transit", name: "Transportation & Infrastructure" }
                    ].map((item) => {
                      const value = priorities[item.key as keyof PriorityAverages] ?? 50;
                      return (
                        <div key={item.key}>
                          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.4rem", fontSize: "0.95rem" }}>
                            <strong>{item.name}</strong>
                            <span style={{ fontWeight: "bold", color: "var(--accent)" }}>{value}% Priority Score</span>
                          </div>
                          <div style={{ width: "100%", height: "14px", backgroundColor: "#f1f5f9", borderRadius: "7px", overflow: "hidden" }}>
                            <div style={{ width: `${value}%`, height: "100%", backgroundColor: "var(--accent)", borderRadius: "7px" }} />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      <style jsx global>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
