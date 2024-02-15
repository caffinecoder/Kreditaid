import React, { useState } from "react";
import Styles from "./Navbar.module.css";
import HeaderLevelOne from "../Header/HeaderLevelOne";
import HeaderLevelTwo from "../Header/HeaderLevelTwo";
import HeaderLevelThree from "../Header/HeaderLevelThree";
import HeaderOverlay from "../Header/HeaderOverlay";

const Navbar = () => {
  const [placeholderText, setPlaceholderText] = useState(
    "Search with Company Name"
  );
  const [disabled, setDisabled] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(false);

  const handleRadioChange = (e) => {
    const value = e.target.value;
    if (value === "Director") {
      setPlaceholderText("Search for Director");
      setDisabled(true);
    } else if (value === "CIN") {
      setPlaceholderText("Search with CIN");
      setDisabled(true);
    } else {
      setPlaceholderText("Search with Company Name");
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
        />
      </div>
      <HeaderLevelThree setOverlayVisible={setOverlayVisible} />
      <HeaderOverlay isOpen={overlayVisible} />
    </div>
  );
};

export default Navbar;
