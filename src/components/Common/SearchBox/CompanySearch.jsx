import React, { useRef } from "react";
import ReactFlagsSelect from "react-flags-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Styles from "./CompanySearch.module.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const CompanySearch = () => {
  const dispatch = useDispatch();
  const placeholderText = useSelector((state) => state.placeholder.value);
  const searchCategory = useSelector((state) => state.searchType.value);
  const [searchTerm, setSearchTerm] = useState("");
  const [companyName, setCompanyName] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const searchBoxRef = useRef(null);
  const inputRef = useRef();

  const handleSearch = async () => {
    inputRef.current.placeholder =
      "You dont need to click me its auto search type something";
    try {
      const response = await axios.get(
        `http://206.189.135.190/api/commonSearch`,
        {
          params: {
            source: "kreditaid",
            searchKeyWord: searchTerm,
            searchType: searchCategory,
          },
        }
      );
      setCompanyName(response.data.data);
      setShowResults(true);
    } catch (error) {
      console.error("Error fetching company data:", error);
      setCompanyName([
        { companyName: "Error fetching company data", companyID: null },
      ]);
      setShowResults(true);
      alert("Error fetching company data");
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
          onFocus={(e) => {
            if (e.target.value !== "") setShowResults((prev) => !prev);
          }}
          type="text"
          className={Styles["comp-search-input"]}
          placeholder={placeholderText}
          value={searchTerm}
          ref={inputRef}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
        />
        <div className={Styles["input-right"]}>
          <div className={Styles["search-whole"]}>
            <button className={Styles["search-btn"]} onClick={handleSearch}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
          <div className={Styles["mic-whole"]}>
            <FontAwesomeIcon icon={faMicrophone} />
          </div>
        </div>
      </div>
      <div
        ref={searchBoxRef}
        className={Styles["comp-info-wrap"]}
        style={{ display: showResults ? "block" : "none" }}
      >
        <div className={Styles["comp-info-inner"]}>
          <ul className={Styles["comp-details-listing"]}>
            {companyName?.map((item, index) => {
              const { name } = item;
              return (
                <li key={index} className={Styles["comp-details-list"]}>
                  <Link to={`/company/${name}`}>{name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div>
        {companyName?.length === 1 &&
          companyName[0].companyName === "Company not found" && (
            <div>Company not found</div>
          )}
      </div>
    </div>
  );
};

export default CompanySearch;
