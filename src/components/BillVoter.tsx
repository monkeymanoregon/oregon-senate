"use client";

import { useState } from "react";

export default function BillVoter({ billId }: { billId: string }) {
  const [vote, setVote] = useState<"yes" | "no" | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleVote = (selectedVote: "yes" | "no") => {
    setVote(selectedVote);
    setIsSubmitted(true);
    // In the future, this will securely log the vote to a database
  };

  if (isSubmitted) {
    return (
      <div className="bill-voter-success animate-fade-in">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '0.5rem' }}>
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
        <span style={{ fontWeight: 600, color: 'var(--text-dark)' }}>
          You voted {vote?.toUpperCase()}. Tysan is tracking this consensus.
        </span>
      </div>
    );
  }

  return (
    <div className="bill-voter-actions">
      <button 
        onClick={() => handleVote("yes")}
        className="btn btn-yes"
      >
        Vote YES
      </button>
      <button 
        onClick={() => handleVote("no")}
        className="btn btn-no"
      >
        Vote NO
      </button>
    </div>
  );
}
