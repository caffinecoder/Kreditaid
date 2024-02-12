import React, { useState } from "react";
import Styles from "./Navbar.module.css";
import HeaderLevelOne from "../Header/HeaderLevelOne";
import HeaderLevelTwo from "../Header/HeaderLevelTwo";
import HeaderLevelThree from "../Header/HeaderLevelThree";

const Navbar = () => {
  const [placeholderText, setPlaceholderText] = useState(
    "Search with Company Name"
  );
  const handleRadioChange = (e) => {
    const value = e.target.value;
    if (value === "Director") {
      setPlaceholderText("Search for Director");
    } else if (value === "CIN") {
      setPlaceholderText("Search with CIN");
    } else {
      setPlaceholderText("Search with Company Name");
    }
  };
  return (
    <div className={Styles["navigation-wrap"]}>
      <div className="container">
        <HeaderLevelOne handleRadioChange={handleRadioChange} />
        <HeaderLevelTwo
          placeholderText={placeholderText}
          handleRadioChange={handleRadioChange}
        />
      </div>
      <HeaderLevelThree />
    </div>
  );
};

export default Navbar;
