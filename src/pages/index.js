import * as React from "react";
import "../styles/global.css";
import Skills from "../components/Skills";
import { PastClients } from "../components/PastClients";
import { Layout } from "../components/Layout";
import { Helmet } from "react-helmet";
import FeaturedProjects from "../components/FeaturedProjects";
import { JobCard } from "../components/JobCard";

// markup
const IndexPage = () => {
  return (
    <Layout>
      {/* JOB TITLE AND LOCATION */}
      <Helmet>
        <title>🏠 Home | Emre's Space</title>
      </Helmet>

      <div className="">
        {/* Technical Skills */}
        <div className="max-w-4xl">
          <Skills />
        </div>
        <FeaturedProjects />

        {/* Past Clients */}
        <div className="mt-5">
          <PastClients />
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
