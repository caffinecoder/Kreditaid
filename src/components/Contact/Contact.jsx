import React from "react";
import Styles from "./Contact.module.css";
import { Link } from "react-router-dom";
import { FiPhoneCall } from "react-icons/fi";
import { Style } from "@mui/icons-material";
import { IoHome } from "react-icons/io5";
import { MdAttachEmail } from "react-icons/md";
const Contact = () => {
  return (
    <main>
      <section className="contact-sec">
        <div className={Styles["contact-container"]}>
          <div className={Styles["contact-left"]}>
            <div className={Styles["info-wrap"]}>
              <div className={Styles["info"]}>
                <div className={Styles["icon-address"]}>
                  <IoHome />
                </div>
                <div className={Style["info-right"]}>
                  <h3 className={Styles["info-title"]}>Address</h3>
                  <p className={Styles["info-para"]}>
                    Star-Tower, 7th Floor. Gurugram, Haryana
                  </p>
                </div>
              </div>
              <div className={Styles["info"]}>
                <div className={Styles["icon-phone"]}>
                  <FiPhoneCall />
                </div>
                <div className={Style["info-right"]}>
                  <h3 className={Styles["info-title"]}>Phone</h3>
                  <Link to="tel:9876543210" className={Styles["info-para"]}>
                    9876543210
                  </Link>
                </div>
              </div>
              <div className={Styles["info"]}>
                <div className={Styles["icon-email"]}>
                  <MdAttachEmail />
                </div>
                <div className={Style["info-right"]}>
                  <h3 className={Styles["info-title"]}>Email</h3>
                  <Link
                    to="mailto:info@kreditaid.com"
                    className={Styles["info-para"]}
                  >
                    info@kreditaid.com
                  </Link>
                </div>
              </div>
            </div>
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
