import React from "react";
import { useDispatch } from "react-redux";
import { categorizeProduct } from "@/products/store";

const CategoryDropdown = () => {
  const dispatch = useDispatch();

  return (
    <>
      <select
        className="bg-white rounded-10 border text-black"
        name="category"
        id="cate"
        onChange={(event) => {
          dispatch(categorizeProduct(event.target.value));
        }}
      >
        <option value="asc" selected disabled>
          Filter By Category
        </option>
        <option value={"electronics"}>electronics</option>
        <option value={"jewelery"}>jewelery</option>
        <option value={"men's clothing"}>men's clothing</option>
        <option value={"women's clothing"}>women's clothing</option>
        <option value={"all"}>all</option>
      </select>
    </>
  );
};

export default CategoryDropdown;
