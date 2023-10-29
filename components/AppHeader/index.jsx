import React, { useContext } from "react";
import Button from "../Button";
import SortDropdown from "../SortDropdown";

const AppHeader = () => {
  return (
    <div className="flex flex-row gap-4">
      <SortDropdown />
    </div>
  );
};

export default AppHeader;
