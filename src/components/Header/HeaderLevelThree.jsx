import React, { useState } from "react";
import Styles from "./HeaderLvlThree.module.css";
import { IoIosArrowDown } from "react-icons/io";
import SubMenu from "./SubMenu";
import { Link } from "react-router-dom";

const HeaderLevelThree = ({ setOverlayVisible }) => {
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
                  <Link to="/" className={Styles["menu-nav-tab"]}>
                    Home
                  </Link>
                </li>
                <li className={Styles["menu-item-nav"]}>
                  <Link to="/pricing" className={Styles["menu-nav-tab"]}>
                    Pricing
                  </Link>
                </li>
                <li
                  className={Styles["menu-item-nav"]}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link to="/dataServices" className={Styles["menu-nav-tab"]}>
                    Data Services
                    <IoIosArrowDown className={Styles["arrow-down"]} />
                  </Link>
                  {hovered && (
                    <SubMenu
                      subData={subMenuData[0].subData}
                      setOverlayVisible={setOverlayVisible}
                    />
                  )}
                </li>
                <li className={Styles["menu-item-nav"]}>
                  <Link to="/blog" className={Styles["menu-nav-tab"]}>
                    Blog
                  </Link>
                </li>
                <li className={Styles["menu-item-nav"]}>
                  <Link to="/contact" className={Styles["menu-nav-tab"]}>
                    Contact
                  </Link>
                </li>
                <li className={Styles["menu-item-nav"]}>
                  <Link to="/about-us" className={Styles["menu-nav-tab"]}>
                    About Us
                  </Link>
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
