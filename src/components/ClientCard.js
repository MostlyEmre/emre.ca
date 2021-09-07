import React from "react";
import { motion } from "framer-motion";
const ClientCard = ({ client }) => {
  return (
    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 1 }} className="inline-block mr-4 mb-2 bg-gradient-to-t from-gray-900 via-gray-900 to-black hover:bg-gray-800">
      <a href={client.url} target="_blank" rel="noopener noreferrer">
        <img className="" src={client.image} alt="" />
      </a>
    </motion.div>
  );
};

export default ClientCard;
