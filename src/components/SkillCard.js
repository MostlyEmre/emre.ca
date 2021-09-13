import React from "react";
import * as SimpleIcons from "react-icons/si";
import { motion } from "framer-motion";

// https://stackoverflow.com/questions/65960909/gatsby-dynamic-styling-not-working-in-production-build

const SkillCard = ({ skill }) => {
  const icon = React.createElement(SimpleIcons[skill.icon]);

  return (
    <motion.div className={`mr-2 mb-2 cursor-default flex-grow`} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.9 }}>
      <div className={`flex hover:bg-${skill.color} items-center justify-center font-bold bg-gray-100 py-1 px-3 text-gray-900 text-lg`}>
        <span>{icon}</span>
        <span className={`ml-2 font-medium`}>{skill.name}</span>
      </div>
    </motion.div>
  );
};

export default SkillCard;
