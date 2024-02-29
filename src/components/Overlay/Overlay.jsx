import React from "react";
import Styles from "./Overlay.module.css";

const Overlay = ({ isOverlayOpen }) => {
  return isOverlayOpen ? <div className={Styles.overlay}></div> : null;
};

export default Overlay;
