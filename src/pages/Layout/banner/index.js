import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const index = () => {
  const [title, setTitle] = useState("");
  const location = useLocation();

  useEffect(() => {
    FillTheState(location.pathname);
  }, [location.pathname]);

  const FillTheState = (val) => {
    switch (val) {
      case "/kurumsal":
        return setTitle("Kurumsal");
      case "/referanslar":
        return setTitle("Referanslarımız");
      case "/islerimiz/grafik-tasarim":
        return setTitle("Grafik Tasarım");
      case "/islerimiz/web-yazilim":
        return setTitle("Web Tasarım & Yazılım");
      case "/islerimiz/logo":
        return setTitle("Logo & Kurumsal Kimlik");
      case "/islerimiz/tanitim-filmi":
        return setTitle("Tanıtım Filmi");
      case "/islerimiz/sosyal-medya":
        return setTitle("Sosyal Medya");
      case "/islerimiz/fotograf":
        return setTitle("Fotoğraf Çekimlerimiz");
      case "/islerimiz/modelleme":
        return setTitle("3D Modelleme");
      case "/islerimiz/animasyon":
        return setTitle("3D Animasyon");
      case "/iletisim":
        return setTitle("İletişim");
      default:
        return setTitle("");
    }
  };

  return (
    <>
      {location.pathname !== "/" && (
        <div className="bannerWrapper">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h3>{title}</h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default index;
