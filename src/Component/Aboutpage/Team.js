import style from "../../style/aboutpage/Team.module.css";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Team() {
  const [animate, setAnimate] = useState(false);
  const parent = {
    hidden: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.2,
        staggerChildren: 0.2,
      },
    },
  };
  const child = {
    hidden: {
      opacity: 0,
      x: "100vw",
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        type: "tween",
        duration: 1,
        ease: "easeInOut",
      },
    },
  };
  const [head, setHead] = useState(false);
  return (
    <div className={style.container}>
      <motion.div
        className={style.boxContainer}
        onViewportEnter={() => setHead(true)}
      >
        <motion.h1
          className={style.heading}
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
            ease: "easeInOut",
          }}
        >
          Meet Our Team
        </motion.h1>
        <motion.div
          className={style.textContainer}
          variants={parent}
          animate={animate ? "animate" : "hidden"}
          onViewportEnter={() => setAnimate(true)}
        >
          <motion.div className={style.card} variants={child}>
            <img src="/mubariz.png" alt="" className={style.img} />
            <div className={style.name}>M.Hamiz Waqar</div>
            <div className={style.intro}>Head Planning and Management</div>
          </motion.div>
          <motion.div className={style.card} variants={child}>
            <img src="/mubariz.png" alt="" className={style.img} />
            <div className={style.name}>Hammad Bashir</div>
            <div className={style.intro}>Head Civil Engineering and Design</div>
          </motion.div>
          <motion.div className={style.card} variants={child}>
            <img src="/mubariz.png" alt="" className={style.img} />
            <div className={style.name}>M. Ahsan Javed</div>
            <div className={style.intro}>Head Architecture and Design</div>
          </motion.div>
          <motion.div className={style.card} variants={child}>
            <img src="/mubariz.png" alt="" className={style.img} />
            <div className={style.name}>Sawaiz Waqar</div>
            <div className={style.intro}>
              Project Coordinator and Technical Writer
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
