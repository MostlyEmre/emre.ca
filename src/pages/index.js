import * as React from "react";
import "../styles/global.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Skills from "../components/Skills";
import Trakt from "../components/Trakt";
import { PastClients } from "../components/PastClients";
// markup
const IndexPage = () => {
  return (
    <main className="w-11/12 md:ml-10 md:w-12/12 m-auto text-gray-900">
      <title>Home Page</title>

      <Header />

      {/* Technical Skills */}
      <div className=" mb-10 2xl:w-3/12 xl:w-4/12 lg:w-5/12 md:w-6/12 sm:w-7/12">
        <h2 className="h2 mb-5">Technical Skills</h2>
        <Skills />
      </div>

      {/* Past Clients */}
      <div></div>
      {/* fun fact */}
      {/* <div className="w-6/12 2xl:w-3/12 bg-gray-200 cursor-default inline-block rounded-xl font-light text-lg p-4 ">
        <p>Did you know that I was a product designer before changing careers?</p>
      </div> */}
      {/* References */}
      <PastClients />
      <Footer />
    </main>
  );
};

export default IndexPage;
