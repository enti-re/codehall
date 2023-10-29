import React from "react";
import { render, screen, userEvent } from "@testing-library/react";
import SortDropdown from "./";
import '@testing-library/jest-dom'


jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
}));

describe("SortDropdown component", () => {
  test("should render a select element with three options", () => {
    render(<SortDropdown />);

    const selectElement = screen.getByRole("SortDropdown");

    expect(selectElement).toBeInTheDocument();
    expect(selectElement.options.length).toBe(3);
  });

  test("should select the correct option by default", async () => {
    render(<SortDropdown />);

    const selectElement = screen.getByRole("SortDropdown");

    expect(selectElement.value).toBe("asc");
  });

  test("should disable the default option", async () => {
    render(<SortDropdown />);

    const selectElement = screen.getByRole("SortDropdown");
    const defaultOption = selectElement.options[0];

    expect(defaultOption.disabled).toBe(true);
  });
});
