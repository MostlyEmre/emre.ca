import * as React from "react";
import "../styles/global.css";
import { SiCss3, SiFirebase, SiHtml5, SiJavascript, SiReact, SiTailwindcss, SiTypescript } from "react-icons/si";
import { FaUserAstronaut, FaLocationArrow } from "react-icons/fa";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { motion } from "framer-motion";
// markup
const IndexPage = () => {
  return (
    <main className="w-11/12 md:w-10/12 m-auto text-gray-900">
      <title>Home Page</title>
      <Header />
      <div className="mb-10">
        <p className="font-bold text-5xl my-4 cursor-default">
          Hello, I'm Emre! <sub className="font-medium text-sm text-pink-500">/Am + Rae/</sub>
        </p>
        <div className="flex cursor-default">
          <div className="inline-block self-center text-3xl mr-4">🧑🏼‍🚀</div>
          <p className="font-light text-2xl my-2 inline-block text-gray-900">Frontend Developer</p>
        </div>

        <div className="flex cursor-default">
          <div className="inline-block self-center text-3xl mr-4">📍</div>

          <p className="font-light text-2xl my-2 inline-block text-gray-900">Toronto, ON</p>
        </div>
      </div>

      {/* Technical Skills */}
      <div className="my-10 inline-block">
        <h2 className="h2 mb-10 sm:mb-5 text-center sm:text-left">Technical Skills</h2>
        <div className="sm:mb-0 text-center">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="inline-block">
            <SiHtml5 className="skill text-red-500" />
          </motion.div>
          <SiCss3 className="skill text-blue-500" />
          <SiJavascript className="skill text-yellow-300 bg-black" />
          <SiReact className="skill text-purple-500" />
          <SiTypescript className="skill text-blue-500 bg-white" />
          <SiTailwindcss className="skill text-blue-500" />
          <SiFirebase className="skill text-yellow-500" />
        </div>
      </div>
      {/* fun fact */}
      <div className="w-6/12 bg-gray-200 cursor-default inline-block rounded-xl font-light text-lg p-4 ">
        <p>Did you know that I was a product designer before changing careers?</p>
      </div>
      {/* References */}
      <div>
        <p>What do people I've worked with think of me?</p>
      </div>
      {/* About Me */}
      <div>
        <h2 className="h2">About Me</h2>
      </div>
      {/* Contact */}
      <div>
        <h2 className="h2">Contact</h2>
      </div>
      <Footer />
    </main>
  );
};

export default IndexPage;
