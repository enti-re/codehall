import React from "react";
import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";
import Header from ".";


test("renders Header component with the correct text", () => {
  const appName = "Products";
  render(<Header appName={appName} />);

  const headerElement = screen.getByRole("Header");
  expect(headerElement).toBeInTheDocument();

  const appNameElement = screen.getByText(appName);
  expect(appNameElement).toBeInTheDocument();
});

test("renders children components", () => {
  render(
    <Header appName="My App">
      <div data-testid="child-element">Child Element</div>
    </Header>
  );

  const childElement = screen.getByTestId("child-element");
  expect(childElement).toBeInTheDocument();
});
