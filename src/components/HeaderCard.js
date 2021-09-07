import { Link } from "gatsby";
import React from "react";
import { motion } from "framer-motion";

const HeaderCard = () => {
  return (
    <div className="max-w-md">
      <motion.div whileHover={{ scale: 1.015 }} whileTap={{ scale: 1 }}>
        <Link to="/">
          <p className="font-bold text-4xl sm:text-5xl cursor-pointer text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-purple-400">
            Hello, I'm Emre!
            <sup className="cursor-default">
              <span className="font-normal text-sm sm:text-md ml-2 my-2 text-gray-500">/Am + Rae/</span>
            </sup>
          </p>
        </Link>
      </motion.div>
    </div>
  );
};

export default HeaderCard;
