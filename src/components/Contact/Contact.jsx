import React from "react";
import Styles from "./Contact.module.css";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <main>
      <section className="contact-sec">
        <div className={Styles["contact-container"]}>
          <div className={Styles["contact-left"]}>
            <h2>Contact Information</h2>
            <p>
              Connect with our experts to learn how The Good Creator Co. can
              help your brand drive meaningful results such as clicks, sales,
              and installs through influencer marketing.
            </p>
            <div className={Styles["info"]}></div>
          </div>
          <div className={Styles["contact-right"]}>
            <form className={Styles["form"]}>
              <div className={Styles["form-container"]}>
                <p className={Styles.title}>Get in Touch</p>
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
                  <Link to="/otp" className={Styles["contactBtn"]}>
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
      </section>
    </main>
  );
};

export default Contact;
