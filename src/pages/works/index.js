import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import WorksButtonGroup from './WorksButtonGroup'
import WorksItem from './WorksItem'

const index = () => {
  let { token } = useParams();

  return (
    <div className="container">
      
      <WorksButtonGroup token={token} />

      <WorksItem token={token} />
    </div>
  );
};

export default index;
