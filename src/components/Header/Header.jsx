import React from "react";
import Styles from "./Header.module.css";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
      <header className={Styles.header}>
        <Navbar />
      </header>
  );
};

export default Header;
