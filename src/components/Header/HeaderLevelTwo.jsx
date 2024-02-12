import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Styles from "./HeaderLvlTwo.module.css";
import CompanySearch from "../SearchBox/CompanySearch";
import HeaderLevelOne from "./HeaderLevelOne";

const HeaderLevelTwo = ({ handleRadioChange, placeholderText }) => {
  return (
    <div>
      <div className={Styles["header-level-2"]}>
        <div className={Styles["logo-sec-wrap"]}>
          <div className={Styles["level-2-left"]}>
            <div className={Styles["humburger"]}></div>
            <div className={Styles["logo"]}>
              <img
                src="https://kreditaid.com/assets/website/kreditaid.png"
                className={Styles["logo-img"]}
              ></img>
            </div>
          </div>
          <div className={Styles["level-2-right"]}>
            <div className={Styles["comp-search"]}>
              <CompanySearch
                placeholderText={placeholderText}
                handleRadioChange={handleRadioChange}
              />
              <div className={Styles["login-dropdown"]}>
                <button className={Styles["loginBtn"]}>Login</button>
              </div>
              <div className={Styles["mycart"]}>
                <FontAwesomeIcon icon={faCartShopping} />
                <span className={Styles["mycart-count"]}>20</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderLevelTwo;
