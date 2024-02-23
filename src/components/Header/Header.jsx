import React, { useState } from "react";
import Styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { IoIosArrowDown } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../../features/counter/counterSlice";
import { FaRegUserCircle } from "react-icons/fa";
import { PiPackageFill } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";
import Navbar from "../Navbar/Navbar";
import CartModal from "../CartModal/CartModal";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(false);
  const toggleCart = () => {
    setIsOpen(!isOpen);
    setOverlayVisible(true);
  };
  const handleModalCloseBtn = () => {
    setIsOpen(false);
    setOverlayVisible(false);
  };
  const items = [
    { id: 1, label: "My Profile" },
    { id: 2, label: "Order" },
    { id: 3, label: "Wishlist" },
  ];
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  const handleAddToCart = () => {
    dispatch(increment());
  };
  const toggleMenu = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };
  return (
    <header className={Styles.header}>
      <div className={`${Styles["header-container"]} container`}>
        <div className={Styles["left-content"]}>
          <div
            className={`${Styles["humberger"]} ${isBurgerOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <span className={Styles["humberger-line"]}></span>
            <span className={Styles["humberger-line"]}></span>
            <span className={Styles["humberger-line"]}></span>
          </div>
          {isBurgerOpen && <Navbar />}
          <div className={Styles["logo"]}>
            <Link to="/">
              <img
                src={"https://kreditaid.com/assets/website/kreditaid.png"}
                className={Styles["logo-img"]}
              />
            </Link>
          </div>
        </div>
        <div className={Styles["right-content"]}>
          <div className={Styles[""]}>
            {/* Navbar - Visible on Desktop  */}
            <Navbar className={Styles["desktop-nav"]} />
          </div>
          {/* Login Dropdown */}
          <div className={Styles["login-dropdown"]}>
            <Link to="/login" className={Styles["loginBtn"]}>
              Login
              <IoIosArrowDown className={Styles["arrow-down"]} />
              <div className={Styles["login-inner"]}>
                <ul className={Styles["login-menu"]}>
                  <div className={Styles["login-title-wrap"]}>
                    <Link to="/signup" className={Styles["login-title"]}>
                      New Customer?
                    </Link>
                    <Link to="/signup" className={Styles["login-sign-up"]}>
                      Sign Up
                    </Link>
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
            </Link>
          </div>
          <div className={Styles["mycart"]} onClick={toggleCart}>
            {isOpen && (
              <CartModal
                handleModalCloseBtn={handleModalCloseBtn}
                handleAddToCart={handleAddToCart}
              />
            )}
            <FontAwesomeIcon icon={faCartShopping} />
            <span className={Styles["mycart-count"]}>{count}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
