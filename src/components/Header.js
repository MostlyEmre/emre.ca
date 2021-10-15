import React from "react";
import HeaderCard from "./HeaderCard";
import { JobCard } from "./JobCard";
import Navigation from "./Navigation";
import Social from "./Social";

const Header = () => {
  return (
    <div className="mt-8 flex flex-wrap justify-between align-middle mr-2 max-w-4xl">
      <div>
        <Navigation>
          <HeaderCard />
        </Navigation>
        <Social marginBottom={`mb-0`} marginTop={`mt-1`} />
        {/* <div className="pb-2 max-w-md border-b-2"></div> */}
      </div>

      <JobCard />
    </div>
  );
};

export default Header;
