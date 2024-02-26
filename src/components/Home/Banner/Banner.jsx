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
        <div className={Styles["banner-slider"]}>
          <Slider {...settings}>
            <div className={Styles["slide"]}>
              <img src="https://img.freepik.com/free-vector/business-growth-technology-template-vector-dark-blue-tone_53876-112207.jpg?t=st=1708771264~exp=1708774864~hmac=dfcffb2bb57c161b2739ad3ee484955fbdb14a0f1f7dfc8e6241fa3e5a0a8317&w=1380" />
            </div>
            <div className={Styles["slide"]}>
              <img src="https://img.freepik.com/free-vector/stock-graph-market-finance-chart-growth-business-blue-bond-data-online-bank_333792-77.jpg?t=st=1708771169~exp=1708774769~hmac=34645d5891ae599416f928ec740250f281ebf99ebbd07d340e13c5314cde7827&w=1380" />
            </div>
            <div className={Styles["slide"]}>
              <img src="https://img.freepik.com/free-vector/global-business-background-with-stock-chart-blue-tone_53876-117483.jpg?t=st=1708769764~exp=1708773364~hmac=d38eccdd949b809a38a2ca03e2e2375df64c73f56a11be64248ec923a1988cc4&w=1380" />
            </div>
          </Slider>
        </div>
        <div className={Styles["banner-card-wrap"]}>
          <div className={`${Styles["banner-container"]} container `}>
            <h1 className={Styles["title"]}>
              Analyze<br/>with Meticulous<br/>Precision and Accuracy.
            </h1>
            <div className={Styles["banner-content"]}>
              <div>
                <BannerSearch />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
