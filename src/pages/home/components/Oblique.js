import React from "react";

const Oblique = ({oblq}) => {
  return (
    <li className="secFive__stairs--line">
      <p>{oblq.rowTop}</p>
      <p>{oblq.rowBot}</p>
    </li>
  );
};

export default Oblique;
