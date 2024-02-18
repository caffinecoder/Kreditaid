import React, { useState } from "react";
import Styles from "./Navbar.module.css";
import HeaderLevelOne from "../Header/HeaderLevelOne";
import HeaderLevelTwo from "../Header/HeaderLevelTwo";
import HeaderLevelThree from "../Header/HeaderLevelThree";
import HeaderOverlay from "../Header/HeaderOverlay";
import { setPlaceholder } from "../../features/placeholder/placeholderSlice";
import { setSearchCategory } from "../../features/radioBtn/radioBtnSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [disabled, setDisabled] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(false);
  
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
      const company = dispatch(companyname());
      dispatch(setSearchCategory("companyName"));
      dispatch(setPlaceholder("Search with Company Name"));
      setDisabled(false);
    }
  };
  return (
    <div className={Styles["navigation-wrap"]}>
      <div className="container">
        <HeaderLevelOne
          handleRadioChange={handleRadioChange}
          disabled={disabled}
        />
        <HeaderLevelTwo
          setOverlayVisible={setOverlayVisible}
          placeholderText={placeholderText}
          handleRadioChange={handleRadioChange}
          searchCategory={searchCategory}
        />
      </div>
      <HeaderLevelThree setOverlayVisible={setOverlayVisible} />
      <HeaderOverlay isOpen={overlayVisible} />
    </div>
  );
};

export default Navbar;
