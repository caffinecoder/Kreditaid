import React from "react";
import ReactFlagsSelect from "react-flags-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume, fas } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Styles from "./HeaderLvlTwo.module.css";
import { useState } from "react";

const HeaderLevelTwo = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [companyName, setCompanyName] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleSearch = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `http://206.189.135.190/api/get-company-list-by-name-or-other-keywords/${searchTerm}`
      );
      const data = await response.json();
      setCompanyName(data.companyList);
    } catch (error) {
      console.error("Error fetching company data:", error);
      setCompanyName("Company not found");
    }
    setLoading(false);
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };
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
                  value={searchTerm}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyPress}
                ></input>
                <div className={Styles["search-whole"]}>
                  <button
                    className={Styles["search-btn"]}
                    onClick={handleSearch}
                  >
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </button>
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
      <div className={Styles["company-info"]}>
        {loading && <div>Loading...</div>}
        {!loading &&
          companyName &&
          companyName.map((item, index) => {
            const {companyName, companyID}  = item
            return (
              <ul key={index}>
                <li>{companyName}</li>
              </ul>
            );
          })}
      </div>
    </div>
  );
};

export default HeaderLevelTwo;
