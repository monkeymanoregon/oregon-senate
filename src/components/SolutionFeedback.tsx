"use client";

import { useState } from "react";
import { submitSolutionFeedback } from "@/lib/firebase";

interface SolutionFeedbackProps {
  issueId: string;
  spokeId?: string;
}

export default function SolutionFeedback({ issueId, spokeId }: SolutionFeedbackProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    solution: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await submitSolutionFeedback({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        issueId,
        spokeId,
        solution: formData.solution
      });
      setIsSubmitted(true);
    } catch (err) {
      console.error("Error submitting solution feedback:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div 
        className="feedback-success-card animate-fade-in"
        style={{
          backgroundColor: "var(--bg-white)",
          padding: "3rem 2rem",
          borderRadius: "12px",
          boxShadow: "var(--shadow-lg)",
          border: "2px solid var(--accent)",
          textAlign: "center",
          maxWidth: "700px",
          margin: "0 auto"
        }}
      >
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "1.5rem" }}>
          <div style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            backgroundColor: "rgba(5, 150, 105, 0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--accent)"
          }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </div>
        </div>
        <h3 style={{ fontSize: "1.6rem", color: "var(--primary)", marginBottom: "1rem", fontWeight: "800" }}>
          Thank You for Sharing!
        </h3>
        <p style={{ fontSize: "1.05rem", color: "var(--text-dark)", lineHeight: "1.6", maxWidth: "550px", margin: "0 auto 1.5rem" }}>
          Your proposed solution has been sent directly to the Senator's inbox, <strong>{formData.firstName}</strong>. We read and catalog every single suggestion from District 3 residents to help guide our legislative focus in Salem.
        </p>
        <button 
          type="button" 
          onClick={() => {
            setIsSubmitted(false);
            setFormData(prev => ({ ...prev, solution: "" }));
          }}
          className="btn btn-outline"
          style={{ padding: "0.6rem 1.5rem" }}
        >
          Submit Another Idea
        </button>
      </div>
    );
  }

  return (
    <div 
      className="feedback-card animate-fade-in"
      style={{
        backgroundColor: "var(--bg-white)",
        padding: "2.5rem",
        borderRadius: "12px",
        boxShadow: "var(--shadow-lg)",
        border: "1px solid var(--border-color)",
        maxWidth: "700px",
        margin: "0 auto",
        textAlign: "left"
      }}
    >
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "2rem" }}>
          <h3 style={{ fontSize: "1.5rem", color: "var(--primary)", marginBottom: "0.5rem", fontWeight: "700" }}>
            Let me know how you think this issue should be solved
          </h3>
          <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", margin: 0 }}>
            Share your constructive ideas or policy suggestions. I want to hear directly from you.
          </p>
        </div>

        {/* Name Fields */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginBottom: "1.5rem" }}>
          <div className="form-group" style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <label className="form-label" htmlFor="firstName" style={{ fontWeight: "600", fontSize: "0.9rem", color: "var(--primary)" }}>First Name</label>
            <input 
              type="text" 
              id="firstName" 
              name="firstName" 
              required 
              className="form-input" 
              value={formData.firstName} 
              onChange={handleInputChange} 
              style={{ padding: "0.75rem", borderRadius: "6px", border: "1px solid var(--border-color)" }}
            />
          </div>
          <div className="form-group" style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <label className="form-label" htmlFor="lastName" style={{ fontWeight: "600", fontSize: "0.9rem", color: "var(--primary)" }}>Last Name</label>
            <input 
              type="text" 
              id="lastName" 
              name="lastName" 
              required 
              className="form-input" 
              value={formData.lastName} 
              onChange={handleInputChange} 
              style={{ padding: "0.75rem", borderRadius: "6px", border: "1px solid var(--border-color)" }}
            />
          </div>
        </div>

        {/* Email Field */}
        <div className="form-group" style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1.5rem" }}>
          <label className="form-label" htmlFor="email" style={{ fontWeight: "600", fontSize: "0.9rem", color: "var(--primary)" }}>Email Address</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            required 
            className="form-input" 
            value={formData.email} 
            onChange={handleInputChange} 
            style={{ padding: "0.75rem", borderRadius: "6px", border: "1px solid var(--border-color)" }}
          />
        </div>

        {/* Solution/Feedback Textarea */}
        <div className="form-group" style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "2rem" }}>
          <label className="form-label" htmlFor="solution" style={{ fontWeight: "600", fontSize: "0.9rem", color: "var(--primary)" }}>Your Proposed Solution</label>
          <textarea
            id="solution"
            name="solution"
            required
            className="feedback-textarea"
            placeholder="Describe your ideas, suggestions, or what you think we should focus on..."
            value={formData.solution}
            onChange={handleInputChange}
            rows={5}
            style={{ 
              padding: "0.75rem", 
              borderRadius: "6px", 
              border: "1px solid var(--border-color)", 
              width: "100%", 
              fontFamily: "inherit",
              resize: "vertical"
            }}
          />
        </div>

        <button 
          type="submit" 
          disabled={isSubmitting}
          className="btn btn-primary" 
          style={{ 
            width: "100%", 
            padding: "1rem", 
            fontSize: "1.1rem", 
            fontWeight: "bold",
            cursor: isSubmitting ? "not-allowed" : "pointer" 
          }}
        >
          {isSubmitting ? "Sending..." : "Submit Your Proposal"}
        </button>
      </form>
    </div>
  );
}
