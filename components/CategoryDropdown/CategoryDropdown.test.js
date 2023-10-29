import React from "react";
import { render, screen, userEvent } from "@testing-library/react";
import CategoryDropdown from "./";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
}));

describe("CategoryDropdown component", () => {
  test("should render a select element with six options", () => {
    render(<CategoryDropdown />);

    const selectElement = screen.getByRole("CategoryDropdown");

    expect(selectElement).toBeInTheDocument();
    expect(selectElement.options.length).toBe(6);
  });

  test("should dispatch a `categorizeProduct` action when the user selects an option", async () => {
    const mockDispatch = jest.fn();
    useDispatch.mockReturnValue(mockDispatch);

    render(<CategoryDropdown />);

    const selectElement = screen.getByRole("CategoryDropdown");

    await userEvent.click(selectElement);
    await userEvent.selectOption(selectElement, "electronics");

    expect(mockDispatch).toHaveBeenCalledWith(categorizeProduct("electronics"));
  });

  test("should select the correct option by default", async () => {
    render(<CategoryDropdown />);

    const selectElement = screen.getByRole("CategoryDropdown");

    expect(selectElement.value).toBe("all");
  });
});
