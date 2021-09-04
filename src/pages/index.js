import * as React from "react";
import "../styles/global.css";
import Skills from "../components/Skills";
import { PastClients } from "../components/PastClients";
import { Layout } from "../components/Layout";
import { Helmet } from "react-helmet";
import FeaturedProjects from "../components/FeaturedProjects";
// markup
const IndexPage = () => {
  return (
    <Layout>
      {/* JOB TITLE AND LOCATION */}
      <div className="max-w-md border-b-2 pb-2">
        <div className="flex cursor-default">
          <div className="inline-block self-center text-2xl sm:text-3xl mr-2 sm:mr-4">🧑🏼‍🚀</div>
          <div>
            <p className="font-normal text-xl sm:text-2xl mt-2 mb-0 inline-block text-gray-900">Frontend Developer</p>
            <p className="font-light text-gray-400 text-sm">Ex-Product Designer</p>
          </div>
        </div>
        <div className="flex cursor-default">
          <div className="inline-block self-center text-2xl sm:text-3xl mr-2 sm:mr-4">📍</div>

          <p className="font-normal text-xl sm:text-2xl my-2 inline-block text-gray-900">Toronto, ON</p>
        </div>
      </div>
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
