import React, { useState, useEffect } from "react";
import SubMenu from "./SubMenu";
import Logoo from "../../../images/logo.png";
import * as FaIcons from "react-icons/fa";
import NavbarData from "./NavbarData.json";

const index = () => {
  const [sideBar, setSideBar] = useState(false);
  const showSideBar = () => setSideBar(!sideBar);

  const [scrollPosition, setSrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setSrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="navbarArea">
      <div className="container">
        <div className="navbarClose">
          <a
            onClick={showSideBar}
            className={sideBar ? "menu-iconn is-active" : "menu-iconn"}
          >
            <i>Menü</i>
          </a>
          <div className={scrollPosition > 710 && "dontLookBitch"}>
            <p><FaIcons.FaPhoneAlt /> <span>+90 (212) 249 4413</span></p>
            <p><FaIcons.FaPhoneAlt /> <span>+90 (532) 271 6500</span></p>
            <p><FaIcons.FaEnvelope /> <span>info@ajanscode.com.tr</span></p>
          </div>
          <img className={scrollPosition < 710 && "dontLookBitch"} src={Logoo} alt="" />
        </div>
        <nav className={sideBar ? "sidebarOpen" : "sidebarClose"}>
          <div className="sidebarOpen__btn">
            {NavbarData.projectPages.map((item, index) => {
              return <SubMenu showSideBar={showSideBar}  item={item} key={index} />;
            })}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default index;
