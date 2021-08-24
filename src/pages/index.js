import * as React from "react";
import "../styles/global.css";
import Skills from "../components/Skills";
import { PastClients } from "../components/PastClients";
import { Layout } from "../components/Layout";
import { Helmet } from "react-helmet";
// markup
const IndexPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>🏠 Home | Emre's Space</title>
      </Helmet>
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
