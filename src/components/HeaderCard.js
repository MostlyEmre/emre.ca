import { Link } from "gatsby";
import React from "react";
import { motion } from "framer-motion";

const HeaderCard = () => {
  return (
    <div className="max-w-md">
      <motion.div whileHover={{ scale: 1.015 }} whileTap={{ scale: 0.95 }}>
        <Link whileHover={{ scale: 1.015 }} whileTap={{ scale: 0.95 }} to="/">
          <p className="font-extrabold text-4xl sm:text-5xl cursor-pointer text-transparent bg-clip-text bg-gradient-to-tr from-gray-500 via-gray-900 to-black">
            Hello, I'm Emre!
            <sup className="cursor-default">
              <span className="font-normal text-sm sm:text-md ml-2 my-2 text-gray-600">/Am + Rae/</span>
            </sup>
          </p>
        </Link>
      </motion.div>
    </div>
  );
};

export default HeaderCard;
