import React, { useState, useEffect } from "react";
import Workss from './Workss'
import WorksData from './WorksData.json'

const WorksItem = ({ token }) => {
  const [veri, setVeri] = useState([]);
  
  useEffect(() => {
    FillTheState(token);
  }, [token]);

  const FillTheState = (val) => {
    switch (val) {
      case "grafik-tasarim":
        return setVeri(WorksData.grafikTasarim);
      case "web-yazilim":
        return setVeri(WorksData.webYazilim);
      case "logo":
        return setVeri(WorksData.logo);
      case "tanitim-filmi":
        return setVeri(WorksData.tanitimFilmi);
      case "sosyal-medya":
        return setVeri(WorksData.sosyalMedya);
      case "fotograf":
        return setVeri(WorksData.fotograf);
      case "modelleme":
        return setVeri(WorksData.modelleme);
      case "animasyon":
        return setVeri(WorksData.animasyon);
      default:
        return setVeri([]);
    }
  };

  return (
    <div>
      <div className="row worksWrapper">
        {veri.map((item) => (
          <Workss key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default WorksItem;
