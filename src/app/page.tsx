"use client";
import React, { useState } from "react";
import Header from "./Header";
import InputArea from "./InputArea";
import ResultGrid from "./ResultGrid";
import { toBoldSerif, toBoldSans, toItalicSerif, toItalicSans } from "./fancyText";

// Placeholder for text transformation logic
function generateAllStyles(input: string) {
  return {
    boldSerif: toBoldSerif(input),
    boldSans: toBoldSans(input),
    italicSerif: toItalicSerif(input),
    italicSans: toItalicSans(input),
  };
}

export default function Home() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState({
    boldSerif: "",
    boldSans: "",
    italicSerif: "",
    italicSans: "",
  });

  const handleGenerate = () => {
    setResults(generateAllStyles(input));
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f7f8fa",
        fontFamily: 'Inter, Arial, sans-serif',
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Header />
      <main style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 36 }}>
        <InputArea value={input} setValue={setInput} onGenerate={handleGenerate} />
        <ResultGrid results={results} />
        {/* Message Area can remain here for future use */}
        <section style={{ marginTop: 40, minHeight: 32, color: "#d23c3c", fontWeight: 500, fontSize: 16 }}>
          {/* User feedback messages will go here */}
        </section>
      </main>
    </div>
  );
}
