import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume, fas } from "@fortawesome/free-solid-svg-icons";
import Styles from "./BannerSearch.module.css";
import { setPlaceholder } from "../../../features/placeholder/placeholderSlice";
import { setSearchCategory } from "../../../features/radioBtn/radioBtnSlice";
import { useDispatch, useSelector } from "react-redux";
import CompanySearch from "../../SearchBox/CompanySearch";
const HeaderLevelOne = () => {
  const [selected, setSelected] = useState("IN");
  const [disabled, setDisabled] = useState(false);
  const items = [
    { id: 1, label: "Business", class: "isActive" },
    { id: 2, label: "Personal " },
    { id: 3, label: "Data Services" },
  ];
  const dispatch = useDispatch();
  const placeholderText = useSelector((state) => state.placeholder.value);
  const searchCategory = useSelector((state) => state.searchType.value);
  const handleRadioChange = (e) => {
    const value = e.target.value;
    if (value === "directorName") {
      dispatch(setSearchCategory("directorName"));
      dispatch(setPlaceholder("Search with Director Name"));
      setDisabled(true);
    } else if (value === "companyCin") {
      dispatch(setSearchCategory("companyCin"));
      dispatch(setPlaceholder("Search with Company Cin"));
      setDisabled(true);
    } else {
      dispatch(setSearchCategory("companyName"));
      dispatch(setPlaceholder("Search with Company Name"));
      setDisabled(false);
    }
  };
  return (
    <div>
      <div className={Styles["header-level-1"]}>
        <nav className={Styles["left-side-menu"]}></nav>
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
          <div className={Styles["flag-container"]}>
            <ReactFlagsSelect
              selected={selected}
              onSelect={(code) => setSelected(code)}
              className={Styles.menuFlags}
              searchable
              disabled={disabled}
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
      <CompanySearch
        placeholderText={placeholderText}
        searchCategory={searchCategory}
      />
    </div>
  );
};

export default HeaderLevelOne;
