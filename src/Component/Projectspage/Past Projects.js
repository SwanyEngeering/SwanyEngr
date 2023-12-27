import style from "../../style/projectpage/Projects.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Autoplay, EffectFade } from "swiper/modules";

export default function PastProjects() {
  return (
    <div className={style.container}>
      <div>
        <h1 className={style.heading}>Our Past Work</h1>
      </div>
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
            <img src="/verne-ho-0LAJfSNa-xQ.jpg" alt="" className={style.img} />
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
            <img src="/verne-ho-0LAJfSNa-xQ.jpg" alt="" className={style.img} />
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
            <img src="/verne-ho-0LAJfSNa-xQ.jpg" alt="" className={style.img} />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
