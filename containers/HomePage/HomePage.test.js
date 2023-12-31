import React, { experimental_taintObjectReference } from "react";
import { logRoles, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HomePage from "./HomePage";
import { Provider } from "react-redux";
import { store } from "../../products/store";
import userEvent from "@testing-library/user-event";

describe("HomePage", () => {
  test("render Homepage", async () => {
    render(
      <Provider store={store}>
        <HomePage />
      </Provider>
    );
    const loader = screen.getByText("Loading...");
    expect(loader).toBeInTheDocument();

    const header = await screen.findByRole("Header");
    expect(header).toBeInTheDocument();

    const heading = await screen.findByText("PRODUCTS");
    expect(heading).toBeInTheDocument();

    const Products = await screen.findByRole("ProductsContainer");
    expect(Products).toBeInTheDocument();
  });

  test("sorting Option", async () => {
    render(
      <Provider store={store}>
        <HomePage />
      </Provider>
    );

    const sortDropdown = await screen.findByRole("SortDropdown");
    expect(sortDropdown).toBeInTheDocument();
    const sortAsc = await screen.findByText("Low to High");
    await userEvent.click(sortAsc);
    expect(sortAsc.selected).toBe(true);
  });

  test("select limit", async () => {
    render(
      <Provider store={store}>
        <HomePage />
      </Provider>
    );

    const limitDropdown = await screen.findByRole("Limit");
    expect(limitDropdown).toBeInTheDocument();
    const two = await screen.findByText("2");
    expect(two).toBeInTheDocument();
    await userEvent.click(two);
    expect(two.selected).toBe(true);
  });
});
