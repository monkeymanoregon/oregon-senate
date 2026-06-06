"use client";

import { useState, useEffect } from "react";
import { submitBudget, getBudgetAverages, BudgetAllocation } from "@/lib/firebase";

interface BudgetCategory {
  key: keyof BudgetAllocation;
  name: string;
  desc: string;
  districtAvg: number;
}

const BUDGET_CATEGORIES: BudgetCategory[] = [
  {
    key: "housing",
    name: "Affordable Housing & Homelessness",
    desc: "Emergency shelters, affordable housing development incentives, and post-Almeda fire housing recovery.",
    districtAvg: 28,
  },
  {
    key: "wildfire",
    name: "Wildfire Mitigation & Forestry",
    desc: "Forest thinning, local fire crew funding, smoke readiness, and Talent Irrigation District water management.",
    districtAvg: 24,
  },
  {
    key: "education",
    name: "Education & CTE Trades",
    desc: "Classroom funding for Medford/Ashland schools, teacher retention, and Rogue Community College vocational trade programs.",
    districtAvg: 20,
  },
  {
    key: "safety",
    name: "Public Safety & Community Policing",
    desc: "Addressing retail theft in shopping corridors, backing local deflection programs, and reducing county court backlogs.",
    districtAvg: 15,
  },
  {
    key: "roads",
    name: "Roads & Public Transit",
    desc: "Maintaining Highway 99/62/238, improving I-5 interchanges, and expanding Rogue Valley Transportation District (RVTD) routes.",
    districtAvg: 13,
  },
];

