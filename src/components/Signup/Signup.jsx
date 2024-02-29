import React, { useState } from "react";
import Styles from "./Signup.module.css";
import { Link } from "react-router-dom";
import Otp from "../Otp/Otp";
import { useDispatch, useSelector } from "react-redux";
import signupSlice, {
  setSignupSuccess,
  setSignupFailure,
  setLogout,
} from "../../features/signupAuth/signupAuthSlice";

const Signup = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const signupSucess = useSelector((state) => state.signupAuth.isSignedup);
  const signupFailure = useSelector((state) => state.signupAuth.isSignedup);
  const handleSignup = (e) => {
    e.preventDefault();
    if (fullName && email && password) {
      dispatch(setSignupSuccess("App Login Hogye"));
      console.log('hi')
    } else {
      dispatch(setSignupFailure("Please Fill The Email & Password"));
    }
  };
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
                <div className={Styles["form"]}>
                  <div className={Styles["input-group"]}>
                    <label htmlFor="username">Full Name</label>
                    <input
                      type="text"
                      name="username"
                      value={fullName}
                      placeholder="Full Name"
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>
                  <div className={Styles["input-group"]}>
                    <label htmlFor="username">Email</label>
                    <input
                      type="text"
                      name="username"
                      value={email}
                      placeholder="Email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className={Styles["input-group"]}>
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      name="password"
                      value={password}
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <button
                    className={Styles["signupBtn"]}
                    onClick={handleSignup}
                  >
                    Sign Up
                  </button>
                  {signupSucess && <p>{signupSucess}</p>}
                  {signupFailure && <p>{signupFailure}</p>}
                  <div className={Styles["login-now"]}>
                    <p>Already have an account?</p>
                    <Link to="/login">Login</Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
