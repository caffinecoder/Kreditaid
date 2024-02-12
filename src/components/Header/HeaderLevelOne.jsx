import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume, fas } from "@fortawesome/free-solid-svg-icons";
import Styles from "./HeaderLvlOne.module.css";

const HeaderLevelOne = ({ handleRadioChange }) => {
  const [selected, setSelected] = useState("IN");
  const [isHovered, setIsHovered] = useState(1);
  const handleMouseEnter = (index) => {
    setIsHovered(index);
  };
  const handleMouseLeave = () => {
    setIsHovered(1);
  };
  const items = [
    { id: 1, label: "Business", class: "isActive" },
    { id: 2, label: "Personal " },
    { id: 3, label: "Data Services" },
  ];
  return (
    <div>
      <div className={Styles["header-level-1"]}>
        <nav className={Styles["left-side-menu"]}>
          <ul className={Styles["left-menu-items"]}>
            {items.map((item) => (
              <li
                key={item.id}
                className={`${Styles["left-top-item"]} ${
                  isHovered === item.id ? Styles.isActive : ""
                }`}
                onMouseEnter={() => handleMouseEnter(item.id)}
                onMouseLeave={handleMouseLeave}
              >
                <div className={Styles["left-top-tab-wrap"]}>
                  <a href="/" className={Styles["left-menu-tab"]}>
                    {item.label}
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </nav>
        <nav className={Styles["right-side-menu"]}>
          <div className={Styles["flag-left-container"]}>
            <ul className={Styles["top-menu-item"]}>
              <li className={Styles["menu-item-nav"]}>
                <a href="#" className={Styles["menu-nav-tab"]}>
                  <label className={Styles["menu-text"]}>
                    <input
                      type="radio"
                      value="Company"
                      name="filterBy"
                      onClick={handleRadioChange}
                    />
                    &nbsp;Company
                  </label>
                </a>
              </li>
              <li className={Styles["menu-item-nav"]}>
                <a href="#" className={Styles["menu-nav-tab"]}>
                  <label className={Styles["menu-text"]} htmlFor="director">
                    <input
                      id="director"
                      type="radio"
                      value="Director"
                      name="filterBy"
                      onClick={handleRadioChange}
                    />
                    &nbsp;Director
                  </label>
                </a>
              </li>
              <li className={Styles["menu-item-nav"]}>
                <a href="#" className={Styles["menu-nav-tab"]}>
                  <label className={Styles["menu-text"]}>
                    <input
                      type="radio"
                      value="CIN"
                      name="filterBy"
                      onClick={handleRadioChange}
                    />
                    &nbsp;CIN
                  </label>
                </a>
              </li>
            </ul>
          </div>
          <div className={Styles["flag-container"]}>
            <ReactFlagsSelect
              selected={selected}
              onSelect={(code) => setSelected(code)}
              className={Styles.menuFlags}
              searchable
            />
          </div>
          <div className={Styles["flag-right-container"]}>
            <div className={Styles["customer-care"]}>
              <div className={Styles["call-us-wrapper"]}>
                <div className={Styles["call-us"]}>
                  <FontAwesomeIcon icon={faPhoneVolume} />
                </div>
                <span className={Styles["cust-care-num"]}>8851967714</span>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default HeaderLevelOne;
