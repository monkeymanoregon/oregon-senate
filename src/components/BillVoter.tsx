"use client";

import { useState, useEffect } from "react";
import { submitBillVote, getBillVotes, BillVoteData } from "@/lib/firebase";

export default function BillVoter({ billId }: { billId: string }) {
  const [vote, setVote] = useState<"yes" | "no" | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [votes, setVotes] = useState<BillVoteData>({ yes: 0, no: 0, undecided: 0 });
  const [loading, setLoading] = useState(true);

  // Load user vote status and aggregate votes on load
  useEffect(() => {
    // Check if user has already voted on this bill
    const storedVote = localStorage.getItem(`voted_bill_${billId}`);
    if (storedVote === "yes" || storedVote === "no") {
      setVote(storedVote);
      setIsSubmitted(true);
    }

    // Fetch running totals from Firebase
    async function loadVoteTotals() {
      try {
        const data = await getBillVotes(billId);
        setVotes(data);
      } catch (err) {
        console.error("Error loading votes:", err);
      } finally {
        setLoading(false);
      }
    }
    loadVoteTotals();
  }, [billId, isSubmitted]);

  const handleVote = async (selectedVote: "yes" | "no") => {
    try {
      // 1. Save atomically to Firestore
      await submitBillVote(billId, selectedVote);
      
      // 2. Prevent duplicate voting by setting localStorage
      localStorage.setItem(`voted_bill_${billId}`, selectedVote);
      
      // 3. Update local state
      setVote(selectedVote);
      setIsSubmitted(true);
    } catch (err) {
      console.error("Error submitting vote:", err);
    }
  };

  const totalVotes = votes.yes + votes.no;
  const yesPercent = totalVotes > 0 ? Math.round((votes.yes / totalVotes) * 100) : 0;
  const noPercent = totalVotes > 0 ? 100 - yesPercent : 0;

  if (isSubmitted) {
    return (
      <div 
        className="bill-voter-success animate-fade-in"
        style={{ 
          display: "flex", 
          flexDirection: "column", 
          gap: "0.5rem", 
          width: "100%",
          padding: "0.5rem 0"
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="var(--accent)" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            style={{ marginRight: "6px", flexShrink: 0 }}
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
          <span style={{ fontWeight: 600, fontSize: "0.9rem", color: "var(--text-dark)" }}>
            You voted {vote?.toUpperCase()}. Tysan is tracking this consensus.
          </span>
        </div>
        
        {/* Live Progress Bar showing Results */}
        <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", fontSize: "0.85rem", marginTop: "0.25rem" }}>
          <div style={{ flexGrow: 1, height: "8px", backgroundColor: "#e2e8f0", borderRadius: "4px", display: "flex", overflow: "hidden" }}>
            <div 
              style={{ 
                width: `${yesPercent}%`, 
                backgroundColor: "var(--accent)", 
                height: "100%", 
                transition: "width 0.8s cubic-bezier(0.1, 0.8, 0.25, 1)" 
              }} 
            />
            <div 
              style={{ 
                width: `${noPercent}%`, 
                backgroundColor: "#ef4444", 
                height: "100%", 
                transition: "width 0.8s cubic-bezier(0.1, 0.8, 0.25, 1)" 
              }} 
            />
          </div>
          <span style={{ fontWeight: "bold", minWidth: "90px", textAlign: "right", color: "var(--text-muted)" }}>
            {yesPercent}% Y / {noPercent}% N
          </span>
        </div>
        <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
          Total votes cast in District 3: {totalVotes}
        </span>
      </div>
    );
  }

  return (
    <div className="bill-voter-actions" style={{ display: "flex", gap: "0.75rem", width: "100%" }}>
      <button 
        onClick={() => handleVote("yes")}
        className="btn"
        style={{ 
          flex: 1, 
          backgroundColor: "rgba(5, 150, 105, 0.08)", 
          color: "var(--accent)",
          border: "1.5px solid var(--accent)",
          padding: "0.6rem",
          fontSize: "0.9rem"
        }}
      >
        Vote YES
      </button>
      <button 
        onClick={() => handleVote("no")}
        className="btn"
        style={{ 
          flex: 1, 
          backgroundColor: "rgba(239, 68, 68, 0.08)", 
          color: "#ef4444",
          border: "1.5px solid #ef4444",
          padding: "0.6rem",
          fontSize: "0.9rem"
        }}
      >
        Vote NO
      </button>
    </div>
  );
}
