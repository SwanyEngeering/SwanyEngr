// Import Swiper styles
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Autoplay, EffectCreative, Navigation } from "swiper/modules";

// import required modules
import React from "react";
import style from "../../style/homepage/Home.module.css";
import { motion } from "framer-motion";

export default function App() {
  const animateVariants = {
    hidden: {
      opacity: 0,
      y: "10rem",
    },
    animate: {
      opacity: 1,
      y: "0rem",
      transition: {
        type: "spring",
        stiffness: 140,
        damping: 11,
        duration: 0.3,
        repeat: 0,
      },
    },
  };
  return (
    <>
      <Swiper
        navigation={true}
        spaceBetween={30}
        grabCursor={true}
        effect={"creative"}
        loop={true}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation, EffectCreative]}
        className="mySwiper"
      >
        <SwiperSlide>
          <motion.div
            className={style.sliderContainer}
            variants={animateVariants}
            initial={"hidden"}
            animate={"animate"}
          >
            <div className={style.carouselHead}>Lost in transition?</div>
            <motion.button
              whileTap={{
                scale: 0.8,
              }}
              className={style.slideBtn}
            >
              Learn More
            </motion.button>
          </motion.div>
          <img src="/foi_image-homepage-2.jpg" alt="" className={style.imag} />
        </SwiperSlide>
        <SwiperSlide>
          <motion.div
            className={style.sliderContainer}
            variants={animateVariants}
            initial={"hidden"}
            animate={"animate"}
          >
            <div className={style.carouselHead}>Strategy in Transit</div>
            <motion.button
              whileTap={{
                scale: 0.8,
              }}
              className={style.slideBtn}
            >
              Learn More
            </motion.button>
          </motion.div>
          <img src="/HRC-Header2.png" alt="" className={style.imag} />
        </SwiperSlide>
        <SwiperSlide>
          <motion.div
            className={style.sliderContainer}
            variants={animateVariants}
            initial={"hidden"}
            animate={"animate"}
          >
            <div className={style.carouselHead}>What will your legacy be?</div>
            <motion.button
              whileTap={{
                scale: 0.8,
              }}
              className={style.slideBtn}
            >
              Learn More
            </motion.button>
          </motion.div>
          <img
            src="/sustainable-legacies-banner-home.jpg"
            alt=""
            className={style.imag}
          />
        </SwiperSlide>
        <SwiperSlide>
          <motion.div
            className={style.sliderContainer}
            variants={animateVariants}
            initial={"hidden"}
            animate={"animate"}
          >
            <div className={style.carouselHead}>Transforming LA future</div>
            <motion.button
              whileTap={{
                scale: 0.8,
              }}
              className={style.slideBtn}
            >
              Learn More
            </motion.button>
          </motion.div>
          <img
            src="/thumbnail_header1-1980x500px-header-teal.jpg"
            alt=""
            className={style.imag}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
