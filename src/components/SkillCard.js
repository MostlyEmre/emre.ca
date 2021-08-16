import { Link } from "gatsby";
import React from "react";
import * as SimpleIcons from "react-icons/si";
import { motion } from "framer-motion";

// https://stackoverflow.com/questions/65960909/gatsby-dynamic-styling-not-working-in-production-build

const SkillCard = ({ skill }) => {
  const icon = React.createElement(SimpleIcons[skill.icon]);

  return (
    <motion.div className="inline-block mr-4 mb-4" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.9 }}>
      <Link to={`/tech/${skill.slug}`}>
        <div className="flex sm:text-5xl justify-between items-center font-bold text-gray-900 text-xl">
          <span className={`hover:${skill.color} text-gray-400 animation`}>{icon}</span>
          <span className="sm:hidden ml-2 text-base">{skill.name}</span>
        </div>
      </Link>
    </motion.div>
  );
};

export default SkillCard;
