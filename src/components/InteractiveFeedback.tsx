"use client";

import { useState } from "react";

// The categories and subcategories
const issueCategories = {
  "Economy & Jobs": ["Small Business Support", "Minimum Wage", "Tech Sector", "Rural Economy", "Tax Reform"],
  "Education": ["K-12 Funding", "Higher Ed Affordability", "Teacher Pay", "Trade Schools", "Early Childhood Ed"],
  "Healthcare": ["Access to Care", "Mental Health Services", "Prescription Costs", "Addiction Recovery"],
  "Housing & Infrastructure": ["Affordable Housing", "Homelessness", "Road Repair", "Public Transit", "Zoning Reform"],
  "Environment": ["Wildfire Prevention", "Water Quality", "Clean Energy", "Conservation", "Timber Industry"],
  "Public Safety": ["Police Funding", "Criminal Justice Reform", "Emergency Services", "Gun Control Policy"],
  "Civil Rights & Community": ["LGBTQ+ Rights", "Racial Equity", "Veterans Affairs", "Accessibility"]
};

export default function InteractiveFeedback() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    customTopic: "",
    whyMatters: "",
    whatToFocusOn: ""
  });

  const [activeCategory, setActiveCategory] = useState<string>("");
  const [selectedSubcategories, setSelectedSubcategories] = useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const toggleSubcategory = (sub: string) => {
    if (selectedSubcategories.includes(sub)) {
      setSelectedSubcategories(selectedSubcategories.filter(s => s !== sub));
    } else {
      setSelectedSubcategories([...selectedSubcategories, sub]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Submit data to backend here
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        customTopic: "",
        whyMatters: "",
        whatToFocusOn: ""
      });
      setActiveCategory("");
      setSelectedSubcategories([]);
    }, 6000);
  };

  if (isSubmitted) {
    return (
      <div className="feedback-success-card animate-fade-in">
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ margin: '0 auto 1.5rem' }}>
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
        <h3>Thanks for reaching out!</h3>
        <p>Your message has been sent straight to my personal inbox, {formData.firstName || 'friend'}. I read every single submission so I know exactly what you want me to focus on for District 3.</p>
      </div>
    );
  }

  return (
    <div className="feedback-card">
      <form onSubmit={handleSubmit}>
        
        {/* Step 1: Contact Info */}
        <div className="feedback-section">
          <label className="feedback-label">1. Your Contact Information</label>
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label" htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" name="firstName" required className="form-input" value={formData.firstName} onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" name="lastName" required className="form-input" value={formData.lastName} onChange={handleInputChange} />
            </div>
            <div className="form-group form-group-full">
              <label className="form-label" htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" required className="form-input" value={formData.email} onChange={handleInputChange} />
            </div>
          </div>
        </div>

        {/* Step 2: Issue Selection */}
        <div className="feedback-section">
          <label className="feedback-label">2. Select the issue category:</label>
          <select 
            className="feedback-select" 
            value={activeCategory} 
            onChange={(e) => setActiveCategory(e.target.value)}
          >
            <option value="" disabled>-- Select a Category --</option>
            {Object.keys(issueCategories).map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          
          {activeCategory && (
            <div className="subcategory-container animate-fade-in-up" style={{ animationDuration: '0.4s' }}>
              <span className="subcategory-label">Select specific areas of concern within {activeCategory}:</span>
              <div className="topic-chips">
                {issueCategories[activeCategory as keyof typeof issueCategories].map(sub => (
                  <button
                    type="button"
                    key={sub}
                    onClick={() => toggleSubcategory(sub)}
                    className={`topic-chip ${selectedSubcategories.includes(sub) ? 'active' : ''}`}
                  >
                    {sub}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div style={{ marginTop: '1.5rem' }}>
            <label className="form-label" style={{ marginBottom: '0.5rem', display: 'block' }}>Or enter a custom issue:</label>
            <input
              type="text"
              name="customTopic"
              placeholder="E.g., Local Toll Roads, Specific City Zoning..."
              className="feedback-input"
              value={formData.customTopic}
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/* Step 3: Context */}
        <div className="feedback-section">
          <label className="feedback-label" htmlFor="whyMatters">3. Why are these issues important to you?</label>
          <textarea
            id="whyMatters"
            name="whyMatters"
            required
            className="feedback-textarea"
            placeholder="Share your personal experience or thoughts..."
            value={formData.whyMatters}
            onChange={handleInputChange}
          />
        </div>

        {/* Step 4: Action */}
        <div className="feedback-section">
          <label className="feedback-label" htmlFor="whatToFocusOn">4. What specifically should I pay attention to?</label>
          <textarea
            id="whatToFocusOn"
            name="whatToFocusOn"
            required
            className="feedback-textarea"
            placeholder="E.g., Focus on fixing potholes on Main St, or support affordable housing initiatives..."
            value={formData.whatToFocusOn}
            onChange={handleInputChange}
          />
        </div>

        <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem', fontSize: '1.1rem' }}>
          Send Your Feedback
        </button>
      </form>
    </div>
  );
}
