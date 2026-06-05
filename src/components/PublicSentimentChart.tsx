"use client";

// Mock data generator for the sentiment chart to simulate what the live database integration will look like
const generateMockData = (issueId: string) => {
  // Use the string to seed a pseudo-random distribution so it stays consistent per issue
  const hash = issueId.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  
  // Create a mock total vote count based on the hash. 
  // We'll make some > 100 and some < 100 so the user can see both states.
  const totalVotes = (hash % 150) + 10; // Ranges from 10 to 159

  // Create 3 values that roughly sum to 100
  let valA = (hash % 40) + 20; // 20 - 60
  let valB = ((hash * 7) % 30) + 15; // 15 - 45
  let valC = 100 - valA - valB;

  if (valC < 5) valC = 5; // Ensure other is at least 5%

  const total = valA + valB + valC;

  const chartData = [
    { label: "Support View A", value: Math.round((valA / total) * 100), color: "var(--primary)" },
    { label: "Support View B", value: Math.round((valB / total) * 100), color: "var(--accent)" },
    { label: "Other / Nuanced", value: Math.round((valC / total) * 100), color: "var(--text-muted)" },
  ].sort((a, b) => b.value - a.value);

  return { totalVotes, chartData };
};

export default function PublicSentimentChart({ issueId }: { issueId: string }) {
  const { totalVotes, chartData } = generateMockData(issueId);

  if (totalVotes < 100) {
    return null;
  }

  return (
    <div style={{ backgroundColor: 'var(--bg-white)', padding: '2rem', borderRadius: '8px', border: '1px solid var(--border-color)', marginBottom: '3rem', boxShadow: 'var(--shadow-sm)' }}>
      <h3 style={{ marginBottom: '0.5rem', color: 'var(--primary)', fontSize: '1.4rem' }}>District Sentiment</h3>
      <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '0.95rem' }}>
        Based on {totalVotes} feedback submissions by verified District 3 residents. <em>(Mock Data Preview)</em>
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {chartData.map((item, idx) => (
          <div key={idx}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontWeight: '500' }}>
              <span>{item.label}</span>
              <span>{item.value}%</span>
            </div>
            <div style={{ width: '100%', backgroundColor: 'var(--bg-light)', borderRadius: '99px', height: '12px', overflow: 'hidden' }}>
              <div 
                style={{ 
                  width: `${item.value}%`, 
                  backgroundColor: item.color, 
                  height: '100%',
                  transition: 'width 1s ease-in-out'
                }} 
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
