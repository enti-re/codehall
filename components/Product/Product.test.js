import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import Product from "./";

const sampleProduct = {
  title: "Sample Product",
  price: 100,
  image: "sample.jpg",
};

test("Product component renders product title", () => {
  render(<Product product={sampleProduct} />);
  const titleElement = screen.getByText("Sample Product");
  expect(titleElement).toBeInTheDocument();
});

test("Product component renders product price", () => {
  render(<Product product={sampleProduct} />);
  const priceElement = screen.getByText("100 Rs");
  expect(priceElement).toBeInTheDocument();
});

test("Product component renders product image", () => {
  render(<Product product={sampleProduct} />);
  const imageElement = screen.getByRole("img");
  expect(imageElement).toBeInTheDocument();
  expect(imageElement).toHaveAttribute("src", "sample.jpg");
  expect(imageElement).toHaveAttribute("width", "120");
  expect(imageElement).toHaveAttribute("height", "200");
});
