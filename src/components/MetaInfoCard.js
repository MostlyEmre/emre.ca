import React from "react";

export const MetaInfoCard = ({ title, tech, duration, live, source, wip, solo }) => {
  return (
    <div className="markdown my-5">
      {/* <div className="flex flex-wrap bg">
        {duration ? <p className="infoCardItem">Duration: {duration}</p> : null}
        {solo ? <p className="infoCardItem">Solo</p> : <p>Group</p>}
        {wip ? <p className="infoCardItem">Work in progress</p> : null}
      </div> */}
      <h2 className="mb-2">Summary</h2>
      <p className="mb-2">
        {title} is a {solo ? <span>Solo</span> : <p>Group</p>} project made in {duration ? <span>{duration}</span> : null} by using{" "}
        {tech.map((tool) =>
          tech.length - 1 > tech.indexOf(tool) ? (
            <span>
              <b>{tool}</b>,{" "}
            </span>
          ) : (
            <span>
              <b>{tool}</b>
            </span>
          )
        )}
        .
      </p>

      <div>
        {live ? (
          <p className="infoCardItem">
            Live Site:{" "}
            <a href={live} target="_blank" rel="noopener noreferrer">
              {" "}
              {live}
            </a>
          </p>
        ) : null}
        {source ? (
          <p className="infoCardItem">
            Source Code:{" "}
            <a href={source} target="_blank" rel="noopener noreferrer">
              {" "}
              {source}
            </a>
          </p>
        ) : null}
      </div>
    </div>
  );
};
