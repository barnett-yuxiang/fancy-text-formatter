import React from "react";

const Header: React.FC = () => (
  <header
    style={{
      width: "100%",
      height: 56,
      background: "#fff",
      boxShadow: "0 2px 8px 0 rgba(0,0,0,0.04)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "sticky",
      top: 0,
      zIndex: 10,
    }}
  >
    <span
      style={{
        fontSize: 22,
        fontWeight: 700,
        letterSpacing: -0.5,
        color: "#222",
      }}
    >
      Fancy Text Formatter
    </span>
  </header>
);

export default Header;