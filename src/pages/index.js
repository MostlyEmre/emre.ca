import * as React from "react";
import "../styles/global.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Skills from "../components/Skills";
import Trakt from "../components/Trakt";
import { PastClients } from "../components/PastClients";
import FunFact from "../components/FunFact";
import { Layout } from "../components/Layout";
// markup
const IndexPage = () => {
  return (
    <Layout>
      <div className="">
        {/* Technical Skills */}
        <div className="max-w-3xl">
          <Skills />
        </div>
        {/* <div className="max-w-md mt-5">
          <FunFact />
        </div> */}
        {/* Past Clients */}
        <div className="mt-5">
          <PastClients />
        </div>
        {/* fun fact */}
        {/* <div className="w-6/12 2xl:w-3/12 bg-gray-200 cursor-default inline-block rounded-xl font-light text-lg p-4 ">
        <p>Did you know that I was a product designer before changing careers?</p>
      </div> */}
        {/* References */}
      </div>
    </Layout>
  );
};

export default IndexPage;
