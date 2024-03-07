import React from "react";
import Styles from "./TopWidget.module.css";
const TopWidget = () => {
  const items = [
    {
      id: 1,
      label: "Basic Information",
      imgSrc:
        "https://banner2.cleanpng.com/20180518/uth/kisspng-computer-icons-information-clip-art-5aff14d8c73108.4737218615266664568159.jpg",
    },
    {
      id: 2,
      label: "Company Directors",
      imgSrc:
        "https://kreditaid.com/assets/home_e/images/company_info/director.png",
    },
    {
      id: 3,
      label: "Charges Details",
      imgSrc:
        "https://kreditaid.com/assets/home_e/images/company_info/charges.png",
    },
    {
      id: 4,
      label: "Financial Report",
      imgSrc:
        "https://kreditaid.com/assets/home_e/images/company_info/finance.png",
    },
    {
      id: 5,
      label: "Contact Details",
      imgSrc:
        "https://kreditaid.com/assets/home_e/images/company_info/contact.png",
    },
    {
      id: 6,
      label: "FAQs",
      imgSrc:
        "https://kreditaid.com/assets/home_e/images/company_info/faqs.png",
    },
  ];
  return (
    <section className={Styles["top-widget"]}>
      <div className={Styles["widget-wrap"]}>
        <ul>
          {items.map((item, idx) => (
            <li key={idx} className={Styles["widget-item"]}>
              <div className={Styles["item-img-wrap"]}>
                <img
                  src={item.imgSrc}
                  alt="item-image"
                  className={Styles["item-img"]}
                />
              </div>
              <h4 className={Styles["item-label"]}>{item.label}</h4>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TopWidget;
