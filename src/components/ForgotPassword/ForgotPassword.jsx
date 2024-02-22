import React from "react";
import Styles from "./ForgotPassword.module.css";
import { Link } from "react-router-dom";


const ForgotPassword = () => {
  return (
    <div>
      <div className={Styles["form-container"]}>
        <div className={Styles["logo-container"]}>Forgot Password</div>

        <form className={Styles["form"]}>
          <div className={Styles["form-group"]}>
            <label for="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Enter your email"
              required=""
            />
          </div>

          <button className={Styles["form-submit-btn"]} type="submit">
            Send Email
          </button>
        </form>
        <div className={Styles["social-message"]}>
          <div className={Styles.line}></div>
          <p className={Styles.message}>OR</p>
          <div className={Styles.line}></div>
        </div>
        <Link to="/signup" className={Styles["create-new"]}>
          Create new account
        </Link>
        <Link to="/login" className={Styles["back-login"]}>
          Back to login
        </Link>
      </div>
    </div>
  )
}

export default ForgotPassword
