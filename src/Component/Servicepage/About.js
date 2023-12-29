import style from "../../style/aboutpage/About.module.css";

import { motion } from "framer-motion";
import { useState } from "react";

export default function About() {
  const [animate, setAnimate] = useState(false);
  const [head, setHead] = useState(false);
  const child = {
    hidden: {
      opacity: 0,
      x: "-100vw",
    },
    animate: {
      opacity: 1,
      x: 0,
      tansition: {
        type: "tween",
        duration: 1,
        ease: "easeInOut",
      },
    },
  };
  return (
    <motion.div
      className={style.container}
      onViewportEnter={() => setHead(true)}
    >
      <motion.h1
        className={`${style.heading} ${style.aboutHead}`}
        animate={
          head
            ? {
                x: 0,
                opacity: 1,
              }
            : {
                opacity: 0,
                x: "-100vw",
              }
        }
        transition={{
          type: "tween",
          duration: 1,
        }}
      >
        What Do You Know About Us?
      </motion.h1>
      <motion.div className={`${style.boxContainer} ${style.aboutBox}`}>
        <motion.div
          className={style.textContainer}
          onViewportEnter={() => setAnimate(true)}
        >
          <motion.h1
            className={`${style.textHead} ${style.about}`}
            variants={child}
            animate={animate ? "animate" : "hidden"}
          >
            Welcome to Swany - Shaping Tomorrow, Engineering Today
          </motion.h1>
          <motion.p
            className={style.para1}
            variants={child}
            animate={animate ? "animate" : "hidden"}
          >
            At Swany, we stand at the forefront of groundbreaking engineering
            solutions, seamlessly blending innovation, precision, and unwavering
            dedication. Our comprehensive services encompass the entire spectrum
            of project management, meticulous planning, precise scheduling, and
            cutting-edge 2D drafting and 3D BIM modeling. We specialize in
            structural design mastery and expert bid and proposal writing. More
            than service providers, we are your strategic partners committed to
            exceeding expectations, forging lasting relationships, and setting
            new industry benchmarks. Under the visionary leadership of our CEO,
            our professional team brings together diverse skills and
            experiences, ensuring each project is a masterpiece.
          </motion.p>
          <motion.p
            className={style.para1}
            variants={child}
            animate={animate ? "animate" : "hidden"}
          >
            Let's collaborate to turn ideas into reality, redefine standards,
            and build a future shaped by engineering excellence. Join us in
            shaping tomorrow—choose Swany as your trusted partner for
            transformative and unparalleled engineering solutions.
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
