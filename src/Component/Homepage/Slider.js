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
      y: "20rem",
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
        modules={[Autoplay, EffectCreative]}
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
          <img
            src="/andrade-YI_9SivVt_s-unsplash.jpg"
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
          <img src="/fomstock.jpg" alt="" className={style.imag} />
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
            src="/copernico-p_kICQCOM4s-unsplash.jpg"
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
          <img src="/choose.jpg" alt="" className={style.imag} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