export default function BudgetAllocator() {
  const [allocation, setAllocation] = useState<BudgetAllocation>({
    housing: 20,
    wildfire: 20,
    education: 20,
    safety: 20,
    roads: 20,
  });
  const [districtAvg, setDistrictAvg] = useState<BudgetAllocation>({
    housing: 28,
    wildfire: 24,
    education: 20,
    safety: 15,
    roads: 13,
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(true);

  // Load live budget averages from Firestore on load & when submitted changes
  useEffect(() => {
    async function loadAverages() {
      try {
        const avgs = await getBudgetAverages();
        setDistrictAvg(avgs);
      } catch (err) {
        console.error("Error loading budget averages:", err);
      } finally {
        setLoading(false);
      }
    }
    loadAverages();
  }, [submitted]);

  const totalAllocated = Object.values(allocation).reduce((a, b) => a + b, 0);
  const remaining = 100 - totalAllocated;

  const handleSliderChange = (key: keyof BudgetAllocation, value: number) => {
    setAllocation((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handlePreset = (presetType: string) => {
    if (presetType === "equal") {
      setAllocation({ housing: 20, wildfire: 20, education: 20, safety: 20, roads: 20 });
    } else if (presetType === "safety_first") {
      setAllocation({ housing: 15, wildfire: 15, education: 15, safety: 40, roads: 15 });
    } else if (presetType === "green_future") {
      setAllocation({ housing: 20, wildfire: 40, education: 15, safety: 10, roads: 15 });
    } else if (presetType === "housing_first") {
      setAllocation({ housing: 40, wildfire: 20, education: 15, safety: 10, roads: 15 });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (totalAllocated === 100) {
      try {
        await submitBudget(allocation);
        setSubmitted(true);
      } catch (err) {
        console.error("Error submitting budget:", err);
      }
    }
  };

  return (
    <div 
      className="feedback-card animate-fade-in" 
      style={{ 
        maxWidth: "850px", 
        margin: "3rem auto", 
        padding: "2.5rem", 
        background: "var(--bg-white)", 
        borderRadius: "var(--radius-md)", 
        border: "1px solid var(--border-color)", 
        boxShadow: "var(--shadow-lg)" 
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h3 style={{ fontSize: "1.8rem", color: "var(--primary)", marginBottom: "0.5rem" }}>
          Interactive Platform: Direct the Budget
        </h3>
        <p style={{ color: "var(--text-muted)", fontSize: "1rem", maxWidth: "680px", margin: "0 auto" }}>
          How would you spend $100 of Oregon State funds? Adjust the sliders below. 
          As your Senator, I will fight for funding ratios guided by our district consensus.
        </p>
      </div>

      {!submitted ? (
        <form onSubmit={handleSubmit}>
          {/* Quick presets */}
          <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", marginBottom: "2rem", flexWrap: "wrap" }}>
            <span style={{ fontSize: "0.85rem", fontWeight: "600", color: "var(--text-muted)", alignSelf: "center" }}>Quick Presets:</span>
            <button type="button" onClick={() => handlePreset("equal")} className="btn btn-outline" style={{ padding: "0.4rem 0.8rem", fontSize: "0.8rem", minHeight: "auto" }}>Equal Split</button>
            <button type="button" onClick={() => handlePreset("housing_first")} className="btn btn-outline" style={{ padding: "0.4rem 0.8rem", fontSize: "0.8rem", minHeight: "auto" }}>Housing Focus</button>
            <button type="button" onClick={() => handlePreset("green_future")} className="btn btn-outline" style={{ padding: "0.4rem 0.8rem", fontSize: "0.8rem", minHeight: "auto" }}>Wildfire & Water</button>
            <button type="button" onClick={() => handlePreset("safety_first")} className="btn btn-outline" style={{ padding: "0.4rem 0.8rem", fontSize: "0.8rem", minHeight: "auto" }}>Safety Focus</button>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem", marginBottom: "2rem" }}>
            {BUDGET_CATEGORIES.map((cat) => (
              <div key={cat.key} style={{ paddingBottom: "1.25rem", borderBottom: "1px solid var(--border-color)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "0.5rem" }}>
                  <strong style={{ color: "var(--primary)", fontSize: "1.05rem" }}>{cat.name}</strong>
                  <span style={{ color: "var(--accent)", fontSize: "1.25rem", fontWeight: "700", fontFamily: "var(--font-serif)" }}>
                    ${allocation[cat.key]}
                  </span>
                </div>
                <p style={{ color: "var(--text-muted)", fontSize: "0.88rem", marginBottom: "0.75rem", lineHeight: "1.4" }}>
                  {cat.desc}
                </p>
                <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={allocation[cat.key]}
                    onChange={(e) => handleSliderChange(cat.key, parseInt(e.target.value, 10))}
                    style={{
                      flexGrow: 1,
                      accentColor: "var(--accent)",
                      cursor: "pointer",
                      height: "6px",
                      borderRadius: "3px",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Budget status tracker */}
          <div 
            style={{ 
              backgroundColor: remaining === 0 ? "rgba(5, 150, 105, 0.05)" : remaining < 0 ? "rgba(239, 68, 68, 0.05)" : "rgba(30, 58, 138, 0.05)",
              border: `1.5px dashed ${remaining === 0 ? "var(--accent)" : remaining < 0 ? "#ef4444" : "var(--secondary)"}`,
              borderRadius: "8px", 
              padding: "1.5rem", 
              textAlign: "center",
              marginBottom: "2rem"
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", fontWeight: "bold", fontSize: "1.1rem", marginBottom: "0.75rem" }}>
              <span>Total Allocated: ${totalAllocated} / $100</span>
              {remaining > 0 ? (
                <span style={{ color: "var(--secondary)" }}>Remaining to allocate: ${remaining}</span>
              ) : remaining < 0 ? (
                <span style={{ color: "#ef4444" }}>Over budget by: ${Math.abs(remaining)}</span>
              ) : (
                <span style={{ color: "var(--accent)" }}>Budget Balanced!</span>
              )}
            </div>

            {/* Progress bar */}
            <div style={{ width: "100%", height: "12px", backgroundColor: "#e2e8f0", borderRadius: "6px", overflow: "hidden" }}>
              <div 
                style={{ 
                  width: `${Math.min(totalAllocated, 100)}%`, 
                  height: "100%", 
                  backgroundColor: remaining === 0 ? "var(--accent)" : remaining < 0 ? "#ef4444" : "var(--secondary)",
                  transition: "width 0.2s ease, background-color 0.2s ease"
                }}
              />
            </div>
            
            {remaining !== 0 && (
              <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginTop: "0.75rem" }}>
                {remaining > 0 
                  ? "Please distribute the remaining funds to balance the budget." 
                  : "Please reduce your allocations so the total equals exactly $100."}
              </p>
            )}
          </div>

          <button 
            type="submit" 
            disabled={remaining !== 0} 
            className="btn btn-primary" 
            style={{ 
              width: "100%", 
              padding: "1.1rem", 
              fontSize: "1.1rem",
              opacity: remaining === 0 ? 1 : 0.6,
              cursor: remaining === 0 ? "pointer" : "not-allowed",
              transition: "var(--transition-smooth)"
            }}
          >
            Submit My Budget Proposal
          </button>
        </form>
      ) : (
        <div className="animate-fade-in" style={{ padding: "0.5rem" }}>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "1.5rem" }}>
            <div style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              backgroundColor: "rgba(5, 150, 105, 0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--accent)"
            }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
          </div>
          <h4 style={{ textAlign: "center", fontSize: "1.4rem", marginBottom: "1rem" }}>Budget Comparison Analysis</h4>
          <p style={{ textAlign: "center", color: "var(--text-muted)", fontSize: "0.95rem", marginBottom: "2rem", lineHeight: "1.5" }}>
            Thank you! Your budget allocations have been submitted to the District 3 aggregate pool. 
            Below is how your spending plan compares to the average allocations submitted by other local residents.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem", marginBottom: "2.5rem" }}>
            {BUDGET_CATEGORIES.map((cat) => {
              const userVal = allocation[cat.key];
              const avgVal = districtAvg[cat.key] ?? cat.districtAvg;
              
              return (
                <div key={cat.key}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                    <span style={{ fontWeight: "600", fontSize: "0.95rem", color: "var(--primary)" }}>{cat.name}</span>
                  </div>
                  
                  {/* User Bar */}
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.4rem" }}>
                    <span style={{ fontSize: "0.75rem", fontWeight: "600", color: "var(--text-muted)", width: "100px" }}>Your Allocation:</span>
                    <div style={{ flexGrow: 1, height: "10px", backgroundColor: "#f1f5f9", borderRadius: "5px", overflow: "hidden" }}>
                      <div 
                        style={{ 
                          width: `${userVal}%`, 
                          height: "100%", 
                          backgroundColor: "var(--accent)", 
                          borderRadius: "5px",
                          transition: "width 1s cubic-bezier(0.1, 0.8, 0.25, 1)" 
                        }}
                      />
                    </div>
                    <span style={{ width: "35px", fontSize: "0.85rem", fontWeight: "bold", textAlign: "right", color: "var(--accent)" }}>${userVal}</span>
                  </div>

                  {/* District Avg Bar */}
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    <span style={{ fontSize: "0.75rem", fontWeight: "600", color: "var(--text-muted)", width: "100px" }}>District 3 Avg:</span>
                    <div style={{ flexGrow: 1, height: "10px", backgroundColor: "#f1f5f9", borderRadius: "5px", overflow: "hidden" }}>
                      <div 
                        style={{ 
                          width: `${avgVal}%`, 
                          height: "100%", 
                          backgroundColor: "var(--secondary)", 
                          borderRadius: "5px",
                          transition: "width 1s cubic-bezier(0.1, 0.8, 0.25, 1)"
                        }}
                      />
                    </div>
                    <span style={{ width: "35px", fontSize: "0.85rem", fontWeight: "bold", textAlign: "right", color: "var(--secondary)" }}>${avgVal}</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
            <button 
              type="button" 
              onClick={() => setSubmitted(false)} 
              className="btn btn-outline"
              style={{ padding: "0.75rem 1.5rem" }}
            >
              Adjust Allocations
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
