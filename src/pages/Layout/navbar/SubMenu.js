import React, { useState, useContext } from "react";
import * as RiIcons from "react-icons/ri";
import { Link } from "react-router-dom";

const SubMenu = ({ item, showSideBar }) => {
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => {
    setSubnav(!subnav);
    subnav && showSideBar();
  };

  const clickListenerr = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    item.subNavv ? showSubnav() : showSideBar();
  };

  return (
    <>
      <Link
        to={item.subNavv ? "#" : item.path}
        className="sidebarOpen__item"
        onClick={clickListenerr}
      >
        <div>
          <span>{item.title}</span>
        </div>
        <div>{item.subNavv && <RiIcons.RiArrowDownSFill />}</div>
      </Link>
      {subnav &&
        item.subNavv.map((itemm, indexx) => {
          return (
            <Link
              className="sidebarOpen__subnav"
              to={itemm.path}
              onClick={clickListenerr}
              key={indexx}
            >
              {itemm.icon}
              <span>{itemm.title}</span>
            </Link>
          );
        })}
    </>
  );
};

export default SubMenu;
