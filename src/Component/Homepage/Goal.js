import style from "../../style/homepage/About.module.css";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Goal() {
  const [animate, setAnimate] = useState(false);
  const [animateImage, setAnimateImage] = useState(false);
  return (
    <>
      <div className={style.container}>
        <motion.div
          className={style.aboutHead}
          onViewportEnter={() => setAnimate(true)}
        >
          <motion.div
            animate={
              animate
                ? {
                    x: "0",
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
            <h1 className={style.heading}>Why Choose Us</h1>
            <h3 className={style.para}>
              At Swany Engineering, we understand that every project is unique,
              and our bespoke design solutions reflect this understanding. Our
              proficiency in both 2D and 3D design ensures a comprehensive
              visualization of your project, allowing you to explore every
              detail before construction begins. Whether you seek meticulous
              precision in 2D plans or immersive realism through our
              cutting-edge 3D designs, we have the tools and talent to exceed
              your expectations. Transparency and collaboration are the
              cornerstones of our approach. From the initial consultation to the
              final rendering, we prioritize clear communication and client
              input.
            </h3>
            <a href="/projects" className={style.link}>
              <button className={style.btn}>
                Projects <span className={style.arrow}>&gt;</span>{" "}
              </button>
            </a>
          </motion.div>
        </motion.div>
        <motion.div
          style={{
            width: "100%",
            height: "20rem",
          }}
          onViewportEnter={() => setAnimateImage(true)}
        >
          <motion.div
            className={`${style.imageContainer} ${style.choose}`}
            animate={
              animateImage
                ? {
                    x: "0",
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
          ></motion.div>
        </motion.div>
      </div>
    </>
  );
}
