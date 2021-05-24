import React from "react";
import Logoo from "../../../images/logo.png";
import { Link } from "react-router-dom";

import { SocialLinks, Baglantilar, Islerr, Contactt } from "./FooterData";

const index = () => {
  const currentDate = new Date().getFullYear();

  return (
    <div className="footerArea">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 footerSocialSec">
            <img src={Logoo} alt="" />
            <ul className="social-icons">
              {SocialLinks.map((item, index) => (
                <li key={index}>
                  <span
                    onClick={() => window.open(item.link, "_blank")}
                    className={item.class}
                  >
                    <div className="front">{item.icon}</div>
                    <div className="back">{item.icon}</div>
                  </span>
                </li>
              ))}
            </ul>
            <p className="allRights">
              © {currentDate} Her hakkı AJANSCODE'a aittir.
            </p>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-12">
            <h5>Bağlantılar</h5>
            <ul>
              {Baglantilar.map((item, index) => (
                <li key={index}>
                  <Link to={item.link}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <h5>İşlerimiz</h5>
            <ul className="islerArea">
              {Islerr.map((item, index) => (
                <li key={index}>
                  <Link to={item.path}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-12">
            <h5>İletişim</h5>
            <ul className="adresArea">
              {Contactt.map((item, index) => (
                <li key={index}>
                  {item.icon}
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
