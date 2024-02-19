import React from "react";
import Styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import { SiInstagram } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className={Styles["footer-wrap"]}>
          <div className={Styles["footer-content-left"]}>
            <div className={Styles["footer-logo"]}>
              <img
                src="https://kreditaid.com/assets/website/kreditaid.png"
                alt="footer-logo"
              />
            </div>
            <p className={Styles["footer-caps"]}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
            <div className={Styles["media-links"]}>
              <Link to="/" className={Styles["fb-link"]}>
                <FaFacebook />
              </Link>
              <Link to="/" className={Styles["insta-link"]}>
                <SiInstagram />
              </Link>
              <Link to="/" className={Styles["twitter-link"]}>
                <FaXTwitter />
              </Link>
              <Link to="/" className={Styles["linkedin-link"]}>
                <FaLinkedin />
              </Link>
            </div>
          </div>
          <div className={Styles["footer-content-right"]}>
            <div className={Styles["imp-links-wrap"]}>
              <div className={Styles["imp-links"]}>
                <h4>Services</h4>
                <ul className={Styles["footer-nav"]}>
                  <li className={Styles["footer-nav-tab"]}>
                    <Link to="/" className={Styles["footer-tab-link"]}>
                      Business Information Services
                    </Link>
                  </li>
                  <li className={Styles["footer-nav-tab"]}>
                    <Link to="/" className={Styles["footer-tab-link"]}>
                      Debt Collection Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className={Styles["footer-tab-link"]}>
                      Paralegal Services
                    </Link>
                  </li>
                  <li className={Styles["footer-nav-tab"]}>
                    <Link to="/" className={Styles["footer-tab-link"]}>
                      Receivables Management Services
                    </Link>
                  </li>
                  <li className={Styles["footer-nav-tab"]}>
                    <Link to="/" className={Styles["footer-tab-link"]}>
                      Claim Settlement Services
                    </Link>
                  </li>
                  <li className={Styles["footer-nav-tab"]}>
                    <Link to="/" className={Styles["footer-tab-link"]}>
                      Contrary to popular belief
                    </Link>
                  </li>
                </ul>
              </div>
              <div className={Styles["imp-links"]}>
                <h4>Technologies</h4>
                <ul className={Styles["footer-nav"]}>
                  <li className={Styles["footer-nav-tab"]}>
                    <Link to="/" className={Styles["footer-tab-link"]}>
                      Home
                    </Link>
                  </li>
                  <li className={Styles["footer-nav-tab"]}>
                    <Link to="/" className={Styles["footer-tab-link"]}>
                      Home
                    </Link>
                  </li>
                  <li className={Styles["footer-nav-tab"]}>
                    <Link to="/" className={Styles["footer-tab-link"]}>
                      Home
                    </Link>
                  </li>
                  <li className={Styles["footer-nav-tab"]}>
                    <Link to="/" className={Styles["footer-tab-link"]}>
                      Home
                    </Link>
                  </li>
                  <li className={Styles["footer-nav-tab"]}>
                    <Link to="/" className={Styles["footer-tab-link"]}>
                      Home
                    </Link>
                  </li>
                  <li className={Styles["footer-nav-tab"]}>
                    <Link to="/" className={Styles["footer-tab-link"]}>
                      Home
                    </Link>
                  </li>
                </ul>
              </div>
              <div className={Styles["imp-links"]}>
                <h4>Company</h4>
                <ul className={Styles["footer-nav"]}>
                  <li className={Styles["footer-nav-tab"]}>
                    <Link to="/" className={Styles["footer-tab-link"]}>
                      Home
                    </Link>
                  </li>
                  <li className={Styles["footer-nav-tab"]}>
                    <Link to="/" className={Styles["footer-tab-link"]}>
                      Home
                    </Link>
                  </li>
                  <li className={Styles["footer-nav-tab"]}>
                    <Link to="/" className={Styles["footer-tab-link"]}>
                      Home
                    </Link>
                  </li>
                  <li className={Styles["footer-nav-tab"]}>
                    <Link to="/" className={Styles["footer-tab-link"]}>
                      Home
                    </Link>
                  </li>
                  <li className={Styles["footer-nav-tab"]}>
                    <Link to="/" className={Styles["footer-tab-link"]}>
                      Home
                    </Link>
                  </li>
                  <li className={Styles["footer-nav-tab"]}>
                    <Link to="/" className={Styles["footer-tab-link"]}>
                      Home
                    </Link>
                  </li>
                </ul>
              </div>
              <div className={Styles["imp-links"]}>
                <h4>Services</h4>
                <ul className={Styles["footer-nav"]}>
                  <li className={Styles["footer-nav-tab"]}>
                    <Link to="/" className={Styles["footer-tab-link"]}>
                      Home
                    </Link>
                  </li>
                  <li className={Styles["footer-nav-tab"]}>
                    <Link to="/" className={Styles["footer-tab-link"]}>
                      Home
                    </Link>
                  </li>
                  <li className={Styles["footer-nav-tab"]}>
                    <Link to="/" className={Styles["footer-tab-link"]}>
                      Home
                    </Link>
                  </li>
                  <li className={Styles["footer-nav-tab"]}>
                    <Link to="/" className={Styles["footer-tab-link"]}>
                      Home
                    </Link>
                  </li>
                  <li className={Styles["footer-nav-tab"]}>
                    <Link to="/" className={Styles["footer-tab-link"]}>
                      Home
                    </Link>
                  </li>
                  <li className={Styles["footer-nav-tab"]}>
                    <Link to="/" className={Styles["footer-tab-link"]}>
                      Home
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className={Styles["address-wrap"]}>
              <h4 className={Styles["addr-title"]}>Office Address</h4>
              <div className={Styles["address-info"]}>
                <div className={Styles["indian-addr"]}>
                  <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literatu
                  </p>
                </div>
                <div className={Styles["indian-addr"]}>
                  <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literatu
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={Styles["copyright-wrap"]}>
          <span className={Styles["rights"]}>
            &copy; 2024 Kreditaid, All rights reserved.
          </span>
          <span className={Styles["privacy"]}>
            Privacy Policy | Terms of services
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
