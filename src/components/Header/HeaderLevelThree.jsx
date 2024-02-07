import React, { useState } from "react";
import Styles from "./HeaderLvlThree.module.css";
import { IoMdArrowDropdown } from "react-icons/io";

const HeaderLevelThree = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <div>
      <div className={Styles["header-level-3"]}>
        <div className={Styles["mega-menu-wrap"]}>
          <div className="container">
            <nav className={Styles["mega-menu"]}>
              <ul className={Styles["mega-items"]}>
                <li
                  className={Styles["menu-item-nav"]}
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                >
                  <a to="/" className={Styles["menu-nav-tab"]}>
                    Home
                  </a>
                </li>
                <li className={Styles["menu-item-nav"]}>
                  <a to="/" className={Styles["menu-nav-tab"]}>
                    Pricing
                  </a>
                </li>
                <li className={Styles["menu-item-nav"]}>
                  <a to="/" className={Styles["menu-nav-tab"]}>
                    Data Services <IoMdArrowDropdown className={Styles['arrow-down']} />
                  </a>
                </li>
                <li className={Styles["menu-item-nav"]}>
                  <a to="/" className={Styles["menu-nav-tab"]}>
                    New Regs. Company <IoMdArrowDropdown className={Styles['arrow-down']} />
                  </a>
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
