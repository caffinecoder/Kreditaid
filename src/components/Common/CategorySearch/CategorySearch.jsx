import React from "react";
import Styles from "./CategorySearch.module.css";
import CountryList from "../CountryList/CountryList";
const BannerSearch = ({ handleRadioChange }) => {
  const items = [
    { id: 1, label: "Business", class: "isActive" },
    { id: 2, label: "Personal " },
    { id: 3, label: "Data Services" },
  ];
  return (
    <div>
      <div className={Styles["header-level-1"]}>
        <nav className={Styles["right-side-menu"]}>
          <div className={Styles["flag-left-container"]}>
            <ul className={Styles["top-menu-item"]}>
              <li className={Styles["menu-item-nav"]}>
                <a href="#" className={Styles["menu-nav-tab"]}>
                  <label className={Styles["menu-text"]}>
                    <input
                      type="radio"
                      value="companyName"
                      name="filterBy"
                      onClick={handleRadioChange}
                      defaultChecked
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
                      value="directorName"
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
                      value="companyCin"
                      name="filterBy"
                      onClick={handleRadioChange}
                    />
                    &nbsp;CIN
                  </label>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default BannerSearch;
