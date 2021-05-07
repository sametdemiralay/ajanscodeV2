import React, { useState, useEffect } from "react";
import SubMenu from "./SubMenu";
import Logoo from "../../../images/logo.png";
import * as FaIcons from "react-icons/fa";
import NavbarData from "./NavbarData.json";
import { Link } from "react-router-dom";

const index = () => {
  const [isOpen, setIsOpen] = useState(true);

  const isOpenHandler = () => {
    setIsOpen(!isOpen);
  };

  const [widthh, setWidthh] = useState(window.innerWidth);

  // get window width
  const updateDimension = () => {
    setWidthh(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimension);
    return () => window.removeEventListener("resize", updateDimension);
  }, []);

  return (
    <>
      <div className="navbarArea">
        <div className="container">
          <div className="mobileTop">
            <Link className="NavLogoA" to="/">
              <img src={Logoo} alt="" />
            </Link>

            <button onClick={isOpenHandler}>
              <FaIcons.FaBars />
            </button>
          </div>

          <div className={`navigationn ${isOpen && widthh < 992 && "close"}`}>
            <ul>
              {NavbarData.projectPages.map((item, index) => (
                <li key={index} className={item.subNavv && "dropdown"}>
                  <Link
                    to={item.subNavv ? "#" : item.path}
                    onClick={!item.subNavv && isOpenHandler}
                    className="nav-item"
                  >
                    <span>{item.title}</span>
                  </Link>

                  {item.subNavv && (
                    <div className="dropdownMenu">
                      {item.subNavv.map((itemm, indexx) => (
                        <Link
                          to={itemm.path}
                          key={indexx}
                          onClick={isOpenHandler}
                        >
                          <span>{itemm.title}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
