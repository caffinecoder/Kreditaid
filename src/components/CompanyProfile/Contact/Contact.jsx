import React from "react";
import Styles from "./Contact.module.css";

const Contact = () => {
  return (
    <main>
      <section className={Styles["contact"]}>
        <div className={Styles["info-header"]}>
          <h2 className={Styles["info-title"]}>Contact</h2>
          <p>
            Basic Data Updated:
            <span className={Styles["updated"]}> 15Days ago</span>
          </p>
        </div>
        <div className={Styles["contact-grid"]}>
          <div className={Styles["details"]}>
            <h3>Email</h3>
            <p>Accounts@ucs-mail.com</p>
          </div>
          <div className={Styles["details"]}>
            <h3>Registered Address</h3>
            <p>
              7th Floor, No.715, 721 Dlf Star Tower, Sector30, Gurgaon, Gurgaon,
              Haryana, India, 122001
            </p>
          </div>
          <div className={Styles["details"]}>
            <h3>Other Address</h3>
            <p>
              <b>Annual Return Address:</b> 901, 9th Floor, Vikrant Tower 4
              Rajendra Place, New Delhi, India
              <b> Police Station Address:</b> Mf Husain Marg, Sector-29 Near
              Fire Brigade Station, Gurgaon, India
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
