"use client";

import React from "react";

const MAX_LENGTH = 2000;

type InputAreaProps = {
  value: string;
  setValue: (v: string) => void;
  onGenerate: () => void;
};

const InputArea: React.FC<InputAreaProps> = ({ value, setValue, onGenerate }) => {
  const handleClear = () => setValue("");
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value);

  return (
    <section
      style={{
        width: "100%",
        maxWidth: 600,
        background: "#fff",
        borderRadius: 18,
        boxShadow: "0 2px 12px 0 rgba(0,0,0,0.04)",
        padding: "2rem 2rem 1.5rem 2rem",
        marginBottom: 36,
      }}
    >
      <label htmlFor="input-text" style={{ fontWeight: 600, fontSize: 18 }}>
        Input Text
      </label>
      <textarea
        id="input-text"
        style={{
          width: "100%",
          minHeight: 90,
          maxHeight: 240,
          marginTop: 10,
          borderRadius: 10,
          border: "1.5px solid #e0e3e8",
          padding: "0.75rem 1rem",
          fontSize: 16,
          fontFamily: 'inherit',
          outline: "none",
          boxShadow: "0 1px 4px 0 rgba(0,0,0,0.03)",
          transition: "border 0.2s, box-shadow 0.2s",
          resize: "vertical",
        }}
        maxLength={MAX_LENGTH}
        placeholder="Enter your text here..."
        value={value}
        onChange={handleChange}
      />
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 10 }}>
        <div>
          <button
            onClick={onGenerate}
            style={{
              background: "#222",
              color: "#fff",
              border: "none",
              borderRadius: 8,
              padding: "0.5rem 1.2rem",
              fontWeight: 600,
              fontSize: 15,
              marginRight: 10,
              cursor: "pointer",
              boxShadow: "0 1px 4px 0 rgba(0,0,0,0.04)",
              transition: "background 0.2s",
            }}
          >
            Generate
          </button>
          <button
            onClick={handleClear}
            style={{
              background: "#f2f2f2",
              color: "#333",
              border: "none",
              borderRadius: 8,
              padding: "0.5rem 1.2rem",
              fontWeight: 600,
              fontSize: 15,
              cursor: "pointer",
              boxShadow: "0 1px 4px 0 rgba(0,0,0,0.03)",
              transition: "background 0.2s",
            }}
          >
            Clear
          </button>
        </div>
        <div style={{ color: "#888", fontSize: 14 }}>
          {value.length} / {MAX_LENGTH}
        </div>
      </div>
    </section>
  );
};

export default InputArea;