import React from "react";
import { logRoles, render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CategoryDropdown from "./";
import '@testing-library/jest-dom'

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
}));

describe("CategoryDropdown component", () => {
  test("should render a select element with six options", () => {
    render(<CategoryDropdown />);

    const selectElement = screen.getByRole("Category");

    expect(selectElement).toBeInTheDocument();
    expect(selectElement.options.length).toBe(6);
  });


  test("should select the correct option by default", async () => {
    render(<CategoryDropdown />);
    const electronics = screen.getByText("electronics");
    await userEvent.click(electronics);
    expect(electronics.selected).toBe(true);
  });
});
