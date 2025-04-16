"use client";

import React, { useState } from "react";

type Results = {
  boldSerif: string;
  boldSans: string;
  italicSerif: string;
  italicSans: string;
};

type ResultGridProps = {
  results: Results;
};

const cards = [
  { key: "boldSerif", label: "Bold Serif" },
  { key: "boldSans", label: "Bold Sans" },
  { key: "italicSerif", label: "Italic Serif" },
  { key: "italicSans", label: "Italic Sans" },
];

const CheckmarkIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ display: 'block' }}>
    <circle cx="10" cy="10" r="10" fill="#22bb55" />
    <path d="M6 10.5L9 13.5L14 8.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ResultGrid: React.FC<ResultGridProps> = ({ results }) => {
  const [copied, setCopied] = useState<{ [key: string]: boolean }>({});

  const handleCopy = async (key: string) => {
    const text = results[key as keyof Results];
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
      setCopied((prev) => ({ ...prev, [key]: true }));
      setTimeout(() => {
        setCopied((prev) => ({ ...prev, [key]: false }));
      }, 1500);
    } catch (e) {
      // Optionally handle copy error
    }
  };

  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridTemplateRows: "1fr 1fr",
        gap: 28,
        width: "100%",
        maxWidth: 900,
      }}
    >
      {cards.map(({ key, label }) => (
        <div
          key={key}
          style={{
            background: "#fcfcfd",
            borderRadius: 16,
            boxShadow: "0 2px 10px 0 rgba(0,0,0,0.04)",
            padding: 0,
            minHeight: 90,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            border: "1.5px solid #e0e3e8",
            transition: "box-shadow 0.2s, border 0.2s",
          }}
        >
          {/* Title bar */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.1rem 1.25rem 0.5rem 1.25rem', background: '#f6f8fa', borderTopLeftRadius: 16, borderTopRightRadius: 16, borderBottom: '1px solid #f0f0f0' }}>
            <span style={{ fontWeight: 700, fontSize: 17 }}>{label}</span>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {copied[key] && (
                <span style={{ display: 'flex', alignItems: 'center', marginRight: 8 }}><CheckmarkIcon /></span>
              )}
              <button
                onClick={() => handleCopy(key)}
                style={{
                  marginLeft: 12,
                  background: '#f7f8fa',
                  border: '1px solid #e0e3e8',
                  borderRadius: 7,
                  padding: '0.25rem 0.9rem',
                  fontWeight: 600,
                  fontSize: 15,
                  cursor: 'pointer',
                  color: '#333',
                  transition: 'background 0.2s',
                  display: 'flex',
                  alignItems: 'center',
                }}
                onMouseEnter={e => e.currentTarget.style.background = '#e6eaf0'}
                onMouseLeave={e => e.currentTarget.style.background = '#f7f8fa'}
              >
                Copy
              </button>
            </div>
          </div>
          {/* Content */}
          <div
            style={{
              padding: '1.1rem 1.25rem 1.25rem 1.25rem',
              fontSize: 16,
              wordBreak: 'break-word',
              minHeight: 48,
              maxHeight: 220,
              width: 420,
              whiteSpace: 'pre-wrap',
              border: '1.5px dashed #d1d5db',
              borderRadius: 10,
              background: '#f8fafb',
              margin: 16,
              fontFamily: 'inherit',
              userSelect: 'all',
              cursor: 'default',
              overflowY: 'auto',
              boxSizing: 'border-box',
            }}
            tabIndex={-1}
            aria-readonly="true"
          >
            {results[key as keyof Results]}
          </div>
        </div>
      ))}
    </section>
  );
};

export default ResultGrid;