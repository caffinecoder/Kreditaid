import React from "react";
import Styles from "./Services.module.css";
import {
  WebSvg,
  AppDevSVg,
  InterfaceSvg,
  MblAppDevSVg,
  SupportSVg,
  MarketingSVg,
  ReadMoreSVg,
} from "./Icon";

const Services = () => {
  const servicesItem = [
    {
      id: 1,
      itemIcon: <WebSvg />,
      label: "Instant Search",
      info: "Our team of highly trained professionals will help take your business to the web and help it reach online audiences effectively work with us to get all the insights and expertise.",
      readMore: "Read more",
    },
    {
      id: 2,
      itemIcon: <InterfaceSvg />,
      label: "Financial Report",
      info: "Our mobile app development is done with creativity and precision, so your business can seamlessly transition from website to app Build your brand engagement.",
      readMore: "Read more",
    },
    {
      id: 3,
      itemIcon: <AppDevSVg />,
      label: "Director Information",
      info: "We develop highly adaptive and functional web applications using the latest tools and cutting edge technologies. Get in touch with us to discuss your requirements.",
      readMore: "Read more",
    },
    {
      id: 4,
      itemIcon: <MblAppDevSVg />,
      label: "Fast & Secure",
      info: "Our mobile app development is done with creativity and precision, so your business can seamlessly transition from website to app Build your brand engagement.",
      readMore: "Read more",
    },
    {
      id: 5,
      itemIcon: <SupportSVg />,
      label: "Consolidate Reports",
      info: "Are you dealing with security patches, legacy code, or broken links on the website? Let our experts keep your website up-to-date, secure and bug-free.",
      readMore: "Read more",
    },
    {
      id: 6,
      itemIcon: <MarketingSVg />,
      label: "",
      info: "Digital marketing is no longer an option but a necessity. We provide the best digital marketing services with our expert knowledge on strategy, design, and development.",
      readMore: "Read more",
    },
  ];
  return (
    <div className={Styles["services-sec "]}>
      <div className="container">
        <ul className={Styles["services-listing"]}>
          {servicesItem.map((service, idx) => (
            <li key={idx} className={Styles["services-list"]}>
              <div className={Styles["services-icon"]}>{service.itemIcon}</div>
              <h2 className={Styles["services-title"]}>{service.label}</h2>
              <p className={Styles["services-para"]}>{service.info}</p>
              <button className={Styles["readMore-btn"]}>
                {service.readMore}
                <div className={Styles["readMore-icon"]}>
                  <ReadMoreSVg />
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Services;
