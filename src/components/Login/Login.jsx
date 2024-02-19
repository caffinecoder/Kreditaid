import React from "react";
import Styles from "./Login.module.css";
import authSlice from "../../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  return (
    <div className={Styles["login-wrap"]}>
      <div className={Styles["login-container"]}>
        <div className={Styles["login-left"]}>
          <img
            src="https://d3tl80hy6t5toy.cloudfront.net/wp-content/uploads/sites/3/2018/07/07134308/2018-07-09-WhatExpectEarnFinanceDegree-ThinkstockPhotos-494940062.jpg"
            alt="login"
          />
        </div>
        <div className={Styles["login-right"]}>
          <h2>Login Form</h2>
          <div className={Styles["login-details"]}>
            <div className={Styles["email-wrap"]}>
              <label htmlFor="email">Email</label>
              <input type="email" placeholder="Entert Your Email" />
            </div>
            <div className={Styles["password-wrap"]}>
              <label htmlFor="email">Password</label>
              <input type="password" placeholder="Entert Your Password" />
            </div>
            <button className={Styles["login-btn"]}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
