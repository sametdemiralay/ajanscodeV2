import React from "react";
import { Link } from "react-router-dom";

const OurWorks = ({ work }) => {
  return (
    <div
      className="section first"
      style={{
        background: `linear-gradient(180deg , rgb(0,0,0,.6), rgb(0,0,0,.6)),url(/images/islerimiz/${work.image}.jpg)`,
      }}
    >
      <div className="cont_title">
        <h1>
          {work.nameRowOne}
          <br />
          {work.nameRowTwo}
        </h1>
      </div>
      <div className="cont_desc">
        <Link to={work.link}>
          <p>{work.desc}</p>
        </Link>
      </div>
    </div>
  );
};

export default OurWorks;
