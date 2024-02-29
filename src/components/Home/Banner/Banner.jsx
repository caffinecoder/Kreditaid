import React from "react";
import Styles from "./Banner.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BannerSearch from "./BannerSearch";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div>
      <section className={Styles["banner"]}>
        <div className={`${Styles["banner-container"]} container `}>
          <div className={Styles["banner-card-wrap"]}>
            <div className={Styles["banner-left"]}>
              <h1 className={Styles["title"]}>
                Unlocking, Insights,
                <br />
                Empowering, Decision.
              </h1>
              <div className={Styles["banner-content"]}>
                <div>
                  <BannerSearch />
                </div>
              </div>
            </div>
            <div className={Styles["banner-right"]}></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
