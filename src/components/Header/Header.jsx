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
import CustomButton from "../Buttons/Button";
import Overlay from "../Overlay/Overlay";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const toggleCart = () => {
    setIsOpen(!isOpen);
    setIsOverlayOpen(true);
  };

  const handleModalCloseBtn = () => {
    setIsOpen(false);
    setIsOverlayOpen(false);
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
        {/* Left Content */}
        <div className={Styles["left-content"]}>
          {/* Burger Menu */}
          <div
            className={`${Styles["hamburger"]} ${isBurgerOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <span className={Styles["hamburger-line"]}></span>
            <span className={Styles["hamburger-line"]}></span>
            <span className={Styles["hamburger-line"]}></span>
          </div>
          {isBurgerOpen && <Navbar />}
          {/* Logo */}
          <div className={Styles["logo"]}>
            <Link to="/">
              <img
                src={"https://kreditaid.com/assets/website/kreditaid.png"}
                className={Styles["logo-img"]}
                alt="Logo"
              />
            </Link>
          </div>
        </div>
        {/* Right Content */}
        <div className={Styles["right-content"]}>
          {/* Desktop Navbar */}
          <div className={Styles["desktop-nav"]}>
            <Navbar />
          </div>
          {/* Login Dropdown */}
          <div className={Styles["login-dropdown"]}>
            <Link to="/login" className={Styles["loginBtn"]}>
              <CustomButton>
                Login <IoIosArrowDown className={Styles["arrow-down"]} />
              </CustomButton>
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
                  {items.map((item) => (
                    <li key={item.id} className={Styles["login-item"]}>
                      <a href="/" className={Styles["login-item-link"]}>
                        {item.id === 1 && (
                          <FaRegUserCircle
                            className={Styles["login-item-icon"]}
                          />
                        )}
                        {item.id === 2 && (
                          <PiPackageFill
                            className={Styles["login-item-icon"]}
                          />
                        )}
                        {item.id === 3 && (
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
          {/* My Cart */}
          <div className={Styles["mycart"]} onClick={toggleCart}>
            <Overlay
              isOverlayOpen={isOverlayOpen}
              onClose={handleModalCloseBtn}
            />
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
