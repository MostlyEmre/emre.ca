import { Link } from "gatsby";
import React from "react";
import { motion } from "framer-motion";

const HeaderCard = () => {
  return (
    <div className="">
      <motion.div whileHover={{ scale: 1.015 }} whileTap={{ scale: 0.95 }}>
        <Link whileHover={{ scale: 1.015 }} whileTap={{ scale: 0.95 }} to="/">
          <p className="font-bold text-4xl sm:text-5xl cursor-pointer text-transparent bg-clip-text bg-gradient-to-tr from-pink-400 via-indigo-400 to-indigo-700">
            Hello, I'm Emre!
            <sup className="cursor-default">
              <span className="font-normal text-sm sm:text-md ml-2 my-2 text-gray-500">/Am + Rae/</span>
            </sup>
          </p>
        </Link>
      </motion.div>
      {/* <p className="dinocursor hover:text-gray-50 text-gray-700 bg-gray-200 hover:bg-gray-900 text-md font-medium mt-2 inline-block px-2 py-1">
        I'm a frontend developer (ex-product designer) based in Toronto.
      </p> */}
    </div>
  );
};

export default HeaderCard;
