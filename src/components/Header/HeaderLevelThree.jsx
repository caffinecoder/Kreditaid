import React, { useState } from "react";
import Styles from "./HeaderLvlThree.module.css";
import { IoMdArrowDropdown } from "react-icons/io";
import SubMenu from "./SubMenu";

const HeaderLevelThree = () => {
  const [hovered, setHovered] = useState(false);
  const subMenuData = [
    {
      label: "Data Services",
      subData: [
        "Newly Registered Companies",
        "Companies Month Wise",
        "Companies State Wise",
        "Companies District Wise",
        "Companies Roc Wise",
        "Companies Status Wise",
        "All Companies",
        "All LLPs",
      ],
    },
  ];
  const handleMouseEnter = () => {
    setHovered(true);
  };
  const handleMouseLeave = () => {
    setHovered(false);
  };
  return (
    <div>
      <div className={Styles["header-level-3"]}>
        <div className={Styles["mega-menu-wrap"]}>
          <div className="container">
            <nav className={Styles["mega-menu"]}>
              <ul className={Styles["mega-items"]}>
                <li className={Styles["menu-item-nav"]}>
                  <a to="/" className={Styles["menu-nav-tab"]}>
                    Home
                  </a>
                </li>
                <li className={Styles["menu-item-nav"]}>
                  <a to="/" className={Styles["menu-nav-tab"]}>
                    Pricing
                  </a>
                </li>
                <li
                  className={Styles["menu-item-nav"]}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <a to="/" className={Styles["menu-nav-tab"]}>
                    Data Services
                    <IoMdArrowDropdown className={Styles["arrow-down"]} />
                  </a>
                  {hovered && <SubMenu subData={subMenuData[0].subData} />}
                </li>
                <li className={Styles["menu-item-nav"]}>
                  <a to="/" className={Styles["menu-nav-tab"]}>
                    Blog
                  </a>
                </li>
                <li className={Styles["menu-item-nav"]}>
                  <a to="/" className={Styles["menu-nav-tab"]}>
                    Contact
                  </a>
                </li>
                <li className={Styles["menu-item-nav"]}>
                  <a to="/" className={Styles["menu-nav-tab"]}>
                    About Us
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderLevelThree;
