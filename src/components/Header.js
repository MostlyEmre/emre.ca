import React from "react";
import HeaderCard from "./HeaderCard";
import Navigation from "./Navigation";
import Social from "./Social";

const Header = () => {
  return (
    <div className="mb-2">
      <Navigation>
        <HeaderCard />
      </Navigation>
      <div className="pb-2 max-w-md border-b-2"></div>
    </div>
  );
};

export default Header;
