import style from "../../style/projectpage/Projects.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Autoplay, EffectFade } from "swiper/modules";

import { motion } from "framer-motion";
import { useState } from "react";

export default function PastProjects() {
  const [head, setHead] = useState(false);
  return (
    <motion.div
      className={style.container}
      onViewportEnter={() => setHead(true)}
    >
      <div>
        <motion.h1
          animate={
            head
              ? {
                  x: 0,
                  opacity: 1,
                }
              : {
                  x: "100vw",
                  opacity: 0,
                }
          }
          transition={{
            type: "tween",
            duration: 1,
            ease: "easeInOut",
          }}
          className={style.heading}
        >
          Our Past Work
        </motion.h1>
      </div>
      <motion.div
        style={{
          height: "100%",
          width: "100%",
        }}
        animate={
          head
            ? {
                x: 0,
                opacity: 1,
              }
            : {
                x: "-100vw",
                opacity: 1,
              }
        }
        transition={{
          type: "tween",
          duration: 1,
        }}
        className={style.pccont}
      >
        <Swiper
          className={`mySwiper ${style.slideContainer}`}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, EffectFade]}
        >
          <SwiperSlide className={style.slide}>
            <div className={style.project1}>
              <img src="/choose.jpg" alt="" className={style.img} />
            </div>
            <div className={style.project2}>
              <img src="/fomstock.jpg" alt="" className={style.img} />
            </div>
            <div className={style.project3}>
              <img
                src="/nastuh-abootalebi-ZtC4_rPCRXA.jpg"
                alt=""
                className={style.img}
              />
            </div>
            <div className={style.project4}>
              <img
                src="/verne-ho-0LAJfSNa-xQ.jpg"
                alt=""
                className={style.img}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className={style.slide}>
            <div className={style.project1}>
              <img src="/choose.jpg" alt="" className={style.img} />
            </div>
            <div className={style.project2}>
              <img
                src="/nastuh-abootalebi-eHD8Y1Znfpk-unsplash.jpg"
                alt=""
                className={style.img}
              />
            </div>
            <div className={style.project3}>
              <img
                src="/nastuh-abootalebi-ZtC4_rPCRXA.jpg"
                alt=""
                className={style.img}
              />
            </div>
            <div className={style.project4}>
              <img
                src="/verne-ho-0LAJfSNa-xQ.jpg"
                alt=""
                className={style.img}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className={style.slide}>
            <div className={style.project1}>
              <img src="/choose.jpg" alt="" className={style.img} />
            </div>
            <div className={style.project2}>
              <img
                src="/nastuh-abootalebi-eHD8Y1Znfpk-unsplash.jpg"
                alt=""
                className={style.img}
              />
            </div>
            <div className={style.project3}>
              <img
                src="/nastuh-abootalebi-ZtC4_rPCRXA.jpg"
                alt=""
                className={style.img}
              />
            </div>
            <div className={style.project4}>
              <img
                src="/verne-ho-0LAJfSNa-xQ.jpg"
                alt=""
                className={style.img}
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </motion.div>
      <motion.div
        style={{
          height: "100%",
          width: "100%",
        }}
        animate={
          head
            ? {
                x: 0,
                opacity: 1,
              }
            : {
                x: "-100vw",
                opacity: 1,
              }
        }
        transition={{
          type: "tween",
          duration: 1,
        }}
        className={style.slideMobContainer}
      >
        <Swiper
          className={`mySwiper`}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, EffectFade]}
        >
          <SwiperSlide className={style.slide}>
            <div className={style.project}>
              <img src="/choose.jpg" alt="" className={style.img} />
            </div>
          </SwiperSlide>
          <SwiperSlide className={style.slide}>
            <div className={style.project}>
              <img
                src="/verne-ho-0LAJfSNa-xQ.jpg"
                alt=""
                className={style.img}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className={style.slide}>
            <div className={style.project}>
              <img
                src="/nastuh-abootalebi-ZtC4_rPCRXA.jpg"
                alt=""
                className={style.img}
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </motion.div>
    </motion.div>
  );
}
