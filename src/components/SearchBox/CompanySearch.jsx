import React, { useRef } from "react";
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

const CompanySearch = ({ placeholderText }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [companyName, setCompanyName] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const searchBoxRef = useRef(null);
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
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (searchBoxRef.current && !searchBoxRef.current.contains(e.target)) {
        setShowResults(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [searchBoxRef]);
  return (
    <div className={Styles["search-wrap"]}>
      <div className={Styles["input-wrap"]}>
        <input
          onFocus={() => setShowResults((prev) => !prev)}
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
      </div>
      <div
        ref={searchBoxRef}
        className={Styles["comp-info-wrap"]}
        style={{ display: showResults ? "block" : "none" }}
      >
        <div className={Styles["comp-info-inner"]}>
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
      </div>
      <div>
        {companyName.length === 1 &&
          companyName[0].companyName === "Company not found" && (
            <div>Company not found</div>
          )}
      </div>
    </div>
  );
};

export default CompanySearch;
