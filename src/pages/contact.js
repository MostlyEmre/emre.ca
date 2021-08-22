import React, { useState } from "react";
import { Layout } from "../components/Layout";
import { motion } from "framer-motion";
import e from "express";
const Contact = () => {
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSent(true);
  };

  return (
    <Layout>
      <div className="max-w-md text-lg">
        <h1 className="h2 mb-5">Let's Collaborate!</h1>
        <p className="">Feel free to contact me about your next project or something you found interesting on my portfolio or about anything really.</p>
        {isSent ? (
          <div className="bg-green-400 text-gray-900 px-4 py-2 my-2 text-base font-light">
            <p>Your message is successfully sent!</p>
          </div>
        ) : null}
        <form name="contact" method="POST" onSubmit={handleSubmit} data-netlify="true">
          <label className="block my-4">
            <span className="block mb-2">Name</span>
            <input className="block input-field" required type="text" name="name" id="" placeholder="Marty McFly" />
          </label>
          <label className="block my-4">
            <span className="block mb-2">Email</span>
            <input className="block input-field" required type="email" name="email" id="" placeholder="great@scott.com" />
          </label>
          <label className="block my-4">
            <span className="block mb-2">Message</span>
            <textarea className="block input-field" required minlength="25" name="" id="" cols="30" rows="5" placeholder="Roads? Where we're going, we don't need roads." />
          </label>
          <div className=" text-right ">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.9 }}
              className="animation hover:text-gray-900 hover:bg-green-500 mt-4 mb-8 px-4 py-2  text-lg bg-green-400 text-gray-900"
              type="submit"
            >
              Send
            </motion.button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Contact;
