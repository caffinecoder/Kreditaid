import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Styles from "./HeaderLvlTwo.module.css";
import CompanySearch from "../SearchBox/CompanySearch";
import { IoIosArrowDown } from "react-icons/io";
import CartModal from "../CartModal/CartModal";
import HeaderOverlay from "./HeaderOverlay";
import { FaRegUserCircle } from "react-icons/fa";
import { PiPackageFill } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";

const HeaderLevelTwo = ({ handleRadioChange, placeholderText }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleCart = () => {
    setIsOpen(!isOpen);
  };
  const items = [
    { id: 1, label: "My Profile" },
    { id: 2, label: "Order" },
    { id: 3, label: "Wishlist" },
  ];
  return (
    <div>
      <div className={Styles["header-level-2"]}>
        <div className={Styles["logo-sec-wrap"]}>
          <div className={Styles["level-2-left"]}>
            <div className={Styles["humburger"]}></div>
            <div className={Styles["logo"]}>
              <img
                src="https://kreditaid.com/assets/website/kreditaid.png"
                className={Styles["logo-img"]}
              ></img>
            </div>
          </div>
          <div className={Styles["level-2-right"]}>
            <div className={Styles["comp-search"]}>
              <CompanySearch
                placeholderText={placeholderText}
                handleRadioChange={handleRadioChange}
              />
              <div className={Styles["login-dropdown"]}>
                <button className={Styles["loginBtn"]}>
                  Login
                  <IoIosArrowDown className={Styles["arrow-down"]} />
                  <div className={Styles["login-inner"]}>
                    <ul className={Styles["login-menu"]}>
                      <div className={Styles["login-title-wrap"]}>
                        <a href="/" className={Styles["login-title"]}>
                          New Customer?
                        </a>
                        <a href="/" className={Styles["login-sign-up"]}>
                          Sign Up
                        </a>
                      </div>
                      {items.map((item, idx) => (
                        <li key={idx} className={Styles["login-item"]}>
                          <a href="/" className={Styles["login-item-link"]}>
                            {idx === 0 && (
                              <FaRegUserCircle
                                className={Styles["login-item-icon"]}
                              />
                            )}
                            {idx === 1 && (
                              <PiPackageFill
                                className={Styles["login-item-icon"]}
                              />
                            )}
                            {idx === 2 && (
                              <CiHeart className={Styles["login-item-icon"]} />
                            )}
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </button>
              </div>
              <div className={Styles["mycart"]} onClick={toggleCart}>
                <HeaderOverlay isOpen={isOpen} />
                {isOpen && <CartModal />}
                <FontAwesomeIcon icon={faCartShopping} />
                <span className={Styles["mycart-count"]}>20</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderLevelTwo;
