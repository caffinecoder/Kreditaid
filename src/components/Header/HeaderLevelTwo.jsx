import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faMicrophone } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Styles from "./HeaderLvlTwo.module.css";

const HeaderLevelTwo = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [companyName, setCompanyName] = useState("");

  const handleSearch = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `http://206.189.135.190/api/get-company-list-by-name-or-other-keywords/manoj`
      );
      const data = await response.json();
      if (data.length > 0) {
        setCompanyName(data);
        setItems(data);
      } else {
        setCompanyName("Company not found");
        setItems([]);
      }
    } catch (error) {
      console.error("Error fetching company data:", error);
      setCompanyName("Company not found");
      setItems([]);
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

  useEffect(() => {
    // Fetch initial data when the component mounts
    fetch(
      "http://206.189.135.190/api/get-company-list-by-name-or-other-keywords/manoj"
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        return res.json();
      })
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
          if (result.length > 0) {
            setCompanyName(result[0].companyName);
          } else {
            setCompanyName("Company not found");
          }
        },
        (error) => {
          setIsLoaded(true);
          setError(error.message);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
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
                  alt="Logo"
                />
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
                    onKeyPress={handleKeyPress}
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
          {!loading && (
            <div>
              <div>Company Name: {companyName}</div>
              <ul>
                {items.map((item) => (
                  <li key={item.companyName}>{item.companyName}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  }
};

export default HeaderLevelTwo;
