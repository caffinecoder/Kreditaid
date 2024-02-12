import React from "react";
import Styles from "./SubMenu.module.css";

const SubMenu = ({ subData }) => {
  return (
    <ul className={Styles["submenu"]}>
      {subData.map((item, index) => (
        <li key={index} className={Styles["submenu-item"]}>
          <a to="/" className={Styles["submenu-item-link"]}>
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SubMenu;
