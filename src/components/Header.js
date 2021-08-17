import React from "react";
import HeaderCard from "./HeaderCard";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <div className="mb-5">
      <Navigation />
      <HeaderCard />
    </div>
  );
};

export default Header;
