import React from "react";
import { useDispatch } from "react-redux";
import { limitProduct } from "../../products/store";

const LimitDropdown = () => {
  const dispatch = useDispatch();
  return (
    <>
      <select
        className="bg-white rounded-10 border text-black"
        name="Limit"
        id="Limit"
        role="Limit"
        onChange={(event) => {
          dispatch(limitProduct(event.target.value));
        }}
      >
        <option value="" selected disabled>
          Select Limit
        </option>
        <option value={"2"}>2</option>
        <option value={"5"}>5</option>
        <option value={"10"}>10</option>
        <option value={"removeLimit"}>Remove Limit</option>
      </select>
    </>
  );
};

export default LimitDropdown;
