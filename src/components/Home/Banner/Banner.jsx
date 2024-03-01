import React from "react";
import Styles from "./Banner.module.css";
import { setPlaceholder } from "../../../features/placeholder/placeholderSlice";
import { setSearchCategory } from "../../../features/radioBtn/radioBtnSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import CategorySearch from "../../Common/CategorySearch/CategorySearch";
import CompanySearch from "../../Common/SearchBox/CompanySearch";
import CountryList from "../../Common/CountryList/CountryList";

const Banner = () => {
  const [selected, setSelected] = useState("IN");
  const [disabled, setDisabled] = useState(false);
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
      <section className={Styles["banner"]}>
        <div className={`${Styles["banner-container"]} container `}>
          <div className={Styles["banner-card-wrap"]}>
            <div className={Styles["banner-content-wrap"]}>
              <h1 className={Styles["title"]}>
                Unlocking, Insights,
                <br />
                Empowering, Decision.
              </h1>
              <div className={Styles["banner-content"]}>
                <div>
                  <div className={Styles["category"]}>
                    <CategorySearch handleRadioChange={handleRadioChange} />
                    <CountryList disabled={disabled} />
                  </div>
                  <div className={Styles["companySearch"]}>
                    <CompanySearch />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
