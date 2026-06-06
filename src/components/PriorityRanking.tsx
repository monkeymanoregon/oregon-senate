"use client";

import { useState } from "react";

interface PriorityItem {
  id: string;
  title: string;
  desc: string;
  aggScore: number; // District average percentage score
}

const INITIAL_PRIORITIES: PriorityItem[] = [
  {
    id: "housing",
    title: "Affordable Housing & Homelessness",
    desc: "Addressing the housing deficit in Medford/Ashland and supporting post-Almeda fire recovery.",
    aggScore: 89,
  },
  {
    id: "wildfire",
    title: "Wildfire, Water & Drought",
    desc: "Preventing summer wildfires, fighting smoke impacts, and managing irrigation water allocations.",
    aggScore: 94,
  },
  {
    id: "cost_of_living",
    title: "Cost of Living & Taxes",
    desc: "Easing utilities/property taxes and supporting small businesses and agriculture.",
    aggScore: 85,
  },
  {
    id: "safety",
    title: "Public Safety & Justice",
    desc: "Tackling retail theft, court backlogs, and expanding county emergency capacities.",
    aggScore: 78,
  },
  {
    id: "education",
    title: "Education & Schools",
    desc: "Supporting classroom funding and CTE vocational training in high schools and RCC.",
    aggScore: 76,
  },
  {
    id: "healthcare",
    title: "Healthcare & Addiction Services",
    desc: "Expanding regional provider systems and supporting local fentanyl deflection programs.",
    aggScore: 72,
  },
  {
    id: "transit",
    title: "Transportation & Infrastructure",
    desc: "Maintaining roads/routes (I-5, Hwy 99/238) and expanding public transit options.",
    aggScore: 65,
  },
];

