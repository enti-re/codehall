import React from "react";
import { useDispatch } from "react-redux";
import { sortProducts } from "@/products/store";

const SortDropdown = () => {
  const dispatch = useDispatch();
  return (
    <>
      <select
        className="bg-black"
        name="sort"
        id="cars"
        onChange={(event) => {
          dispatch(sortProducts(event.target.value));
        }}
      >
        <option value="asc" selected disabled>
          Sort by Price
        </option>
        <option value="asc">High to Low</option>
        <option value="dsc">Low to High</option>
      </select>
    </>
  );
};

export default SortDropdown;
