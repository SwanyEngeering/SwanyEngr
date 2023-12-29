import style from "../../style/servicepage/Goal.module.css";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Goal() {
  const [head, setHead] = useState(false);
  const [text, setText] = useState(false);
  return (
    <motion.div
      className={style.container}
      onViewportEnter={() => setHead(true)}
    >
      <motion.h1
        className={style.boxHeading}
        animate={
          head
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
          duration: 1.5,
          ease: "easeInOut",
        }}
      >
        Our Goals
      </motion.h1>
      <motion.div
        className={style.boxContainer}
        onViewportEnter={() => setText(true)}
      >
        <motion.div
          className={style.value1}
          animate={
            text
              ? {
                  transform: "rotateX(0deg)",
                  opacity: 1,
                }
              : {
                  transform: "rotateX(90deg)",
                  opacity: 0,
                }
          }
          transition={{
            type: "tween",
            duration: 1.5,
            ease: "easeInOut",
          }}
        >
          <div className={style.heading}>Bid Wining Ratio</div>
          <p className={style.para}>
            Consistently secure victories in the competitive landscape, ensuring
            our clients' projects stand out and succeed.
          </p>
        </motion.div>
        <motion.div
          className={style.value2}
          animate={
            text
              ? {
                  transform: "rotateX(0deg)",
                  opacity: 1,
                }
              : {
                  transform: "rotateX(180deg)",
                  opacity: 0,
                }
          }
          transition={{
            type: "tween",
            duration: 1.5,
            ease: "easeInOut",
            delay: 0.2,
          }}
        >
          <div className={style.heading}>Excellent Services:</div>
          <p className={style.para}>
            Striving for unparalleled quality, we are committed to delivering
            engineering services that surpass industry standards, ensuring
            client satisfaction.
          </p>
        </motion.div>
        <motion.div
          className={style.value2}
          animate={
            text
              ? {
                  transform: "rotateX(0deg)",
                  opacity: 1,
                }
              : {
                  transform: "rotateX(180deg)",
                  opacity: 0,
                }
          }
          transition={{
            type: "tween",
            duration: 1.5,
            ease: "easeInOut",
            delay: 0.4,
          }}
        >
          <div className={style.heading}>Cost-Efficiency Redefined:</div>
          <p className={style.para}>
            Provide exceptional engineering solutions without compromising
            quality, maintaining costeffectiveness for the benefit of our
            clients.
          </p>
        </motion.div>
        <motion.div
          className={style.value1}
          animate={
            text
              ? {
                  transform: "rotateY(0deg)",
                  opacity: 1,
                }
              : {
                  transform: "rotateY(90deg)",
                  opacity: 0,
                }
          }
          transition={{
            type: "tween",
            duration: 1.5,
            ease: "easeInOut",
            delay: 0.6,
          }}
        >
          <div className={style.heading}>Client Satisfaction</div>
          <p className={style.para}>
            Focused on forging lasting relationships, our aim is to achieve high
            levels of client satisfaction by consistently exceeding expectations
            in every aspect of our services.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
