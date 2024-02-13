import React from "react";
import Styles from "./SubMenu.module.css";

const SubMenu = ({ subData }) => {
  return (
    <div className={Styles['submenu-wrap']}>
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
