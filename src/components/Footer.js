import React from "react";
import Social from "./Social";

const Footer = () => {
  return (
    <div className="max-w-md border-t-2 pt-5 mb-5">
      <p className="font-light text-gray-400 cursor-default">Designed and developed by Emre.</p>
      <Social marginBottom={`mb-4`} marginTop={`mt-4`} />
    </div>
  );
};

export default Footer;
