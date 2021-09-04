import React, { useState } from "react";
import { Layout } from "../components/Layout";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const Contact = () => {
  const [isSent, setIsSent] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Netlify Form related function
  function encode(data) {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Netlify Form code
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        name: name,
        email: email,
        message: message,
      }),
    })
      // .then(() => navigate("/thank-you/"))
      .catch((error) => alert(error));

    setName("");
    setEmail("");
    setMessage("");
    setIsSent(true);
  };

  return (
    <Layout>
      <Helmet>
        <title>☎️ Contact | Emre's Space</title>
      </Helmet>
      <div className="max-w-md text-lg">
        <h1 className="h2 my-5">Let's Collaborate!</h1>
        <p className="">Feel free to contact me about your next project or something you found interesting on my portfolio or about anything really.</p>
        {isSent ? (
          <div className="bg-green-400 text-gray-50 px-4 py-2 my-2 text-base font-light">
            <p>Your message is successfully sent!</p>
          </div>
        ) : null}

        {/* Form */}
        <form name="contact" method="POST" onSubmit={handleSubmit} data-netlify="true" data-netlify-honeypot="bot-field">
          {/* Netlify form-name */}
          <input type="hidden" name="form-name" value="contact" />
          {/* Honeypot */}
          <p className="hidden">
            <label>
              Don’t fill this out if you’re human: <input name="bot-field" />
            </label>
          </p>
          {/* Name */}
          <label className="block my-4">
            <span className="block mb-2">Name</span>
            <input className="block input-field" value={name} required type="text" name="name" placeholder="Marty McFly" onChange={(e) => setName(e.target.value)} />
          </label>

          {/* Email */}
          <label className="block my-4">
            <span className="block mb-2">Email</span>
            <input className="block input-field" required value={email} type="email" name="email" placeholder="great@scott.com" onChange={(e) => setEmail(e.target.value)} />
          </label>

          {/* Message */}
          <label className="block my-4">
            <span className="block mb-2">Message</span>
            <textarea
              className="block input-field"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              minLength="25"
              name="message"
              cols="30"
              rows="5"
              placeholder="Roads? Where we're going, we don't need roads."
            />
          </label>

          {/* Submit */}
          <div className=" text-right ">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.9 }}
              className="animation hover:bg-green-500 mt-4 mb-8 px-4 py-2  text-lg bg-green-400 text-gray-50 font-bold"
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
