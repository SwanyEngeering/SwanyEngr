import { useState } from "react";
import bg from "../../style/homepage/Header.module.css";
import { motion } from "framer-motion";
import style from "../../style/servicepage/header.module.css";

export default function Header(props) {
  return (
    <>
      <div className={`${bg.container} ${props.bg}`}>
        <div className={style.box}>
          <div className={style.logoContainer}>
            <img
              className={style.logo}
              src="/dillon-kydd-XGvwt544g8k-unsplash.jpg"
              alt=""
            />
          </div>
          <div className={style.headText}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione in
            quis libero consequuntur. Voluptates officia ducimus rem saepe et
            ratione rerum, placeat optio? Ipsam tempora deleniti nisi, totam
            corrupti consequuntur.
          </div>
        </div>
      </div>
    </>
  );
}
