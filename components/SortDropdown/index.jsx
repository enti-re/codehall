import React from "react";
import { useDispatch } from "react-redux";
import { sortProducts } from "../../products/store";

const SortDropdown = () => {
  const dispatch = useDispatch();
  return (
    <>
      <select
        className="bg-black"
        name="sort"
        id="sort"
        role="SortDropdown"
        onChange={(event) => {
          dispatch(sortProducts(event.target.value));
        }}
      >
        <option value="asc" selected disabled>
          Sort by Price
        </option>
        <option value="asc">Low to High</option>
        <option value="dsc">High to Low</option>
      </select>
    </>
  );
};

export default SortDropdown;
