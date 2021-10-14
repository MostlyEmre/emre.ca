import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export const Layout = ({ children }) => {
  return (
    <div className="w-11/12 md:w-6/12 m-auto text-gray-900">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
