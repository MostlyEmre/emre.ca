import React from "react";
import HeaderCard from "./HeaderCard";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <div className="mb-5">
      <Navigation />
      <HeaderCard />
      <div className="pb-5 max-w-md border-b-2"></div>
    </div>
  );
};

export default Header;
