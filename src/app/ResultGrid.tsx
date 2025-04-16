import React from "react";

const labels = [
  "Bold Serif",
  "Bold Sans",
  "Italic Serif",
  "Italic Sans",
];

const ResultGrid: React.FC = () => (
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
    {labels.map((label) => (
      <div
        key={label}
        style={{
          background: "#fff",
          borderRadius: 16,
          boxShadow: "0 2px 10px 0 rgba(0,0,0,0.04)",
          padding: "1.5rem 1.25rem 1.25rem 1.25rem",
          minHeight: 90,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          border: "1.5px solid #e0e3e8",
          transition: "box-shadow 0.2s, border 0.2s",
        }}
      >
        <span style={{ fontWeight: 700, fontSize: 17, marginBottom: 10 }}>{label}</span>
        {/* Stylized text will go here */}
      </div>
    ))}
  </section>
);

export default ResultGrid;