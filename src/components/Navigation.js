import { Link } from "gatsby";
import React from "react";
import { v4 as uuidv4 } from "uuid";

const Navigation = ({ children }) => {
  const upperMenu = [
    { page: "Code", url: "/code" },
    { page: "Sandbox", url: "/sandbox" },
    { page: "Design", url: "/design" },
  ];

  const lowerMenu = [
    { page: "Blog", url: "/blog" },
    { page: "About", url: "/about" },
    { page: "Contact", url: "/contact" },
  ];

  return (
    <div>
      <ul className="list-none">
        {upperMenu.map((item) => (
          <div className="animation inline-block mr-3 mt-5 mb-1 text-gray-500 hover:text-gray-900 text-lg" key={uuidv4()}>
            <Link to={`${item.url}`}>
              <li>{item.page}</li>
            </Link>
          </div>
        ))}
      </ul>
      {children}
      <ul className="list-none">
        {lowerMenu.map((item) => (
          <div className="animation inline-block mr-3 mt-2 mb-2 text-gray-500 hover:text-gray-900 text-lg" key={uuidv4()}>
            <Link to={`${item.url}`}>
              <li>{item.page}</li>
            </Link>
          </div>
        ))}

        <div className="animation inline-block text-gray-500 hover:text-gray-900 text-lg" key={uuidv4()}>
          <a href={`EmreAydinResume.pdf`} target="_blank" rel="noopener noreferrer">
            <li>Resume</li>
          </a>
        </div>
      </ul>
    </div>
  );
};

export default Navigation;
