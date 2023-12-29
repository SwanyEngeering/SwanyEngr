import { useState } from "react";
import style from "../../style/aboutpage/Values.module.css";

import { motion } from "framer-motion";

export default function Values() {
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
                x: "100vw",
                opacity: 0,
              }
        }
        transition={{
          type: "tween",
          duration: 1.5,
          ease: "easeInOut",
        }}
      >
        Our Values
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
          }}
        >
          <div className={style.heading}>Integrity</div>
          <p className={style.para}>
            Integrity is at the core of our interactions. We conduct our
            business with honesty, transparency, and a commitment to ethical
            practices.
          </p>
        </motion.div>
        <motion.div
          className={`${style.value2} ${style.value1}`}
          animate={
            text
              ? {
                  transform: "rotateY(0deg)",
                  opacity: 1,
                }
              : {
                  transform: "rotateY(180deg)",
                  opacity: 0,
                }
          }
          transition={{
            type: "tween",
            duration: 1.5,
            ease: "easeInOut",
          }}
        >
          <div className={style.heading}>Accountability</div>
          <p className={style.para}>
            We take responsibility for our actions and decisions. Accountability
            is integral to maintaining trust with our clients, team members, and
            stakeholders.
          </p>
        </motion.div>
        <motion.div
          className={`${style.value2} ${style.value1}`}
          animate={
            text
              ? {
                  transform: "rotateY(0deg)",
                  opacity: 1,
                }
              : {
                  transform: "rotateY(180deg)",
                  opacity: 0,
                }
          }
          transition={{
            type: "tween",
            duration: 1.5,
            ease: "easeInOut",
          }}
        >
          <div className={style.heading}>Teamwork</div>
          <p className={style.para}>
            Teamwork is the foundation of our achievements. We foster a
            collaborative and supportive environment, recognizing the collective
            strength of our team.
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
          }}
        >
          <div className={style.heading}>Sustainability</div>
          <p className={style.para}>
            We recognize the importance of environmental responsibility and
            integrate sustainable practices into our projects, contributing to a
            more resilient and eco-friendly future.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
