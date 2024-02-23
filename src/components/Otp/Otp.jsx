import React from "react";
import Styles from "./Otp.module.css";
import { Link } from "react-router-dom";
const Otp = () => {
  return (
    <div>
      <form className={Styles["form"]}>
        <span className={Styles["close"]}>X</span>

        <div className={Styles["info"]}>
          <span className={Styles["title"]}>OTP Verification</span>
          <p className={Styles["description"]}>
            Please enter the code we have sent you.{" "}
          </p>
        </div>
        <div className={Styles["inputs"]}>
          <input placeholder="" type="tel" maxlength="1" />
          <input placeholder="" type="tel" maxlength="1" />
          <input placeholder="" type="tel" maxlength="1" />
          <input placeholder="" type="tel" maxlength="1" />
        </div>
        <Link className={Styles["validate"]} href="#">
          Verify
        </Link>
        <p className={Styles["resend"]}>
          You don't receive the code ?<a className={Styles["resend-action"]}>resend</a>
        </p>
      </form>
    </div>
  );
};

export default Otp;
