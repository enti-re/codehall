import React, { useContext } from "react";
import Button from "../Button";
import SortDropdown from "../SortDropdown";
import CategoryDropdown from "../CategoryDropdown";

const AppHeader = () => {
  return (
    <div className="flex flex-row gap-4">
      <SortDropdown />
      <CategoryDropdown />
    </div>
  );
};

export default AppHeader;
