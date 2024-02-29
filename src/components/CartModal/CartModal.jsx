import React from "react";
import Styles from "./CartModal.module.css";
import { RiCloseCircleFill } from "react-icons/ri";

const CartModal = ({ handleModalCloseBtn, handleAddToCart }) => {
  const handleModalClick = (e) => {
    e.stopPropagation();
  };
  return (
    <div className={Styles.modal} onClick={handleModalClick}>
      <div className={Styles["modal-container"]}>
        <div className={Styles["close-btn"]} onClick={handleModalCloseBtn}>
          <RiCloseCircleFill />
        </div>
        <div className={Styles["modal-header"]}>
          <img
            src="https://img.freepik.com/premium-vector/shopping-cart-with-cross-mark-wireless-paymant-icon-shopping-bag-failure-paymant-sign-online-shopping-vector_662353-912.jpg"
            className={Styles["modal-img"]}
          />
        </div>
        <div className={Styles["modal-content"]}>
          <h2 className={Styles["content-header"]}>Your Cart is Empty</h2>
          <p className={Styles["content-sub-heading"]}>
            Looks like you haven't made your choice yet...
          </p>
          <div className={Styles["empty-cart-btn-wrap"]}>
            <button className={Styles["empty-cart-btn"]}>Sign In</button>
            <button className={Styles["empty-cart-btn"]}>Sign Up</button>
            <button
              className={Styles["empty-cart-btn"]}
              onClick={() => handleAddToCart()}
            >
             Add to Cart+
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
