import React from "react";
import Header from "./Header";
import InputArea from "./InputArea";
import ResultGrid from "./ResultGrid";

export default function Home() {
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
      <main style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 80 }}>
        <InputArea />
        <ResultGrid />
        {/* Message Area can remain here for future use */}
        <section style={{ marginTop: 40, minHeight: 32, color: "#d23c3c", fontWeight: 500, fontSize: 16 }}>
          {/* User feedback messages will go here */}
        </section>
      </main>
    </div>
  );
}