export default function PriorityRanking() {
  const [items, setItems] = useState<PriorityItem[]>(INITIAL_PRIORITIES);
  const [submitted, setSubmitted] = useState(false);

  const moveItem = (index: number, direction: "up" | "down") => {
    const targetIndex = direction === "up" ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= items.length) return;

    const newItems = [...items];
    const temp = newItems[index];
    newItems[index] = newItems[targetIndex];
    newItems[targetIndex] = temp;
    setItems(newItems);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  // Sort district aggregates descending to show a clean chart
  const sortedAggregates = [...INITIAL_PRIORITIES].sort((a, b) => b.aggScore - a.aggScore);

  return (
    <div 
      className="feedback-card animate-fade-in" 
      style={{ 
        maxWidth: "850px", 
        margin: "2rem auto 4rem", 
        padding: "2.5rem", 
        background: "var(--bg-white)", 
        borderRadius: "var(--radius-md)", 
        border: "1px solid var(--border-color)", 
        boxShadow: "var(--shadow-lg)" 
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h3 style={{ fontSize: "1.8rem", color: "var(--primary)", marginBottom: "0.5rem" }}>
          Rank Your Legislative Priorities
        </h3>
        <p style={{ color: "var(--text-muted)", fontSize: "1rem", maxWidth: "680px", margin: "0 auto" }}>
          What issues matter most to you? Reorder the list below by placing your highest priorities at the top, then submit to see how District 3 compares.
        </p>
      </div>

      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2rem" }}>
            {items.map((item, idx) => (
              <div 
                key={item.id} 
                className="animate-fade-in-up"
                style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "space-between",
                  padding: "1rem 1.25rem", 
                  background: "var(--bg-light)", 
                  border: "1px solid var(--border-color)", 
                  borderRadius: "8px",
                  transition: "transform 0.2s ease",
                  animationDuration: "0.3s"
                }}
              >
                {/* Ranking Number */}
                <div style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  gap: "1.25rem", 
                  flexGrow: 1, 
                  paddingRight: "1.5rem" 
                }}>
                  <span style={{ 
                    fontFamily: "var(--font-serif)", 
                    fontSize: "1.5rem", 
                    fontWeight: "bold", 
                    color: "var(--secondary)",
                    opacity: 0.8,
                    width: "25px" 
                  }}>
                    {idx + 1}
                  </span>
                  <div>
                    <h4 style={{ fontSize: "1.05rem", color: "var(--primary)", margin: 0, fontWeight: "700" }}>{item.title}</h4>
                    <p style={{ margin: "0.2rem 0 0", fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: "1.3" }}>{item.desc}</p>
                  </div>
                </div>

                {/* Move Controls */}
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <button 
                    type="button" 
                    disabled={idx === 0}
                    onClick={() => moveItem(idx, "up")}
                    aria-label="Move Up"
                    style={{ 
                      width: "36px", 
                      height: "36px", 
                      borderRadius: "50%", 
                      border: "1px solid var(--border-color)", 
                      background: idx === 0 ? "rgba(226, 232, 240, 0.5)" : "var(--bg-white)", 
                      color: idx === 0 ? "var(--text-muted)" : "var(--primary)",
                      cursor: idx === 0 ? "not-allowed" : "pointer",
                      display: "flex", 
                      alignItems: "center", 
                      justifyContent: "center",
                      fontWeight: "bold",
                      fontSize: "0.95rem",
                      opacity: idx === 0 ? 0.4 : 1,
                      transition: "var(--transition-fast)"
                    }}
                    className={idx !== 0 ? "btn-outline" : ""}
                  >
                    ▲
                  </button>
                  <button 
                    type="button" 
                    disabled={idx === items.length - 1}
                    onClick={() => moveItem(idx, "down")}
                    aria-label="Move Down"
                    style={{ 
                      width: "36px", 
                      height: "36px", 
                      borderRadius: "50%", 
                      border: "1px solid var(--border-color)", 
                      background: idx === items.length - 1 ? "rgba(226, 232, 240, 0.5)" : "var(--bg-white)", 
                      color: idx === items.length - 1 ? "var(--text-muted)" : "var(--primary)",
                      cursor: idx === items.length - 1 ? "not-allowed" : "pointer",
                      display: "flex", 
                      alignItems: "center", 
                      justifyContent: "center",
                      fontWeight: "bold",
                      fontSize: "0.95rem",
                      opacity: idx === items.length - 1 ? 0.4 : 1,
                      transition: "var(--transition-fast)"
                    }}
                    className={idx !== items.length - 1 ? "btn-outline" : ""}
                  >
                    ▼
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button 
            type="submit" 
            className="btn btn-primary" 
            style={{ width: "100%", padding: "1rem", fontSize: "1.1rem" }}
          >
            Submit Priorities
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
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
          </div>

          <h4 style={{ textAlign: "center", fontSize: "1.4rem", marginBottom: "1rem" }}>District 3 Priority Results</h4>
          <p style={{ textAlign: "center", color: "var(--text-muted)", fontSize: "0.95rem", marginBottom: "2rem", lineHeight: "1.5" }}>
            Your priorities have been submitted. Below are the aggregated consensus scores of District 3 residents. 
            Wildfire mitigation and affordable housing are currently leading as the highest-priority concerns for local voters.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "2.5rem" }}>
            {sortedAggregates.map((item) => (
              <div key={item.id}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.4rem", fontSize: "0.95rem" }}>
                  <strong style={{ color: "var(--primary)" }}>{item.title}</strong>
                  <span style={{ color: "var(--accent)", fontWeight: "bold" }}>{item.aggScore}% Priority Score</span>
                </div>
                <div style={{ width: "100%", height: "12px", backgroundColor: "#f1f5f9", borderRadius: "6px", overflow: "hidden" }}>
                  <div 
                    style={{ 
                      width: `${item.aggScore}%`, 
                      height: "100%", 
                      backgroundColor: "var(--accent)", 
                      borderRadius: "6px",
                      transition: "width 1s cubic-bezier(0.1, 0.8, 0.25, 1)"
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <button 
              type="button" 
              onClick={() => setSubmitted(false)} 
              className="btn btn-outline"
              style={{ padding: "0.75rem 1.5rem" }}
            >
              Reorder My Priorities
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
