import React from "react";
import Styles from "./Banner.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
  };
  return (
    <div>
      <section className={Styles["banner"]}>
        <div className={Styles["banner-slider"]}>
          <Slider {...settings}>
            <div>
              <img src={"../src/assets/images/slider.png"}></img>
            </div>
            <div>
              <img src={"../src/assets/images/slider.png"}></img>
            </div>
            <div>
              <img src={"../src/assets/images/slider.png"}></img>
            </div>
          </Slider>
        </div>
        <div className={Styles["banner-card-wrap"]}></div>
      </section>
    </div>
  );
};

export default Banner;
