import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import Loader from ".";

test("Loader component renders 'Loading...' text", () => {
  render(<Loader />);
  const loadingText = screen.getByText("Loading...");
  expect(loadingText).toBeInTheDocument();
});

test("Loader component has the correct CSS class", () => {
  render(<Loader />);
  const loaderElement = screen.getByText("Loading...");
  expect(loaderElement).toHaveClass("h-screen w-screen bg-black text-white flex justify-center items-center");
});
