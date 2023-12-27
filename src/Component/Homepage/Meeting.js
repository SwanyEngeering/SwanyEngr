import style from "../../style/homepage/Services.module.css";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Services() {
  const [animate, setAnimate] = useState(false);
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
            className={`${style.imageContainer} ${style.meeting}`}
            animate={
              animateImage
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
          ></motion.div>
        </motion.div>
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
            <h1 className={style.heading}>Request a Meeting</h1>
            <h3 className={style.para}>
              Thank you for considering Swany Engineering as your trusted
              partner in transforming your architectural visions into reality.
              Our expert team specializes in creating both 2D and 3D designs for
              buildings and houses, ensuring precision and innovation in every
              project. Whether you're planning a new construction, renovation,
              or seeking conceptual designs, our dedicated professionals are
              here to bring your ideas to life.
            </h3>
            <a href="/contact" className={style.link}>
              <button className={style.btn}>
                Contact Us <span className={style.arrow}>&gt;</span>{" "}
              </button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
