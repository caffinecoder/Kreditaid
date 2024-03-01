import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import Styles from "./CountryList.module.css";
const CountryList = ({disabled}) => {
  const [selected, setSelected] = useState("IN");
  return (
    <div className={Styles["flag-container"]}>
      <ReactFlagsSelect
        selected={selected}
        onSelect={(code) => setSelected(code)}
        className={Styles.menuFlags}
        searchable
        disabled={disabled}
      />
    </div>
  );
};

export default CountryList;
