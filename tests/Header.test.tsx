import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../src/app/Header";

describe("Header", () => {
  it("renders the title", () => {
    render(<Header />);
    expect(screen.getByText("Fancy Text Formatter")).toBeInTheDocument();
  });
});
