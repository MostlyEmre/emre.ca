import { Link } from "gatsby";
import React from "react";
import * as SimpleIcons from "react-icons/si";
import { motion } from "framer-motion";

const SkillCard = ({ skill }) => {
  const icon = React.createElement(SimpleIcons[skill.icon]);

  return (
    <motion.div className="inline-block mr-4 mb-4" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.9 }}>
      <Link to={`/tech/${skill.slug}`}>
        <div
          className={`flex justify-between items-center px-4 py-2 bg-gray-900 font-bold text-gray-50
    `}
        >
          <span className={`text-${skill.color} mr-2 text-xl`}>{icon}</span>
          <span>{skill.name}</span>
        </div>
      </Link>
    </motion.div>
  );
};

export default SkillCard;
