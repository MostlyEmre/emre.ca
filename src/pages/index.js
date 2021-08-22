import * as React from "react";
import "../styles/global.css";
import Skills from "../components/Skills";
import { PastClients } from "../components/PastClients";
import { Layout } from "../components/Layout";
// markup
const IndexPage = () => {
  return (
    <Layout>
      <div className="">
        {/* Technical Skills */}
        <div className="max-w-4xl">
          <Skills />
        </div>

        {/* Past Clients */}
        <div className="mt-5">
          <PastClients />
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
