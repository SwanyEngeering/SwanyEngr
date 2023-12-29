import { useState } from "react";
import style from "../../style/aboutpage/ceo.module.css";

import { motion } from "framer-motion";

export default function CEO() {
  const [img, setImg] = useState(false);
  const [text, setText] = useState(false);
  return (
    <div className={style.container}>
      <motion.div
        className={style.imgContainer}
        onViewportEnter={() => setImg(true)}
      >
        <motion.img
          src="/patrick-tomasso-gMes5dNykus-unsplash.jpg"
          alt=""
          className={style.img}
          animate={
            img
              ? {
                  x: 0,
                  opacity: 1,
                }
              : {
                  x: "-100vw",
                  opacity: 0,
                }
          }
          transition={{
            type: "tween",
            duration: 1,
          }}
        />
        <motion.div
          className={style.name}
          animate={
            img
              ? {
                  x: 0,
                  opacity: 1,
                }
              : {
                  x: "-100vw",
                  opacity: 0,
                }
          }
          transition={{
            type: "tween",
            duration: 1,
            ease: "easeInOut",
          }}
        >
          <div
            style={{
              fontWeight: "bold",
            }}
          >
            M. Hamiz Waqar
          </div>
          <span>
            Founder SWANY <br /> Engineering Solutions
          </span>
        </motion.div>
      </motion.div>
      <motion.div
        className={style.boxContainer}
        onViewportEnter={() => setText(true)}
      >
        <motion.div
          className={style.heading}
          animate={
            text
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
        >
          <h1 className={style.msg}>Message from CEO</h1>
        </motion.div>
        <motion.div
          className={style.textContainer}
          animate={
            text
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
        >
          <div className={style.textHead}>
            "Revolutionizing Engineering with Passion and Precision: <br />{" "}
            Energize your projects, elevate your visions – welcome to the
            dynamic world of Swany!"
          </div>
          <p className={style.para}>
            At Swany, we believe in the transformative power of engineering to
            shape a better tomorrow. We lead a team of dedicated professionals
            who are not just architects of structures but creators of
            possibilities. Our commitment goes beyond delivering exceptional
            services; it's about crafting experiences, fostering innovation, and
            building lasting relationships. Swany is not just a company; it's a
            testament to the passion, precision, and unwavering dedication we
            bring to every project. Join us in this journey of innovation and
            let's build a future where engineering knows no bounds.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
