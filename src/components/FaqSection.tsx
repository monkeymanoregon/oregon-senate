"use client";

import { useState } from "react";
import type { FaqItem } from "@/lib/seo";

export default function FaqSection({ faqs }: { faqs: FaqItem[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <div style={{ marginTop: '3rem', marginBottom: '3rem' }}>
      <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>
        Frequently Asked Questions
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {faqs.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              style={{
                backgroundColor: 'var(--bg-white)',
                border: '1px solid var(--border-color)',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <button
                type="button"
                onClick={() => toggle(idx)}
                style={{
                  width: '100%',
                  padding: '1.25rem 1.5rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                  fontWeight: 600,
                  fontSize: '1.1rem',
                  color: 'var(--primary)',
                }}
                aria-expanded={isOpen}
              >
                <span>{faq.question}</span>
                <span style={{ fontSize: '1.4rem', lineHeight: 1, color: 'var(--accent)', marginLeft: '1rem' }}>
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              {isOpen && (
                <div
                  style={{
                    padding: '0 1.5rem 1.25rem 1.5rem',
                    color: 'var(--text-dark)',
                    lineHeight: 1.7,
                    fontSize: '1rem',
                    borderTop: '1px solid var(--bg-light)',
                    paddingTop: '1rem',
                  }}
                >
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
