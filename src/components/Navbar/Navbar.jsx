import React, { useState } from "react";
import Styles from "./Navbar.module.css";
import HeaderLevelOne from "../Header/HeaderLevelOne";
import HeaderLevelTwo from "../Header/HeaderLevelTwo";
import HeaderLevelThree from "../Header/HeaderLevelThree";

const Navbar = () => {
  return (
    <div className={Styles["navigation-wrap"]}>
      <div className="container">
        <HeaderLevelOne />
        <HeaderLevelTwo />
      </div>
      <HeaderLevelThree />
    </div>
  );
};

export default Navbar;
