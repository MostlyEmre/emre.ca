import { Link } from "gatsby";
import React from "react";
import { v4 as uuidv4 } from "uuid";

const Navigation = () => {
  const menuItems = ["Projects", "Blog", "About", "Contact"];

  return (
    <div>
      <ul className="list-none">
        {menuItems.map((item) => (
          <div className="animation inline-block mr-4 mt-10 text-gray-500 hover:text-gray-900 text-lg" key={uuidv4()}>
            <Link to={`/${item.toLowerCase()}`}>
              <li>{item}</li>
            </Link>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
