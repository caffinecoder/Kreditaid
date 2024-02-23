import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Styles from "./Navbar.module.css";
import { IoIosArrowDown } from "react-icons/io";
import SubMenu from "../Header/SubMenu";
const Navbar = ({ setOverlayVisible, className }) => {
  const [hovered, setHovered] = useState(false);
  const handleMouseEnter = () => {
    setHovered(true);
  };
  const handleMouseLeave = () => {
    setHovered(false);
  };
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
  return (
    <nav className={`${Styles["navigation"]} ${className}`}>
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
            Services
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
  );
};

export default Navbar;
