import React from "react";
import Sytles from "./HeaderOverlay.module.css";

const HeaderOverlay = ({ isOpen }) => {
  return isOpen ? <div className={Sytles["header-overlay"]} /> : null;
};

export default HeaderOverlay;
