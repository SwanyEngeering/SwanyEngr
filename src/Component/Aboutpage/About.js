import style from "../../style/aboutpage/About.module.css";

import { useState } from "react";
import { motion } from "framer-motion";

export default function About() {
  const [head, setHead] = useState(false);
  const [text, setText] = useState(false);
  return (
    <motion.div
      className={style.container}
      onViewportEnter={() => setHead(true)}
    >
      <motion.h1
        className={style.heading}
        animate={
          head
            ? {
                y: 0,
                opacity: 1,
              }
            : {
                y: "100vh",
                opacity: 0,
              }
        }
        transition={{
          type: "tween",
          duration: 1,
          ease: "easeInOut",
        }}
      >
        What Do You Know About Us?
      </motion.h1>
      <motion.div
        className={style.boxContainer}
        onViewportEnter={() => setText(true)}
      >
        <motion.div
          className={style.textContainer}
          animate={
            text
              ? {
                  y: 0,
                  opacity: 1,
                }
              : {
                  y: "100vh",
                  opacity: 0,
                }
          }
          transition={{
            type: "tween",
            duration: 1,
            ease: "easeInOut",
          }}
        >
          <h1 className={style.textHead}>
            Welcome to Swany - Shaping Tomorrow, Engineering Today
          </h1>
          <p className={style.para1}>
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
          </p>
          <p className={style.para1}>
            Let's collaborate to turn ideas into reality, redefine standards,
            and build a future shaped by engineering excellence. Join us in
            shaping tomorrow—choose Swany as your trusted partner for
            transformative and unparalleled engineering solutions.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
