import { Link } from "gatsby";
import React from "react";
import { v4 as uuidv4 } from "uuid";

const Navigation = () => {
  const menuItems = [
    { page: "Home", url: "/" },
    { page: "Projects", url: "/projects" },
    { page: "Blog", url: "/blog" },
    { page: "About", url: "/about" },
    { page: "Contact", url: "/contact" },
    { page: "Resume", url: "/EmreAydinResume.pdf" },
  ];

  return (
    <div>
      <ul className="list-none">
        {menuItems.map((item) => (
          <div className="animation inline-block mr-4 mt-5 text-gray-500 hover:text-gray-900 text-lg" key={uuidv4()}>
            <Link to={`${item.url}`}>
              <li>{item.page}</li>
            </Link>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
