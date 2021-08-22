import React from "react";
import * as SimpleIcons from "react-icons/si";
import { motion } from "framer-motion";

// https://stackoverflow.com/questions/65960909/gatsby-dynamic-styling-not-working-in-production-build

const SocialCard = ({ social }) => {
  const icon = React.createElement(SimpleIcons[social.icon]);

  return (
    <motion.div className="inline-block mr-6 text-3xl" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
      <a href={social.url} className={`animation text-gray-400 hover:text-${social.color}`} target="_blank" rel="noopener noreferrer">
        {icon}
      </a>
    </motion.div>
  );
};

export default SocialCard;
