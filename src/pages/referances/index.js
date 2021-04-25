import React from "react";
import ReferancesData from "./ReferancesData.json";

const index = () => {
  return (
    <div className="container refWrapper">
      <div className="row">
        {ReferancesData.referances.map((ref) => (
          <div className="col-lg-3 col-md-6" key={ref.id}>
            <div className="refWrapper--item">
              <img
              src={`/images/referanslar/${ref.image}.webp`}
              alt={ref.image}
            />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default index;
