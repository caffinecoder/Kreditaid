import React from "react";
import Styles from "./SubMenu.module.css";

const SubMenu = ({ subData, setOverlayVisible, className }) => {
  const handleMouseEnter = () => {
    setOverlayVisible(true);
  };
  const handleMouseLeave = () => {
    setOverlayVisible(false);
  };
  return (
    <div
      className={`${Styles["submenu-wrap"]} ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ul className={Styles["submenu"]}>
        {subData.map((item, index) => (
          <li key={index} className={Styles["submenu-item"]}>
            <a to="/" className={Styles["submenu-item-link"]}>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubMenu;
