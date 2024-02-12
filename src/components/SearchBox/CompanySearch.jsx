import React from "react";
import ReactFlagsSelect from "react-flags-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faL, faPhoneVolume, fas } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Styles from "./CompanySearch.module.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CompanySearch = ({ placeholderText, handleRadioChange }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [companyName, setCompanyName] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const handleSearch = async () => {
    try {
      const response = await fetch(
        `http://206.189.135.190/api/get-company-list-by-name-or-other-keywords/${searchTerm}`
      );
      const data = await response.json();
      setCompanyName(data.companyList);
      setShowResults(true);
      if (setShowResults(true)) {
        alert("error");
      }
    } catch (error) {
      console.error("Error fetching company data:", error);
      setCompanyName("Company not found");
    }
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    setShowResults(false);
  };
  useEffect(() => {
    if (searchTerm.length > 0) {
      handleSearch();
    } else {
      setCompanyName([]);
      setShowResults(false);
    }
  }, [searchTerm]);
  return (
    <div className={Styles["search-wrap"]}>
      <input
        type="text"
        className={Styles["comp-search-input"]}
        placeholder={placeholderText}
        value={searchTerm}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
      />
      <div className={Styles["search-whole"]}>
        <button className={Styles["search-btn"]} onClick={handleSearch}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
      <div className={Styles["mic-whole"]}>
        <FontAwesomeIcon icon={faMicrophone} />
      </div>
      <div
        className={Styles["comp-info-wrap"]}
        style={{ display: showResults ? "block" : "none" }}
      >
        <ul className={Styles["comp-details-listing"]}>
          {companyName.map((item, index) => {
            const { companyName, companyID } = item;
            return (
              <li key={index} className={Styles["comp-details-list"]}>
                <Link to={`/company/${companyID}`}>{companyName}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        {companyName.success === false && (
          <div>{companyName.Error.message}</div>
        )}
      </div>
    </div>
  );
};

export default CompanySearch;
