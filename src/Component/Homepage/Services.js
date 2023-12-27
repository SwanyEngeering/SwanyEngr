import style from "../../style/homepage/Services.module.css";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Services() {
  const [animate, setAnimate] = useState(false);
  const animation = {
    hidden: {
      x: "100vw",
      opacity: 0,
    },
    animate: {
      x: "0",
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1,
        ease: "easeInOut",
      },
    },
  };
  const [animateImage, setAnimateImage] = useState(false);
  return (
    <>
      <div className={style.container}>
        <motion.div
          style={{
            width: "100%",
            height: "20rem",
          }}
          onViewportEnter={() => setAnimateImage(true)}
        >
          <motion.div
            className={style.imageContainer}
            variants={animation}
            animate={animateImage ? "animate" : "hidden"}
          ></motion.div>
        </motion.div>
        <motion.div
          className={style.aboutHead}
          onViewportEnter={() => setAnimate(true)}
        >
          <motion.div
            variants={animation}
            animate={animate ? "animate" : "hidden"}
          >
            <h1 className={style.heading}>Services</h1>
            <h3 className={style.para}>
              Our services encompass project management, meticulous planning,
              precise scheduling, innovative 2D drafting, cutting-edge 3D BIM
              modeling, and compelling bid writing. At Swany, we're not just
              service providers; we're your success partners. Committed to
              exceeding expectations, we blend experience with a passion for
              perfection, building lasting relationships. Join us in shaping the
              future, project by project, and experience the dedicated
              excellence defining every Swany service.
            </h3>
            <a href="/service" className={style.link}>
              <button className={style.btn}>
                Our Services <span className={style.arrow}>&gt;</span>{" "}
              </button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
