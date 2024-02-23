import React, { useState } from "react";
import Styles from "./Signup.module.css";
import { Link } from "react-router-dom";
import Otp from "../Otp/Otp";

const Signup = () => {
  const [okToSigup, setOkToSignup] = useState(false);
  return (
    <div>
      <div className={Styles["signup-form-wrap"]}>
        <div className={Styles["signup-container"]}>
          <div className={Styles["signup-left"]}>
            <img src="login-image.jpg" alt="signup-image" />
          </div>
          <div className={Styles["signup-right"]}>
            <form className={Styles["form"]}>
              <div className={Styles["form-container"]}>
                <p className={Styles.title}>Register</p>
                <form className={Styles["form"]}>
                  <div className={Styles["input-group"]}>
                    <label htmlFor="username">Full Name</label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      placeholder="Email"
                    />
                  </div>
                  <div className={Styles["input-group"]}>
                    <label htmlFor="username">Email</label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      placeholder="Email"
                    />
                  </div>
                  <div className={Styles["input-group"]}>
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Password"
                    />
                  </div>
                  <Link to="/otp" className={Styles["signupBtn"]}>
                    Sign Up
                  </Link>
                  <div className={Styles["login-now"]}>
                    <p>Already have an account?</p>
                    <Link to="/login">Login</Link>
                  </div>
                </form>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
