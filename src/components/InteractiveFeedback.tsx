"use client";

import { useState } from "react";

export default function InteractiveFeedback() {
  const topics = [
    "Housing & Cost of Living",
    "Education",
    "Infrastructure & Roads",
    "Healthcare",
    "Environment & Climate",
    "Public Safety",
    "Economy & Jobs"
  ];

  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [customTopic, setCustomTopic] = useState("");
  const [whyMatters, setWhyMatters] = useState("");
  const [whatToFocusOn, setWhatToFocusOn] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleTopic = (topic: string) => {
    if (selectedTopics.includes(topic)) {
      setSelectedTopics(selectedTopics.filter(t => t !== topic));
    } else {
      setSelectedTopics([...selectedTopics, topic]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Here we would normally send data to a backend
    setTimeout(() => {
      setIsSubmitted(false);
      setSelectedTopics([]);
      setCustomTopic("");
      setWhyMatters("");
      setWhatToFocusOn("");
    }, 6000);
  };

  if (isSubmitted) {
    return (
      <div className="feedback-success-card animate-fade-in">
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ margin: '0 auto 1.5rem' }}>
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
        <h3>Your Voice Has Been Heard</h3>
        <p>Thank you for participating in our direct democracy process. I review every submission personally to understand exactly what the district wants me to focus on.</p>
      </div>
    );
  }

  return (
    <div className="feedback-card">
      <form onSubmit={handleSubmit}>
        <div className="feedback-section">
          <label className="feedback-label">1. Select the issues that matter most to you:</label>
          <div className="topic-chips">
            {topics.map(topic => (
              <button
                type="button"
                key={topic}
                onClick={() => toggleTopic(topic)}
                className={`topic-chip ${selectedTopics.includes(topic) ? 'active' : ''}`}
              >
                {topic}
              </button>
            ))}
          </div>
          <div style={{ marginTop: '1rem' }}>
            <input
              type="text"
              placeholder="Other topic (please specify)"
              className="feedback-input"
              value={customTopic}
              onChange={(e) => setCustomTopic(e.target.value)}
            />
          </div>
        </div>

        <div className="feedback-section">
          <label className="feedback-label" htmlFor="whyMatters">2. Why are these issues important to you?</label>
          <textarea
            id="whyMatters"
            required
            className="feedback-textarea"
            placeholder="Share your personal experience or thoughts..."
            value={whyMatters}
            onChange={(e) => setWhyMatters(e.target.value)}
          />
        </div>

        <div className="feedback-section">
          <label className="feedback-label" htmlFor="whatToFocusOn">3. What specifically should I pay attention to?</label>
          <textarea
            id="whatToFocusOn"
            required
            className="feedback-textarea"
            placeholder="E.g., Focus on fixing potholes on Main St, or support affordable housing initiatives..."
            value={whatToFocusOn}
            onChange={(e) => setWhatToFocusOn(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem', fontSize: '1.1rem' }}>
          Send to Tysan
        </button>
      </form>
    </div>
  );
}
