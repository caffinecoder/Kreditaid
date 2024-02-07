import React from "react";
import ReactFlagsSelect from "react-flags-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume, fas } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Styles from "./HeaderLvlTwo.module.css";

const HeaderLevelTwo = () => {
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
              <div className={Styles["search-wrap"]}>
                <input
                  type="text"
                  className={Styles["comp-search-input"]}
                  placeholder="Search for the company"
                ></input>
                <div className={Styles["search-whole"]}>
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>
                <div className={Styles["mic-whole"]}>
                  <FontAwesomeIcon icon={faMicrophone} />
                </div>
              </div>
              <div className={Styles["login-dropdown"]}>
                <button className={Styles["loginBtn"]}>Login</button>
              </div>
              <div className={Styles["notification"]}>
                <FontAwesomeIcon icon={faBell} />
                <span className={Styles["notification-count"]}>20</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderLevelTwo;
