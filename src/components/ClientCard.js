import React from "react";
import { motion } from "framer-motion";
const ClientCard = ({ client }) => {
  return (
    <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.9 }} className="inline-block mr-4 mb-2 bg-gray-900 hover:bg-gray-800">
      <a href={client.url} target="_blank" rel="noopener noreferrer">
        <img className="" src={client.image} alt="" />
      </a>
    </motion.div>
  );
};

export default ClientCard;
